// =====================================================================================
// Sky Chase 8.3 · GROUND TRUTH LOD — cel terrain + 2 imagery rings + colour/shape classifier
//                 + procedural 3D buildings, trees, bushes, grass and road markings
// -------------------------------------------------------------------------------------
// Replaces the 8.2 cel/HD patch. Paste ABOVE the line that begins  window.SKY_READY=true;
// in an untouched 8.1 file (or use the ready-made Sky-Chase-8.3.html).
//
// PIPELINE
//   1. Two Esri World Imagery rings follow a point ahead of the jet:
//        FAR  ring  z16 (~1.7 m/px, 8x8 tiles ≈ 3.4 km)  -> sky view
//        NEAR ring  z17 (~0.85 m/px, 8x8 tiles ≈ 1.7 km) -> low-level 3D
//   2. Every 2x2-tile chunk is analysed in Web Workers (colour + shape, nearest/in-view first):
//        per pixel: grass · tree · bush · road · roof · pavement · bare · water · shadow
//        buildings = roof-toned blobs split into rectangles; height = length of the shadow
//                    they cast (the imagery's sun direction is self-calibrated per area)
//        trees     = canopy distance-transform maxima -> crown radius, height, conifer/deciduous
//        roads     = narrow pavement; OpenStreetMap centre lines (optional, O key) give exact
//                    lanes, centre-line style, edge lines and bike lanes, plus exact footprints
//   3. GPU terrain shader keys off that class map: lawn (blade noise + mow stripes), canopy,
//      asphalt with yellow centre lines / white edge + bike-lane lines, flat cel roofs with ink
//      outlines and cel cast shadows from the estimated heights, pavement, water.
//   4. 3D LOD in the near ring: buildings rise out of their footprints (facade atlas: siding,
//      brick, curtain wall, stucco; gable/hip/flat roofs, parapets, rooftop units), trees and
//      bushes grow from crown centres, a GPU grass field appears under ~95 m AGL.
//   Keys: V style · B 3D on/off · X class-map x-ray · O OSM assist · G tuning panel
//   URL : ?hd=16  ?near=17|18  ?workers=2  ?q=low  ?osm=0  ?gt=0
// =====================================================================================

const GT_Q=new URL(location.href).searchParams;
const GT_LITE=GT_Q.get('q')==='low'||/iPad|iPhone|Android|Mobile/i.test(navigator.userAgent);
const GT_CFG={farZ:clamp(Math.round(+GT_Q.get('hd')||16),14,17),nearZ:clamp(Math.round(+GT_Q.get('near')||17),15,19),grid:8,
  workers:clamp(Math.round(+GT_Q.get('workers')||Math.min(3,Math.max(1,(navigator.hardwareConcurrency||4)-2))),1,4),
  build3D:1500,keep3D:2300,maxAGL3D:1400,grassAGL:95};
if(GT_CFG.nearZ<=GT_CFG.farZ)GT_CFG.nearZ=GT_CFG.farZ+1;
const MERC={lat:(y,z)=>{const n=Math.PI-2*Math.PI*y/2**z;return 180/Math.PI*Math.atan(Math.sinh(n));},lon:(x,z)=>x/2**z*360-180,
  tx:(lon,z)=>(lon+180)/360*2**z,ty:(lat,z)=>{const r=lat*Math.PI/180;return(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*2**z;}};
const ringMPP=z=>40075016*Math.cos(TERRAIN.origin.lat*Math.PI/180)/(256*2**z);

// ------------------------------- classifier (shared with the workers) -------------------------------
// Ground-truth classifier: color + shape -> classes, buildings, trees, road distance.
// Pure function, no DOM: runs in a Web Worker or on the main thread.
// Classes: 0 other · 1 water · 2 grass · 3 tree · 4 bush · 5 road · 6 roof · 7 pavement · 8 bare · 9 shadow
function gtAnalyze(src,W,H,o){
  const N=W*H,mpp=o.mpp,P=Object.assign({shadowL:26,treeRough:11,treeL:72,vegGn:.40,grayC:34,
    coreDT:2.2,toneDark:96,toneWhite:182,roadHalf:6.5,alleyHalf:2.6,lotRough:13,maxParts:6,minPart:14,sunDom:-1,minHalf:2.2,maxHalf:15,minLine:32,roadCV:.32,roadStraight:.72,spur:9,lineWin:7,lineness:.9,linear:26,maxRoadW:34,sunTan:1.0,minBldg:28,maxBldg:40000},o.params||{});
  const L=new Float32Array(N),S=new Float32Array(N),EXG=new Float32Array(N),cls=new Uint8Array(N);
  const W1=W+1,I1=new Float64Array(W1*(H+1)),I2=new Float64Array(W1*(H+1));
  for(let y=0;y<H;y++){let s1=0,s2=0;for(let x=0;x<W;x++){const i=y*W+x,k=i*4,r=src[k],g=src[k+1],b=src[k+2];
    const l=.299*r+.587*g+.114*b,mx=Math.max(r,g,b),mn=Math.min(r,g,b);L[i]=l;S[i]=(mx-mn)/(mx+1);EXG[i]=2*g-r-b;
    s1+=l;s2+=l*l;const q=(y+1)*W1+x+1;I1[q]=I1[q-W1]+s1;I2[q]=I2[q-W1]+s2;}}
  const rough=new Float32Array(N),meanL=new Float32Array(N),RR=2;
  for(let y=0;y<H;y++){const y0=Math.max(0,y-RR),y1=Math.min(H,y+RR+1);for(let x=0;x<W;x++){const x0=Math.max(0,x-RR),x1=Math.min(W,x+RR+1),n=(x1-x0)*(y1-y0);
    const s=I1[y1*W1+x1]-I1[y0*W1+x1]-I1[y1*W1+x0]+I1[y0*W1+x0],s2=I2[y1*W1+x1]-I2[y0*W1+x1]-I2[y1*W1+x0]+I2[y0*W1+x0];
    const m=s/n;meanL[y*W+x]=m;rough[y*W+x]=Math.sqrt(Math.max(0,s2/n-m*m));}}
  const water=o.water;
  // base colour rule; ignoreRough is used to re-label pixels the shape filters reject
  const base=(i,ignoreRough)=>{const k=i*4,r=src[k],g=src[k+1],b=src[k+2],l=L[i],ro=ignoreRough?0:rough[i];
    const mx=Math.max(r,g,b),chroma=mx-Math.min(r,g,b),gn=g/(r+g+b+1);
    if(src[k+3]<128)return 0;
    if(water&&water[i])return 1;
    if(l<P.shadowL)return 9;
    if(gn>P.vegGn&&g>r+6&&g>b+6)return (l<P.treeL||ro>P.treeRough)?3:2;          // clearly green
    if(gn>P.vegGn-.025&&g>r+3&&g>b+3&&l<125)return ro>P.treeRough+2?3:2;            // weak green
    if(r>=g-2&&g>=b&&chroma>18&&chroma<60&&ro>P.treeRough+4&&l<115)return 3;       // leaf-off crowns
    if(chroma<P.grayC||(l>175&&chroma<45))return 10;                               // gray / white
    if(r>g+12&&r>b+22&&l<170)return 11;                                            // red / brown roof
    if(r>=g&&g>=b)return 8;
    return 2;};
  for(let i=0;i<N;i++)cls[i]=base(i,false);
  // 3x3 majority filter
  {const out=new Uint8Array(N),cnt=new Uint8Array(12);for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x;if(cls[i]===1){out[i]=1;continue;}
    cnt.fill(0);for(let dy=-1;dy<=1;dy++){const yy=y+dy;if(yy<0||yy>=H)continue;for(let dx=-1;dx<=1;dx++){const xx=x+dx;if(xx<0||xx>=W)continue;cnt[cls[yy*W+xx]]++;}}
    let best=cls[i],bc=cnt[best];for(let c=0;c<12;c++)if(cnt[c]>bc){bc=cnt[c];best=c;}out[i]=best;}cls.set(out);}
  const chamfer=(mask)=>{const d=new Float32Array(N);for(let i=0;i<N;i++)d[i]=mask(i)?1e6:0;const D=1.4142;
    for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x;if(!d[i])continue;let m=d[i];if(x>0)m=Math.min(m,d[i-1]+1);if(y>0){m=Math.min(m,d[i-W]+1);if(x>0)m=Math.min(m,d[i-W-1]+D);if(x<W-1)m=Math.min(m,d[i-W+1]+D);}d[i]=m;}
    for(let y=H-1;y>=0;y--)for(let x=W-1;x>=0;x--){const i=y*W+x;if(!d[i])continue;let m=d[i];if(x<W-1)m=Math.min(m,d[i+1]+1);if(y<H-1){m=Math.min(m,d[i+W]+1);if(x<W-1)m=Math.min(m,d[i+W+1]+D);if(x>0)m=Math.min(m,d[i+W-1]+D);}d[i]=Math.min(m,255);}
    return d;};
  // thin tree fringes along road / lawn edges are texture, not canopy
  {const dt=chamfer(i=>cls[i]===3);for(let i=0;i<N;i++)if(cls[i]===3&&dt[i]<1.5){const y=(i/W)|0,x=i%W;let core=false;
    for(let dy=-1;dy<=1&&!core;dy++)for(let dx=-1;dx<=1;dx++){const yy=y+dy,xx=x+dx;if(yy>=0&&yy<H&&xx>=0&&xx<W&&dt[yy*W+xx]>=2){core=true;break;}}
    if(!core)cls[i]=base(i,true);}}
  const label=(mask,lab)=>{let n=0;const st=new Int32Array(N);for(let i=0;i<N;i++){if(lab[i]||!mask(i))continue;n++;let sp=0;st[sp++]=i;lab[i]=n;
    while(sp){const j=st[--sp],x=j%W;if(x>0&&!lab[j-1]&&mask(j-1)){lab[j-1]=n;st[sp++]=j-1;}if(x<W-1&&!lab[j+1]&&mask(j+1)){lab[j+1]=n;st[sp++]=j+1;}
      if(j>=W&&!lab[j-W]&&mask(j-W)){lab[j-W]=n;st[sp++]=j-W;}if(j<N-W&&!lab[j+W]&&mask(j+W)){lab[j+W]=n;st[sp++]=j+W;}}}return n;};
  // big dark smooth shadow-class blobs are open water when no lake mask is given
  if(!water){const lab=new Int32Array(N),n=label(i=>cls[i]===9,lab),area=new Float64Array(n+1),rs=new Float64Array(n+1);
    for(let i=0;i<N;i++)if(lab[i]){area[lab[i]]++;rs[lab[i]]+=rough[i];}
    for(let i=0;i<N;i++)if(lab[i]){const c=lab[i];if(area[c]*mpp*mpp>2500&&rs[c]/area[c]<9)cls[i]=1;}}
  // ---- impervious shape analysis: split at narrow necks, then grow back geodesically
  const imp=i=>cls[i]===10||cls[i]===11;
  // tone split: dark roofs / light pavement / white roofs+concrete never merge into one blob
  const tone=new Uint8Array(N);for(let i=0;i<N;i++)if(imp(i)){const m=meanL[i];tone[i]=cls[i]===11||m<P.toneDark?1:m<P.toneWhite?2:3;}
  {const t2=new Uint8Array(N),cnt=new Uint8Array(4);for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x;if(!tone[i])continue;cnt.fill(0);
    for(let dy=-2;dy<=2;dy++){const yy=y+dy;if(yy<0||yy>=H)continue;for(let dx=-2;dx<=2;dx++){const xx=x+dx;if(xx>=0&&xx<W)cnt[tone[yy*W+xx]]++;}}
    let b=tone[i];for(let t=1;t<4;t++)if(cnt[t]>cnt[b])b=t;t2[i]=b;}tone.set(t2);}
  const edge=i=>{const x=i%W,t=tone[i];return !t||x===0||x===W-1||i<W||i>=N-W||tone[i-1]!==t||tone[i+1]!==t||tone[i-W]!==t||tone[i+W]!==t;};
  const dtI=chamfer(i=>!edge(i)),lab=new Int32Array(N);
  let nc=0;{const st=new Int32Array(N),core=i=>tone[i]&&dtI[i]>=P.coreDT;for(let i=0;i<N;i++){if(lab[i]||!core(i))continue;nc++;let sp=0;st[sp++]=i;lab[i]=nc;const t=tone[i];
    while(sp){const j=st[--sp],x=j%W;const nb=[x>0?j-1:-1,x<W-1?j+1:-1,j-W,j+W];for(const k of nb){if(k<0||k>=N||lab[k]||tone[k]!==t||!core(k))continue;lab[k]=nc;st[sp++]=k;}}}}
  {let q=[],nq=[];for(let i=0;i<N;i++)if(lab[i])q.push(i);
    while(q.length){nq=[];for(const j of q){const x=j%W,c=lab[j];const nb=[x>0?j-1:-1,x<W-1?j+1:-1,j-W,j+W];for(const k of nb){if(k<0||k>=N||lab[k]||tone[k]!==tone[j])continue;lab[k]=c;nq.push(k);}}q=nq;}}
  const C=[];for(let c=0;c<=nc;c++)C.push({t:0,n:0,maxDT:0,sl:0,sr:0,sg:0,sb:0,red:0,ro:0,x0:1e9,y0:1e9,x1:-1,y1:-1,sx:0,sy:0,px:[]});
  for(let i=0;i<N;i++){const c=lab[i];if(!c)continue;const s=C[c],k=i*4,x=i%W,y=(i/W)|0;s.n++;s.t=tone[i];s.maxDT=Math.max(s.maxDT,dtI[i]);s.sl+=L[i];s.sr+=src[k];s.sg+=src[k+1];s.sb+=src[k+2];
    if(cls[i]===11)s.red++;s.ro+=rough[i];s.sx+=x;s.sy+=y;if(x<s.x0)s.x0=x;if(x>s.x1)s.x1=x;if(y<s.y0)s.y0=y;if(y>s.y1)s.y1=y;s.px.push(i);}
  const DIRS=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];
  const boundary=(c)=>C[c].px.filter(i=>{const x=i%W;return x===0||x===W-1||i<W||i>=N-W||lab[i-1]!==c||lab[i+1]!==c||lab[i-W]!==c||lab[i+W]!==c;});
  // narrow strips (roads, alleys, driveways): pixels that a disk of the road half-width cannot reach
  const Rr=P.roadHalf/mpp,Rd=P.alleyHalf/mpp;
  const toCoreL=chamfer(i=>!(tone[i]&&tone[i]!==1&&dtI[i]>=Rr)),toCoreD=chamfer(i=>!(tone[i]===1&&dtI[i]>=Rd));
  const narrow=i=>tone[i]===1?toCoreD[i]>Rd+.5:tone[i]?toCoreL[i]>Rr+.5:false;
  // self-calibrating sun: which side of roof-toned compact blobs carries the dark shadow
  // self-calibrating sun: correlate roof-toned blobs with dark shadow displaced in each of 8 directions
  const roofC=new Uint8Array(N);for(let c=1;c<=nc;c++){const s=C[c],am=s.n*mpp*mpp;if((s.t===1||s.t===3)&&am>=30&&am<=5000&&s.n/(s.maxDT*s.maxDT+1e-3)<=P.linear)for(const i of s.px)roofC[i]=1;}
  let shOut=0,nOut=0;for(let i=0;i<N;i++)if(!roofC[i]){nOut++;if(cls[i]===9)shOut++;}const baseSh=Math.max(1e-3,shOut/Math.max(1,nOut));
  const dirScore=new Float64Array(8),rlist=[];for(let i=0;i<N;i++)if(roofC[i])rlist.push(i);
  for(let d=0;d<8;d++){const[dx,dy]=DIRS[d];let acc=0;for(const t of [2,4,6]){let a=0,n=0;for(const i of rlist){const x=i%W+dx*t,y=((i/W)|0)+dy*t;if(x<0||y<0||x>=W||y>=H)continue;const j=y*W+x;if(roofC[j])continue;n++;if(cls[j]===9)a++;}acc+=n?a/n/baseSh:0;}dirScore[d]=acc/3;}
  let dom=0;for(let d=1;d<8;d++)if(dirScore[d]>dirScore[dom])dom=d;
  const meanScore=dirScore.reduce((a,b)=>a+b,0)/8;let shadowConf=meanScore>0?Math.min(1,(dirScore[dom]/meanScore-1)/1.5):0;
  if(P.sunDom>=0){dom=P.sunDom;shadowConf=Math.max(shadowConf,P.sunConf||.3);}
  const [sdx,sdy]=DIRS[dom],sn=Math.hypot(sdx,sdy);
  const shadowRun=(x,y,c)=>{let len=0;for(let t=1;t<=Math.ceil(60/mpp);t++){const xx=Math.round(x+sdx*t/sn),yy=Math.round(y+sdy*t/sn);if(xx<0||yy<0||xx>=W||yy>=H)return len?len:-1;const j=yy*W+xx;if(lab[j]===c)return -1;if(cls[j]===9)len=t;else if(t>len+1)break;}return len;};
  // largest all-ones rectangle in a small grid (histogram stack)
  const maxRect=(g,gw,gh)=>{const hgt=new Int32Array(gw);let best={a:0};const st=new Int32Array(gw+1);
    for(let y=0;y<gh;y++){for(let x=0;x<gw;x++)hgt[x]=g[y*gw+x]===1?hgt[x]+1:0;let sp=0;
      for(let x=0;x<=gw;x++){const h=x<gw?hgt[x]:0;while(sp&&hgt[st[sp-1]]>=h){const top=st[--sp],hh=hgt[top],x0=sp?st[sp-1]+1:0,a=hh*(x-x0);if(a>best.a)best={a,x0,x1:x-1,y0:y-hh+1,y1:y};}st[sp++]=x;}}
    return best;};
  const buildings=[];
  for(let c=1;c<=nc;c++){const s=C[c],am=s.n*mpp*mpp,ratio=s.n/(s.maxDT*s.maxDT+1e-3),mL=s.sl/s.n,mro=s.ro/s.n,redF=s.red/s.n;
    let nN=0;for(const i of s.px)if(narrow(i))nN++;const narrowF=nN/s.n;
    let kind=7,why='';
    if((narrowF>.65&&ratio>8)||(ratio>P.linear&&s.maxDT*2*mpp<P.maxRoadW)){kind=5;why='linear';}
    else if(am<P.minBldg){kind=7;why='small';}
    else{
      const bd=s.bd||boundary(c);let sh=0;for(const i of bd)if(shadowRun(i%W,(i/W)|0,c)>1)sh++;const shF=sh/Math.max(1,bd.length);
      let score=0;if(s.t===1)score+=2;if(s.t===3)score+=2;if(redF>.3)score+=2;if(shF>.1&&shadowConf>.18)score+=s.t===2?3.2:2;
      if(s.t===2&&mro>P.lotRough)score-=1.5;if(s.t===2)score-=1;if(am>P.maxBldg)score-=4;
      why='score '+score.toFixed(1)+' shF '+shF.toFixed(2)+' mro '+mro.toFixed(0);
      if(score>=2){kind=6;
        // rectilinear orientation from edge gradients (mod 90 deg)
        let cs=0,ss=0;for(const i of bd){const x=i%W;if(x<1||x>W-2||i<W||i>=N-W)continue;const gx=L[i+1]-L[i-1],gy=L[i+W]-L[i-W],m=Math.hypot(gx,gy);if(m<4)continue;const th=Math.atan2(gy,gx)*4;cs+=Math.cos(th)*m;ss+=Math.sin(th)*m;}
        const ang=Math.atan2(ss,cs)/4,ca=Math.cos(ang),sa=Math.sin(ang),mx=s.sx/s.n,my=s.sy/s.n;
        let u0=1e9,u1=-1e9,v0=1e9,v1=-1e9;const U=new Float32Array(s.n),V=new Float32Array(s.n);
        s.px.forEach((i,k)=>{const dx=i%W-mx,dy=((i/W)|0)-my,u=dx*ca+dy*sa,v=-dx*sa+dy*ca;U[k]=u;V[k]=v;if(u<u0)u0=u;if(u>u1)u1=u;if(v<v0)v0=v;if(v>v1)v1=v;});
        const gw=Math.ceil(u1-u0)+2,gh=Math.ceil(v1-v0)+2,g=new Uint8Array(gw*gh);
        for(let k=0;k<s.n;k++)g[Math.round(V[k]-v0)*gw+Math.round(U[k]-u0)]=1;
        for(let y=1;y<gh-1;y++)for(let x=1;x<gw-1;x++){const j=y*gw+x;if(!g[j]&&(g[j-1]&&g[j+1]||g[j-gw]&&g[j+gw]))g[j]=1;}
        let total=0;for(const v of g)if(v)total++;let cov=0,parts=0;
        while(parts<P.maxParts){const r=maxRect(g,gw,gh);if(r.a*mpp*mpp<P.minPart)break;
          for(let y=r.y0;y<=r.y1;y++)for(let x=r.x0;x<=r.x1;x++)g[y*gw+x]=2;cov+=r.a;parts++;
          const bw=(r.x1-r.x0+1),bh=(r.y1-r.y0+1),uc=u0+(r.x0+r.x1)/2,vc=v0+(r.y0+r.y1)/2;
          const cx=mx+uc*ca-vc*sa,cy=my+uc*sa+vc*ca,lo=Math.min(bw,bh)*mpp,hi=Math.max(bw,bh)*mpp;
          if(hi/lo>5&&lo<14){continue;}                      // a street fused onto a roof
          // height from the shadow cast past this box's edges
          const lens=[];const steps=Math.max(6,Math.round((bw+bh)));
          for(let q=0;q<steps;q++){const f=q/steps,side=q%4;let uu,vv;const hw=bw/2+.5,hh=bh/2+.5;
            if(side===0){uu=uc-hw+f*bw;vv=vc-hh;}else if(side===1){uu=uc-hw+f*bw;vv=vc+hh;}else if(side===2){uu=uc-hw;vv=vc-hh+f*bh;}else{uu=uc+hw;vv=vc-hh+f*bh;}
            const px=mx+uu*ca-vv*sa,py=my+uu*sa+vv*ca;const L1=shadowRun(px,py,-999);if(L1>1)lens.push(L1);}
          lens.sort((a,b)=>a-b);const sl=lens.length>=3?lens[Math.floor(lens.length*.75)]:0;
          const pa=bw*bh*mpp*mpp,est=am<260?7.2:am<1500?8.5:10.5;
          let h=sl&&shadowConf>.18?Math.min(Math.max(sl*mpp*P.sunTan,3.4),am<300?12:80):est;
          buildings.push({x:cx,y:cy,w:bw*mpp,d:bh*mpp,ang,h,area:pa,part:parts,
            roof:pa<380&&am<450?(Math.max(bw,bh)/Math.min(bw,bh)>1.25?1:2):0,r:s.sr/s.n|0,g:s.sg/s.n|0,b:s.sb/s.n|0});
          if(cov>.9*total)break;}
        if(!parts){kind=7;why+=' noparts';}
      }
    }
    s.kind=kind;s.why=why;
    for(const i of s.px)cls[i]=kind===7&&narrow(i)?5:kind;
  }
  for(let i=0;i<N;i++)if(cls[i]===10||cls[i]===11)cls[i]=narrow(i)?5:7;
  // ---- trees: canopy distance-transform maxima = crowns
  const dtT=chamfer(i=>cls[i]===3),trees=[];
  {const tl=new Int32Array(N),nt=label(i=>cls[i]===3,tl),ta=new Float64Array(nt+1);for(let i=0;i<N;i++)if(tl[i])ta[tl[i]]++;
    for(let i=0;i<N;i++)if(tl[i]){const am=ta[tl[i]]*mpp*mpp;if(am<3)cls[i]=base(i,true)===3?2:base(i,true);else if(am<14)cls[i]=4;}
    const cand=[];for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++){const i=y*W+x,v=dtT[i];if(cls[i]!==3&&cls[i]!==4)continue;if(v<1.2&&cls[i]===3)continue;
      let mx=true;for(let dy=-1;dy<=1&&mx;dy++)for(let dx=-1;dx<=1;dx++){if((dx||dy)&&dtT[i+dy*W+dx]>v){mx=false;break;}}if(mx)cand.push(i);}
    cand.sort((a,b)=>dtT[b]-dtT[a]);const grid=new Map(),cell=Math.ceil(10/mpp);
    for(const i of cand){const x=i%W,y=(i/W)|0,r=Math.min(9,Math.max(cls[i]===4?.8:1.6,(dtT[i]+.6)*mpp*1.15));const gx=(x/cell)|0,gy=(y/cell)|0;let ok=true;
      for(let a=-1;a<=1&&ok;a++)for(let b=-1;b<=1&&ok;b++){for(const t of grid.get((gx+a)+','+(gy+b))||[]){const dd=Math.hypot(t.x-x,t.y-y)*mpp;if(dd<(t.r+r)*.62){ok=false;break;}}}
      if(!ok)continue;let sr=0,sg=0,sb=0,n=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const k=(Math.min(H-1,Math.max(0,y+dy))*W+Math.min(W-1,Math.max(0,x+dx)))*4;sr+=src[k];sg+=src[k+1];sb+=src[k+2];n++;}
      sr/=n;sg/=n;sb/=n;const bush=cls[i]===4||r<2.1,conifer=!bush&&sb>=sr&&sg>sr+14&&(sr+sg+sb)/3<48;
      const t={x,y,r,h:bush?r*1.1:r*(conifer?3.2:1.9)+2.5,type:bush?2:conifer?1:0,R:sr|0,G:sg|0,B:sb|0};trees.push(t);
      const key=gx+','+gy;if(!grid.has(key))grid.set(key,[]);grid.get(key).push(t);}}
  // ---- road distance field (quarter-pixel units) and roof heights for the terrain shader
  // ---- roads. Surface: narrow pavement (from the shape pass). Geometry + markings: OpenStreetMap
  //      centre lines when the caller supplies them (o.roads), which also fixes where roads really run.
  const aux=new Uint8Array(N),mark=new Uint8Array(N).fill(255),rflag=new Uint8Array(N);
  if(o.roads&&o.roads.length){
    const dist=new Float32Array(N).fill(1e9),owner=new Int32Array(N).fill(-1);let q=[];
    const clip=(ax,ay,bx,by)=>{let t0=0,t1=1;const dx=bx-ax,dy=by-ay,lo=-2,hi=W+1;
      for(const [p,q] of [[-dx,ax-lo],[dx,hi-ax],[-dy,ay-lo],[dy,(H+1)-ay]]){if(p===0){if(q<0)return null;continue;}const r=q/p;if(p<0){if(r>t1)return null;if(r>t0)t0=r;}else{if(r<t0)return null;if(r<t1)t1=r;}}
      return [ax+dx*t0,ay+dy*t0,ax+dx*t1,ay+dy*t1];};
    o.roads.forEach((r,ri)=>{const p=r.pts;for(let k=0;k+3<p.length;k+=2){const cl=clip(p[k],p[k+1],p[k+2],p[k+3]);if(!cl)continue;let x0=Math.round(cl[0]),y0=Math.round(cl[1]);const x1=Math.round(cl[2]),y1=Math.round(cl[3]);
      const dx=Math.abs(x1-x0),dy=-Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1;let err=dx+dy,guard=0;
      while(guard++<4000){if(x0>=0&&y0>=0&&x0<W&&y0<H){const i=y0*W+x0;if(dist[i]>0||(owner[i]>=0&&o.roads[owner[i]].half<r.half)){if(dist[i]!==0)q.push(i);dist[i]=0;owner[i]=ri;}}
        if(x0===x1&&y0===y1)break;const e2=2*err;if(e2>=dy){err+=dy;x0+=sx;}if(e2<=dx){err+=dx;y0+=sy;}}}});
    const src=new Int32Array(N).fill(-1);for(const i of q)src[i]=i;
    const stamp=new Int32Array(N);let wave=0;
    while(q.length&&wave<200){wave++;const nq=[];for(const j of q){const s0=src[j],sx=s0%W,sy=(s0/W)|0,lim=o.roads[owner[s0]].half/mpp+.6;
      for(const k of [j-1,j+1,j-W,j+W,j-W-1,j-W+1,j+W-1,j+W+1]){if(k<0||k>=N)continue;const d=Math.hypot(k%W-sx,((k/W)|0)-sy);if(d>lim||d>=dist[k]-1e-3)continue;
        dist[k]=d;src[k]=s0;owner[k]=owner[s0];if(stamp[k]!==wave){stamp[k]=wave;nq.push(k);}}}q=nq;}
    for(let i=0;i<N;i++){
      if(owner[i]>=0&&dist[i]<1e8&&cls[i]!==6&&cls[i]!==1){const r=o.roads[owner[i]],hp=r.half/mpp;cls[i]=5;
        aux[i]=Math.min(255,Math.max(0,Math.round((hp-dist[i])*4)));mark[i]=Math.min(254,Math.round(dist[i]*8));rflag[i]=r.flags&15;}
      else if(cls[i]===5)cls[i]=7;}
  }else{const dtR=chamfer(i=>cls[i]===5);for(let i=0;i<N;i++)if(cls[i]===5)aux[i]=Math.min(255,Math.round(dtR[i]*4));}
  // OSM footprints override roof pixels and take their height from the imagery buildings they contain
  const osmH=[];
  if(o.bldgs)o.bldgs.forEach((pb,bi)=>{const p=pb.pts;let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(let k=0;k<p.length;k+=2){x0=Math.min(x0,p[k]);x1=Math.max(x1,p[k]);y0=Math.min(y0,p[k+1]);y1=Math.max(y1,p[k+1]);}
    const inside=(x,y)=>{let c=false;for(let a=0,b=p.length-2;a<p.length;b=a,a+=2){const ya=p[a+1],yb=p[b+1];if((ya>y)!==(yb>y)&&x<(p[b]-p[a])*(y-ya)/(yb-ya)+p[a])c=!c;}return c;};
    let h=0,n=0,roofT=0;for(const b of buildings)if(b.x>=x0&&b.x<=x1&&b.y>=y0&&b.y<=y1&&inside(b.x,b.y)){if(b.h>h){h=b.h;roofT=b.roof;}n++;b.osm=true;}
    for(const b of buildings)if(!b.osm){const cx=(x0+x1)/2,cy=(y0+y1)/2;if(Math.abs(b.x-cx)<(x1-x0)/2&&Math.abs(b.y-cy)<(y1-y0)/2&&inside(b.x,b.y))b.osm=true;}
    const hv=Math.min(255,Math.round(((pb.h>0?pb.h:n?h:0)||7)*4));let sr=0,sg=0,sb=0,sn=0;
    for(let y=Math.max(0,Math.floor(y0));y<=Math.min(H-1,Math.ceil(y1));y++)for(let x=Math.max(0,Math.floor(x0));x<=Math.min(W-1,Math.ceil(x1));x++)if(inside(x+.5,y+.5)){const i=y*W+x;cls[i]=6;aux[i]=hv;mark[i]=255;rflag[i]=0;const k=i*4;if(src[k+3]>127){sr+=src[k];sg+=src[k+1];sb+=src[k+2];sn++;}}
    osmH[bi]={h:pb.h>0?pb.h:n?h:0,roof:roofT,r:sn?sr/sn|0:120,g:sn?sg/sn|0:120,b:sn?sb/sn|0:120};});
  // imagery shadows: take the class of the nearest lit ground (never the roof that casts them), keep a flag
  {let q=[];const own=new Int32Array(N).fill(-1);
    for(let i=0;i<N;i++)if(cls[i]!==9&&cls[i]!==6&&cls[i]!==0){own[i]=i;q.push(i);}
    let guard=0;while(q.length&&guard++<300){const nq=[];for(const j of q){const x=j%W;for(const k of [x>0?j-1:-1,x<W-1?j+1:-1,j-W,j+W]){if(k<0||k>=N||own[k]>=0||cls[k]!==9)continue;own[k]=own[j];nq.push(k);}}q=nq;}
    for(let i=0;i<N;i++)if(cls[i]===9){if(own[i]>=0){const s0=own[i];cls[i]=cls[s0];if(cls[i]===5){aux[i]=aux[s0];mark[i]=mark[s0];rflag[i]=rflag[s0];}else rflag[i]=1;}}}
  const core=o.core||[0,0,W,H],inCore=(x,y)=>x>=core[0]&&x<core[2]&&y>=core[1]&&y<core[3];
  return {mark,rflag,osmH,dbg:o.debug?{tone,lab,kinds:C.map(c=>c.kind||0),why:C.map(c=>c.why||'')}:null,cls,aux,W,H,dom,shadowConf,dirScore:[...dirScore].map(v=>+v.toFixed(2)),
    buildings:buildings.filter(b=>inCore(b.x,b.y)),trees:trees.filter(t=>inCore(t.x,t.y))};
}
const GT_PALETTE=[[40,40,40],[30,90,200],[120,200,80],[20,110,40],[60,160,90],[230,200,120],[220,70,60],[160,160,170],[190,150,100],[10,10,30],[255,0,255],[255,0,255]];


// crop the analysed region to the chunk core and rasterise building heights into it
function gtPost(r,core,W,mpp){
  const cw=core[2]-core[0],ch=core[3]-core[1],cls=new Uint8Array(cw*ch),aux=new Uint8Array(cw*ch),mark=new Uint8Array(cw*ch),rflag=new Uint8Array(cw*ch);
  for(let y=0;y<ch;y++){const s=(y+core[1])*W+core[0];cls.set(r.cls.subarray(s,s+cw),y*cw);aux.set(r.aux.subarray(s,s+cw),y*cw);mark.set(r.mark.subarray(s,s+cw),y*cw);rflag.set(r.rflag.subarray(s,s+cw),y*cw);}
  for(const b of r.buildings){if(b.osm)continue;const ca=Math.cos(b.ang),sa=Math.sin(b.ang),hw=b.w/mpp/2,hd=b.d/mpp/2,R=Math.ceil(Math.hypot(hw,hd)),hv=Math.min(255,Math.round(b.h*4));
    for(let y=Math.floor(b.y-R);y<=b.y+R;y++)for(let x=Math.floor(b.x-R);x<=b.x+R;x++){const dx=x-b.x,dy=y-b.y,u=dx*ca+dy*sa,v=-dx*sa+dy*ca;
      if(Math.abs(u)>hw||Math.abs(v)>hd)continue;const cx=x-core[0],cy=y-core[1];if(cx<0||cy<0||cx>=cw||cy>=ch)continue;const j=cy*cw+cx;cls[j]=6;aux[j]=Math.max(aux[j],hv);mark[j]=255;rflag[j]=0;}}
  return {cls,aux,mark,rflag};
}
const GT_WORKER_SRC=`${gtAnalyze.toString()}\n${gtPost.toString()}\n
onmessage=e=>{const m=e.data;const t=performance.now();
  try{const r=gtAnalyze(new Uint8ClampedArray(m.rgba),m.W,m.H,{mpp:m.mpp,core:m.core,water:m.water?new Uint8Array(m.water):null,params:m.params,roads:m.roads,bldgs:m.bldgs});
    const p=gtPost(r,m.core,m.W,m.mpp);
    postMessage({id:m.id,cls:p.cls.buffer,aux:p.aux.buffer,mark:p.mark.buffer,rflag:p.rflag.buffer,osmH:r.osmH,buildings:r.buildings.filter(b=>!b.osm),trees:r.trees,dom:r.dom,conf:r.shadowConf,dirScore:r.dirScore,ms:performance.now()-t},[p.cls.buffer,p.aux.buffer,p.mark.buffer,p.rflag.buffer]);
  }catch(err){postMessage({id:m.id,error:String(err&&err.message||err)});}};`;

// ------------------------------- worker pool (falls back to the main thread) -------------------------------
const GT={on:!GT_Q.has('gt')||GT_Q.get('gt')!=='0',xray:0,params:{},paramsRev:0,sun:new Float64Array(8),sunW:0,
  pool:[],jobs:new Map(),jobId:0,busy:0,msAvg:0,done:0,buildings:0,trees:0,errors:0,lastErr:''};
try{const url=URL.createObjectURL(new Blob([GT_WORKER_SRC],{type:'text/javascript'}));
  for(let i=0;i<GT_CFG.workers;i++){const w=new Worker(url);w.busy=false;w.onmessage=e=>gtDone(w,e.data);w.onerror=ev=>{GT.errors++;GT.lastErr=ev.message||'worker error';w.busy=false;GT.busy--;};GT.pool.push(w);}
}catch(e){GT.pool.length=0;GT.lastErr='workers unavailable · main thread';}
function gtDispatch(job){
  const w=GT.pool.find(w=>!w.busy);
  if(w){w.busy=true;w.job=job.id;GT.busy++;GT.jobs.set(job.id,job);
    w.postMessage({id:job.id,rgba:job.rgba.buffer,W:job.W,H:job.H,mpp:job.mpp,core:job.core,water:job.water?job.water.buffer:null,params:job.params,roads:job.roads,bldgs:job.bldgs},[job.rgba.buffer,...(job.water?[job.water.buffer]:[])]);return true;}
  if(!GT.pool.length&&!GT.mainBusy){GT.mainBusy=true;GT.jobs.set(job.id,job);
    setTimeout(()=>{const t=performance.now();let msg;
      try{const r=gtAnalyze(job.rgba,job.W,job.H,{mpp:job.mpp,core:job.core,water:job.water,params:job.params,roads:job.roads,bldgs:job.bldgs});const p=gtPost(r,job.core,job.W,job.mpp);
        msg={id:job.id,cls:p.cls.buffer,aux:p.aux.buffer,mark:p.mark.buffer,rflag:p.rflag.buffer,osmH:r.osmH,buildings:r.buildings.filter(b=>!b.osm),trees:r.trees,dom:r.dom,conf:r.shadowConf,dirScore:r.dirScore,ms:performance.now()-t};}
      catch(err){msg={id:job.id,error:String(err)};}
      GT.mainBusy=false;gtDone(null,msg);},0);return true;}
  return false;
}
function gtDone(w,m){
  if(w){w.busy=false;GT.busy--;}
  const job=GT.jobs.get(m.id);GT.jobs.delete(m.id);if(!job)return;
  const ch=job.ring.chunks.get(job.key);if(!ch||ch.job!==m.id)return;
  if(m.error){ch.state='fail';ch.t=performance.now();GT.errors++;GT.lastErr=m.error;return;}
  ch.state='done';{const cls=new Uint8Array(m.cls),aux=new Uint8Array(m.aux),mark=new Uint8Array(m.mark),rf=new Uint8Array(m.rflag),n=cls.length,px=new Uint8Array(n*4);
    for(let i=0;i<n;i++){const o=i*4;px[o]=cls[i]*25+rf[i];px[o+1]=aux[i];px[o+2]=mark[i];px[o+3]=255;}ch.rgba=px;if(GT.keepRaw){ch.cls=cls;ch.rflag=rf;}}ch.osm=job.osm;ch.osmB=(job.bldgs||[]).map((b,i)=>Object.assign({},b,m.osmH[i]||{}));ch.buildings=m.buildings;ch.trees=m.trees;ch.rev=job.rev;
  GT.done++;GT.msAvg=GT.msAvg?GT.msAvg*.85+m.ms*.15:m.ms;
  // global imagery-sun estimate (roof→shadow direction), weighted by confidence
  if(m.dirScore&&m.conf>.12){const mean=m.dirScore.reduce((a,b)=>a+b,0)/8||1;for(let d=0;d<8;d++)GT.sun[d]+=m.dirScore[d]/mean*m.conf;GT.sunW+=m.conf;}
  job.ring.writeFeat(ch);
  if(job.ring.near)gtQueueBuild(ch);
}
const gtSunDom=()=>{if(GT.sunW<1.2)return -1;let d=0;for(let i=1;i<8;i++)if(GT.sun[i]>GT.sun[d])d=i;return d;};

// ------------------------------- lake mask for a chunk region -------------------------------
const gtLakeBoxes=lakePolys.map(poly=>{let a=1e9,b=-1e9,c=1e9,d=-1e9;for(const [lon,lat] of poly[0]){a=Math.min(a,lon);b=Math.max(b,lon);c=Math.min(c,lat);d=Math.max(d,lat);}return [a,b,c,d];});
const gtMaskCanvas=document.createElement('canvas'),gtMaskCtx=gtMaskCanvas.getContext('2d',{willReadFrequently:true});
function gtWaterMask(z,gx0,gy0,W,H){
  const lon0=MERC.lon(gx0/256,z),lon1=MERC.lon((gx0+W)/256,z),lat0=MERC.lat(gy0/256,z),lat1=MERC.lat((gy0+H)/256,z);
  const hits=[];lakePolys.forEach((p,i)=>{const b=gtLakeBoxes[i];if(b[1]>=lon0&&b[0]<=lon1&&b[3]>=lat1&&b[2]<=lat0)hits.push(p);});
  if(!hits.length)return null;
  gtMaskCanvas.width=W;gtMaskCanvas.height=H;const g=gtMaskCtx;g.clearRect(0,0,W,H);g.fillStyle='#fff';g.beginPath();
  for(const poly of hits)for(const ring of poly){ring.forEach(([lon,lat],k)=>{const x=MERC.tx(lon,z)*256-gx0,y=MERC.ty(lat,z)*256-gy0;k?g.lineTo(x,y):g.moveTo(x,y);});g.closePath();}
  g.fill('evenodd');const d=g.getImageData(0,0,W,H).data,m=new Uint8Array(W*H);for(let i=0;i<W*H;i++)m[i]=d[i*4+3]>127?1:0;return m;
}


// ------------------------------- OpenStreetMap assist: road centre lines (markings) + exact footprints -------------------------------
const OSM={on:GT_Q.get('osm')!=='0',tiles:new Map(),busy:0,ep:0,fails:0,err:'',roads:0,bldgs:0,
  eps:['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter','https://maps.mail.ru/osm/tools/overpass/api/interpreter']};
const OSM_Z=14;
function osmRoadSpec(t){
  const hw=t.highway;if(!hw||/^(footway|path|cycleway|steps|pedestrian|bridleway|track|corridor|proposed|construction|platform|elevator|sidewalk|crossing|bus_stop|raceway)$/.test(hw))return null;
  if(t.tunnel==='yes'||t.area==='yes')return null;
  const base={motorway:7.5,trunk:7,primary:7,secondary:6,tertiary:5,unclassified:3.6,residential:3.8,living_street:3,service:2.6,motorway_link:4,trunk_link:4,primary_link:4,secondary_link:3.8,tertiary_link:3.6}[hw]||3.2;
  let half=base;if(+t.width>2)half=+t.width/2;else if(+t.lanes>0)half=Math.max(2.4,+t.lanes*1.75+.6);
  const oneway=t.oneway==='yes'||t.oneway==='1'||hw==='motorway'||t.junction==='roundabout';
  const major=/^(motorway|trunk|primary|secondary|tertiary)(_link)?$/.test(hw);
  let flags=0;if(major&&!oneway)flags|=1;if(major&&!oneway&&(half>=6||/^(trunk|primary)$/.test(hw)))flags|=2;
  if(/lane/.test(t.cycleway||'')||/lane/.test(t['cycleway:right']||'')||/lane/.test(t['cycleway:both']||'')||/lane/.test(t['cycleway:left']||''))flags|=4;
  if(major)flags|=8;
  return {half:clamp(half,1.8,15),flags};
}
function osmHeight(t){const h=parseFloat(t.height||t['building:height']);if(h>1.5)return Math.min(h,200);const l=parseFloat(t['building:levels']);if(l>0)return l*3.1+(t['roof:shape']&&t['roof:shape']!=='flat'?2:0);return 0;}
function osmFetch(x,y){
  const k=x+','+y,e={state:'loading',t:performance.now(),roads:[],bldgs:[]};OSM.tiles.set(k,e);OSM.busy++;
  const s=MERC.lat(y+1,OSM_Z),n=MERC.lat(y,OSM_Z),w=MERC.lon(x,OSM_Z),ea=MERC.lon(x+1,OSM_Z),bb=`(${s.toFixed(6)},${w.toFixed(6)},${n.toFixed(6)},${ea.toFixed(6)})`;
  const q=`[out:json][timeout:30];(way["highway"]${bb};way["building"]${bb};);out geom qt;`;
  const ctl=new AbortController(),to=setTimeout(()=>ctl.abort(),35000);
  fetch(OSM.eps[OSM.ep],{method:'POST',body:'data='+encodeURIComponent(q),headers:{'Content-Type':'application/x-www-form-urlencoded'},signal:ctl.signal})
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(j=>{for(const el of j.elements||[]){if(el.type!=='way'||!el.geometry||el.geometry.length<2)continue;const t=el.tags||{},ll=el.geometry.map(g=>[g.lat,g.lon]);
        if(t.building&&t.building!=='no'&&ll.length>=4){e.bldgs.push({id:el.id,ll,h:osmHeight(t)});OSM.bldgs++;}
        else if(t.highway){const sp=osmRoadSpec(t);if(sp){e.roads.push({id:el.id,ll,...sp});OSM.roads++;}}}
      e.state='ok';})
    .catch(err=>{e.state='fail';e.t=performance.now();OSM.ep=(OSM.ep+1)%OSM.eps.length;OSM.fails++;OSM.err=String(err&&err.message||err).slice(0,60);})
    .finally(()=>{clearTimeout(to);OSM.busy--;});
}
const osmTilesFor=(z,gx0,gy0,W)=>{const f=2**(z-OSM_Z)*256,a=Math.floor(gx0/f),b=Math.floor((gx0+W)/f),c=Math.floor(gy0/f),d=Math.floor((gy0+W)/f),out=[];
  for(let y=c;y<=d;y++)for(let x=a;x<=b;x++)out.push([x,y]);return out;};
// 'ok' when every overlapping OSM tile is in; 'loading' (wait) while one is fetching; 'none' when OSM is off or failed
function osmState(z,gx0,gy0,W){
  if(!OSM.on)return 'none';let st='ok';
  for(const [x,y] of osmTilesFor(z,gx0,gy0,W)){const e=OSM.tiles.get(x+','+y);
    if(!e){if(OSM.busy<2)osmFetch(x,y);st='loading';}
    else if(e.state==='loading'){if(performance.now()-e.t<9000)st='loading';else if(st==='ok')st='none';}
    else if(e.state==='fail'){if(performance.now()-e.t>60000&&OSM.busy<1){OSM.tiles.delete(x+','+y);}if(st==='ok')st='none';}}
  return st;
}
// OSM ways clipped to an analysis region, in region pixel coordinates
function osmRegion(z,gx0,gy0,W){
  if(osmState(z,gx0,gy0,W)!=='ok')return null;
  const seen=new Set(),roads=[],bldgs=[],S=256,pad=40;
  const P=(lat,lon)=>[MERC.tx(lon,z)*S-gx0,MERC.ty(lat,z)*S-gy0];
  for(const [x,y] of osmTilesFor(z,gx0,gy0,W)){const e=OSM.tiles.get(x+','+y);
    for(const r of e.roads){if(seen.has(r.id))continue;const pts=[];let hit=false;for(const [la,lo] of r.ll){const p=P(la,lo);pts.push(p[0],p[1]);}
      for(let k=0;k+3<pts.length&&!hit;k+=2){const x0=Math.min(pts[k],pts[k+2]),x1=Math.max(pts[k],pts[k+2]),y0=Math.min(pts[k+1],pts[k+3]),y1=Math.max(pts[k+1],pts[k+3]);if(x1>-pad&&y1>-pad&&x0<W+pad&&y0<W+pad)hit=true;}
      if(hit){seen.add(r.id);roads.push({pts,half:r.half,flags:r.flags});}}
    for(const b of e.bldgs){if(seen.has(b.id))continue;const pts=[];let cx=0,cy=0;for(const [la,lo] of b.ll){const p=P(la,lo);pts.push(p[0],p[1]);cx+=p[0];cy+=p[1];}
      cx/=b.ll.length;cy/=b.ll.length;if(cx>-20&&cy>-20&&cx<W+20&&cy<W+20){seen.add(b.id);bldgs.push({pts,h:b.h,ll:b.ll,cx,cy});}}}
  return {roads,bldgs};
}

// ------------------------------- imagery ring -------------------------------
const GT_URL=(z,x,y)=>`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`;
const GT_MARGIN=64,GT_ZERO=new Uint8Array(512*512*4);
class GTRing{
  constructor(z,grid,near){
    Object.assign(this,{z,grid,near,size:grid*256,cache:new Map(),queue:[],inflight:0,maxInflight:near?8:6,cx:null,cy:null,x0:0,y0:0,
      blocked:false,checked:false,full:true,pending:[],chunks:new Map(),mpp:ringMPP(z),bounds:new T.Vector4(1e7,1e7,1e7+1,1e7+1),featFull:true});
    this.canvas=document.createElement('canvas');this.canvas.width=this.canvas.height=this.size;
    this.ctx=this.canvas.getContext('2d',{willReadFrequently:true});
    this.tex=new T.Texture(this.canvas);this.tex.colorSpace=T.SRGBColorSpace;this.tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
    this.feat=new T.DataTexture(new Uint8Array(this.size*this.size*4),this.size,this.size);
    this.feat.magFilter=this.feat.minFilter=T.NearestFilter;this.feat.generateMipmaps=false;this.feat.needsUpdate=true;
    this.uBounds={value:new T.Vector4(1e7,1e7,1e7+1,1e7+1)};this.uTexel={value:1/this.size};
  }
  key(x,y){return x+','+y;}
  inRing(x,y){return x>=this.x0&&x<this.x0+this.grid&&y>=this.y0&&y<this.y0+this.grid;}
  draw(e){
    e.t=performance.now();this.ctx.drawImage(e.img,(e.x-this.x0)*256,(e.y-this.y0)*256,256,256);
    if(!this.checked){this.checked=true;try{this.ctx.getImageData(0,0,1,1);}catch{this.block();return;}}
    if(!this.full)this.pending.push(e);
  }
  block(){this.blocked=true;this.queue.length=0;this.uBounds.value.set(1e7,1e7,1e7+1,1e7+1);}
  request(x,y){const k=this.key(x,y),c=this.cache.get(k);if(c&&(c.state!=='fail'||performance.now()-c.t<30000))return;
    this.cache.set(k,{state:'queued',x,y,t:performance.now()});this.queue.push(k);}
  pump(){
    while(!this.blocked&&this.inflight<this.maxInflight&&this.queue.length){
      const k=this.queue.shift(),e=this.cache.get(k);if(!e||e.state!=='queued')continue;
      if(!this.inRing(e.x,e.y)){this.cache.delete(k);continue;}
      e.state='loading';this.inflight++;const img=new Image();img.crossOrigin='anonymous';img.decoding='async';
      img.onload=()=>{this.inflight--;e.state='ok';e.img=img;if(this.inRing(e.x,e.y)&&!this.blocked)this.draw(e);this.pump();};
      img.onerror=()=>{this.inflight--;e.state='fail';e.t=performance.now();this.pump();};
      img.src=GT_URL(this.z,e.x,e.y);
    }
  }
  evict(){if(this.cache.size<420)return;
    const old=[...this.cache].filter(([,e])=>(e.state==='ok'||e.state==='fail')&&!this.inRing(e.x,e.y)).sort((a,b)=>a[1].t-b[1].t);
    for(const [k] of old.slice(0,this.cache.size-340))this.cache.delete(k);
    if(this.chunks.size>48){const oc=[...this.chunks].filter(([,c])=>!this.chunkIn(c)&&c.state!=='busy').sort((a,b)=>a[1].t-b[1].t);for(const [k,c] of oc.slice(0,this.chunks.size-36)){gtDrop3D(c);this.chunks.delete(k);}}
  }
  recenter(lat,lon){
    const fx=MERC.tx(lon,this.z),fy=MERC.ty(lat,this.z),cx=Math.floor(fx),cy=Math.floor(fy);
    if(this.cx!==null&&Math.abs(cx-this.cx)<2&&Math.abs(cy-this.cy)<2)return false;
    this.cx=cx;this.cy=cy;this.x0=(cx-this.grid/2)&~1;this.y0=(cy-this.grid/2)&~1;   // even origin keeps 2x2 chunks aligned
    this.ctx.clearRect(0,0,this.size,this.size);this.full=true;this.pending.length=0;
    for(const [k,e] of this.cache)if(e.state==='queued')this.cache.delete(k);this.queue.length=0;
    const want=[];for(let j=0;j<this.grid;j++)for(let i=0;i<this.grid;i++)want.push([this.x0+i,this.y0+j]);
    want.sort((a,b)=>Math.hypot(a[0]+.5-fx,a[1]+.5-fy)-Math.hypot(b[0]+.5-fx,b[1]+.5-fy));
    for(const [x,y] of want){const e=this.cache.get(this.key(x,y));if(e?.state==='ok')this.draw(e);else this.request(x,y);}
    this.featFull=true;this.evict();return true;
  }
  boundsNow(){const a=toWorld(MERC.lat(this.y0,this.z),MERC.lon(this.x0,this.z)),b=toWorld(MERC.lat(this.y0+this.grid,this.z),MERC.lon(this.x0+this.grid,this.z));return [a.x,a.z,b.x,b.z];}
  chunkIn(c){return this.inRing(c.x,c.y);}
  // upload imagery + features; called once per frame right before rendering
  upload(){
    if(this.blocked)return;
    if(this.full){this.tex.needsUpdate=true;this.full=false;this.pending.length=0;const b=this.boundsNow();this.uBounds.value.set(b[0],b[1],b[2],b[3]);}
    else if(this.pending.length){const list=this.pending.splice(0,this.near?6:4);
      list.forEach((e,i)=>{if(!this.inRing(e.x,e.y))return;this.tex.generateMipmaps=i===list.length-1;
        renderer.copyTextureToTexture({isTexture:true,image:e.img},this.tex,null,new T.Vector2((e.x-this.x0)*256,this.size-(e.y-this.y0+1)*256));});
      this.tex.generateMipmaps=true;}
    if(this.featFull){this.featFull=false;
      for(let j=0;j<this.grid;j+=2)for(let i=0;i<this.grid;i+=2){const c=this.chunks.get(this.key(this.x0+i,this.y0+j));
        this.copyFeat(c&&c.state==='done'&&c.rgba?c.rgba:GT_ZERO,i*256,j*256);}}
  }
  copyFeat(px,ox,oy){renderer.copyTextureToTexture({isTexture:true,isDataTexture:true,image:{width:512,height:512,data:px}},this.feat,null,new T.Vector2(ox,oy));}
  writeFeat(c){if(!this.chunkIn(c)||this.featFull)return;this.copyFeat(c.rgba,(c.x-this.x0)*256,(c.y-this.y0)*256);}
  // schedule analysis of 2x2-tile chunks whose tiles (and neighbours) are in
  schedule(focus,frustum){
    if(this.blocked||!GT.on)return;
    const st=(x,y)=>{if(!this.inRing(x,y))return 'out';return this.cache.get(this.key(x,y))?.state||'none';};
    const cand=[];
    for(let j=0;j<this.grid;j+=2)for(let i=0;i<this.grid;i+=2){
      const x=this.x0+i,y=this.y0+j,k=this.key(x,y);let c=this.chunks.get(k);
      const os=osmState(this.z,x*256-GT_MARGIN,y*256-GT_MARGIN,512+2*GT_MARGIN);
      if(c&&(c.state==='done'&&c.rev===GT.paramsRev&&(c.osm||os!=='ok')||c.state==='busy'||c.state==='fail'&&performance.now()-c.t<20000))continue;
      if(os==='loading')continue;
      let ready=true,skip=false;
      for(let b=-1;b<=2;b++)for(let a=-1;a<=2;a++){const s=st(x+a,y+b),core=a>=0&&a<=1&&b>=0&&b<=1;
        if(core){if(s==='fail')skip=true;else if(s!=='ok')ready=false;}else if(s==='queued'||s==='loading'||s==='none')ready=false;}
      if(!ready||skip)continue;
      const w=this.chunkWorld(x,y),d=Math.hypot(w.x-focus.x,w.z-focus.z);
      const vis=frustum.intersectsSphere(new T.Sphere(new T.Vector3(w.x,ground(w.x,w.z),w.z),Math.max(300,this.mpp*400)));
      cand.push({x,y,k,c,score:d*(vis?1:2.5)});
    }
    cand.sort((a,b)=>a.score-b.score);
    for(const q of cand){
      if(!GT.pool.find(w=>!w.busy)&&!(GT.pool.length===0&&!GT.mainBusy))break;
      const gx0=q.x*256-GT_MARGIN,gy0=q.y*256-GT_MARGIN,W=512+2*GT_MARGIN;
      const img=this.ctx.getImageData((q.x-this.x0)*256-GT_MARGIN,(q.y-this.y0)*256-GT_MARGIN,W,W);
      const params=Object.assign({},GT.params);const sd=gtSunDom();if(sd>=0)params.sunDom=sd;
      const osm=osmRegion(this.z,gx0,gy0,W);
      const job={id:++GT.jobId,ring:this,key:q.k,rgba:new Uint8ClampedArray(img.data.buffer),W,H:W,mpp:this.mpp,core:[GT_MARGIN,GT_MARGIN,GT_MARGIN+512,GT_MARGIN+512],
        water:gtWaterMask(this.z,gx0,gy0,W,W),params,rev:GT.paramsRev,roads:osm?osm.roads:null,bldgs:osm?osm.bldgs:null,osm:!!osm};
      const prev=q.c;const c=prev||{x:q.x,y:q.y,ring:this,state:'none'};c.state='busy';c.job=job.id;c.t=performance.now();this.chunks.set(q.k,c);
      if(!gtDispatch(job)){c.state=prev?.cls?'done':'none';break;}
    }
  }
  chunkWorld(x,y){const p=toWorld(MERC.lat(y+1,this.z),MERC.lon(x+1,this.z));return p;}
  // region pixel (inside the analysed 640² region) → world xz
  pxToWorld(c,px,py){const gx=c.x*256-GT_MARGIN+px,gy=c.y*256-GT_MARGIN+py;const p=toWorld(MERC.lat(gy/256,this.z),MERC.lon(gx/256,this.z));return p;}
}
const GT_FAR=new GTRing(GT_CFG.farZ,GT_CFG.grid,false),GT_NEAR=new GTRing(GT_CFG.nearZ,GT_CFG.grid,true);
const GT_RINGS=[GT_NEAR,GT_FAR];

// ------------------------------- class-aware cel terrain shader -------------------------------
const CEL_U={
  baseMap:{value:terrainTexture},farMap:{value:GT_FAR.tex},farFeat:{value:GT_FAR.feat},nearMap:{value:GT_NEAR.tex},nearFeat:{value:GT_NEAR.feat},
  farB:GT_FAR.uBounds,nearB:GT_NEAR.uBounds,farTexel:GT_FAR.uTexel,nearTexel:GT_NEAR.uTexel,farMPP:{value:GT_FAR.mpp},nearMPP:{value:GT_NEAR.mpp},
  sunDir:{value:sun.position.clone().normalize()},eye:{value:new T.Vector3()},fogColor:{value:scene.fog.color},fogDensity:{value:scene.fog.density},
  datum:{value:DATUM},celAmt:{value:1},detailOn:{value:1},gtAmt:{value:1},xray:{value:0},time:{value:0},contourStep:{value:10}
};
const GT_GLSL_COMMON=`
float luma(vec3 c){return dot(c,vec3(.2126,.7152,.0722));}
vec3 L(vec3 s){return pow(max(s,vec3(0.)),vec3(2.2));}
vec3 poster(vec3 c,float n){return L(floor(pow(max(c,vec3(0.)),vec3(1./2.2))*n+.5)/n);}
vec3 sat(vec3 c,float s){return mix(vec3(luma(c)),c,s);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vnoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
float clsOf(vec4 f){return floor((f.r*255.+.5)/25.);}
float subOf(vec4 f){return mod(floor(f.r*255.+.5),25.);}
vec3 gtPal(float c){
  if(c<.5)return vec3(.16);if(c<1.5)return vec3(.12,.35,.78);if(c<2.5)return vec3(.47,.78,.31);if(c<3.5)return vec3(.08,.43,.16);
  if(c<4.5)return vec3(.24,.63,.35);if(c<5.5)return vec3(.9,.78,.47);if(c<6.5)return vec3(.86,.27,.24);if(c<7.5)return vec3(.63,.63,.67);
  if(c<8.5)return vec3(.75,.59,.39);return vec3(.04,.04,.12);}`;
const celTerrainMaterial=new T.ShaderMaterial({uniforms:CEL_U,
vertexShader:`varying vec2 vUv;varying vec3 wp;varying vec3 vN;
void main(){vUv=uv;vec4 p=modelMatrix*vec4(position,1.);wp=p.xyz;vN=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,
fragmentShader:`uniform sampler2D baseMap,farMap,farFeat,nearMap,nearFeat;
uniform vec4 farB,nearB;uniform float farTexel,nearTexel,farMPP,nearMPP;
uniform vec3 sunDir,eye,fogColor;uniform float fogDensity,datum,celAmt,detailOn,gtAmt,xray,time,contourStep;
varying vec2 vUv;varying vec3 wp;varying vec3 vN;
${GT_GLSL_COMMON}
vec2 rt(vec4 B,vec2 xz){return (xz-B.xy)/(B.zw-B.xy);}
float inR(vec2 t){return step(0.,t.x)*step(t.x,1.)*step(0.,t.y)*step(t.y,1.);}
float edgeF(vec2 t){return smoothstep(0.,.05,min(min(t.x,1.-t.x),min(t.y,1.-t.y)));}
vec4 featAt(bool nr,vec2 off){return nr?texture(nearFeat,rt(nearB,wp.xz+off)):texture(farFeat,rt(farB,wp.xz+off));}
void main(){
  vec3 N=normalize(vN);float camD=distance(eye,wp);
  vec3 base=texture(baseMap,vUv).rgb;
  vec2 tF=rt(farB,wp.xz),tN=rt(nearB,wp.xz);
  vec4 dF=texture(farMap,vec2(tF.x,1.-tF.y)),dN=texture(nearMap,vec2(tN.x,1.-tN.y));
  float fade=1.-smoothstep(4500.,9000.,camD);
  float wF=detailOn*inR(tF)*edgeF(tF)*dF.a*fade,wN=detailOn*inR(tN)*edgeF(tN)*dN.a*fade;
  vec3 photo=mix(mix(base,dF.rgb,wF),dN.rgb,wN);
  bool nr=wN>.5;
  vec4 f=nr?texture(nearFeat,tN):texture(farFeat,tF);
  float hasF=gtAmt*(nr?1.:step(.5,wF))*step(.5,f.a);
  float cls=clsOf(f),mpp=nr?nearMPP:farMPP;
  if(hasF>.5&&cls!=5.&&subOf(f)>.5)photo=mix(vec3(luma(photo)),photo,.45)*2.6+L(vec3(.05,.06,.05));   // lift imagery shadows; our sun casts its own
  vec3 alb=poster(sat(photo,1.2),9.);
  float ink=0.,shade=1.;
  if(hasF>.5){
    float nearK=1.-smoothstep(700.,2600.,camD);
    if(cls==1.){float w=sin(wp.x*.08+wp.z*.05+time*.9)*.5+.5;alb=mix(L(vec3(.10,.27,.36)),L(vec3(.22,.45,.56)),step(.74,w));}
    else if(cls==2.){
      vec3 g=mix(sat(photo,1.4),L(vec3(.40,.62,.26)),.45);
      float blades=vnoise(wp.xz*4.)*.5+vnoise(wp.xz*11.)*.5,mow=step(.5,fract(dot(wp.xz,vec2(.6,.8))/3.2));
      alb=poster(g*(.9+.16*blades*nearK)*(.95+.07*mow*nearK),10.);}
    else if(cls==3.||cls==4.){
      float lump=vnoise(wp.xz*.55)*.6+vnoise(wp.xz*1.7)*.4;
      alb=poster(mix(sat(photo,1.3),L(vec3(.17,.36,.15)),.5)*(.72+.5*lump),7.);}
    else if(cls==5.){
      float lum=luma(photo);alb=mix(L(vec3(.27,.28,.30)),L(vec3(.40,.40,.41)),smoothstep(.03,.3,lum))*(.94+.12*vnoise(wp.xz*2.));
      float fl=subOf(f);
      if(fl>.5&&nr){
        // OSM-backed road: smooth (bilinear) distance-to-edge (G) and distance-to-centre (B) fields
        vec2 tt=tN/nearTexel-.5,ti=floor(tt),tf=tt-ti;vec2 c0=(ti+.5)*nearTexel;
        vec2 g00=texture(nearFeat,c0).gb,g10=texture(nearFeat,c0+vec2(nearTexel,0.)).gb,g01=texture(nearFeat,c0+vec2(0.,nearTexel)).gb,g11=texture(nearFeat,c0+vec2(nearTexel)).gb;
        vec2 gb=mix(mix(g00,g10,tf.x),mix(g01,g11,tf.x),tf.y)*255.;
        float dE=gb.x/4.*mpp,dC=min(gb.y,f.b*255.)/8.*mpp,hwid=dE+dC;
        float fwC=max(fwidth(dC),.02),fwE=max(fwidth(dE),.02);
        // dash direction: world-space gradient of the centre distance (screen derivatives -> world)
        vec2 dx=dFdx(wp.xz),dy=dFdy(wp.xz);float det=dx.x*dy.y-dx.y*dy.x;vec2 gs=vec2(dFdx(dC),dFdy(dC));
        vec2 gw=abs(det)>1e-6?vec2(dy.y*gs.x-dx.y*gs.y,-dy.x*gs.x+dx.x*gs.y)/det:vec2(1.,0.);vec2 tg=normalize(vec2(-gw.y,gw.x)+1e-5);
        float s=dot(wp.xz,tg),mk=1.-smoothstep(900.,1900.,camD);
        float hasC=mod(fl,2.),dbl=mod(floor(fl/2.),2.),bike=mod(floor(fl/4.),2.),edge=mod(floor(fl/8.),2.);
        float single=1.-smoothstep(.08,.08+fwC,dC),twin=1.-smoothstep(.06,.06+fwC,abs(dC-.17));
        float cl=hasC*mix(single*step(.42,fract(s/9.)),twin,dbl);
        alb=mix(alb,L(vec3(.97,.78,.15)),cl*mk);
        float el=edge*(1.-smoothstep(.07,.07+fwE,abs(dE-.55))),bl=bike*(1.-smoothstep(.07,.07+fwE,abs(dE-1.95)));
        alb=mix(alb,L(vec3(.36,.6,.40)),bike*step(.65,dE)*step(dE,1.85)*.35*mk);
        alb=mix(alb,L(vec3(.95,.95,.92)),max(el,bl)*mk);
      }}
    else if(cls==6.)alb=poster(sat(photo,1.1)*1.15+.01,6.);
    else if(cls==7.)alb=poster(mix(photo,L(vec3(.52,.52,.50)),.4),8.);
    else if(cls==8.)alb=poster(sat(photo,1.25)*1.05,8.);
    else if(cls==9.)alb=poster(sat(photo*3.+L(vec3(.24,.27,.22)),.6),8.);
    float cE=clsOf(featAt(nr,vec2(mpp,0.))),cW=clsOf(featAt(nr,vec2(-mpp,0.))),cS=clsOf(featAt(nr,vec2(0.,mpp))),cN=clsOf(featAt(nr,vec2(0.,-mpp)));
    float r0=float(cls==6.),rd0=float(cls==5.);
    float roofEdge=abs(r0-float(cE==6.))+abs(r0-float(cW==6.))+abs(r0-float(cS==6.))+abs(r0-float(cN==6.));
    float roadEdge=abs(rd0-float(cE==5.))+abs(rd0-float(cW==5.))+abs(rd0-float(cS==5.))+abs(rd0-float(cN==5.));
    ink=max(min(roofEdge,1.)*.85,min(roadEdge,1.)*.3)*(1.-smoothstep(2500.,6500.,camD));
    if(cls!=6.){vec2 sd=normalize(sunDir.xz);float tanE=sunDir.y/max(length(sunDir.xz),1e-3);
      for(int k=0;k<6;k++){float dist=1.5+float(k)*3.4;vec4 q=featAt(nr,sd*dist);
        if(clsOf(q)==6.&&q.g*255./4.>dist*tanE){shade=.6;break;}}}
  }
  vec3 albedo=mix(photo,alb,celAmt);
  float d=max(dot(N,sunDir),0.),s4=d*4.,q=(floor(s4)+smoothstep(.4,.6,fract(s4)))/4.;
  float lit=.40+.12*N.y+.85*mix(d,q,celAmt);
  vec3 col=albedo*lit*mix(1.,shade,celAmt);
  // Sobel ink from imagery where no class map exists yet
  if(hasF<.5){vec2 du=vec2(tF.x,1.-tF.y);vec2 o=vec2(farTexel,0.);
    float gx=luma(texture(farMap,du+o.xy).rgb)-luma(texture(farMap,du-o.xy).rgb),gy=luma(texture(farMap,du+o.yx).rgb)-luma(texture(farMap,du-o.yx).rgb);
    ink=max(ink,smoothstep(.06,.2,length(vec2(gx,gy)))*wF*(1.-smoothstep(700.,2600.,camD))*.8);}
  float hh=(wp.y+datum)/contourStep;
  float minor=1.-smoothstep(.5,1.5,abs(fract(hh+.5)-.5)/max(fwidth(hh),1e-5));
  float h5=hh/5.,major=1.-smoothstep(.6,1.8,abs(fract(h5+.5)-.5)/max(fwidth(h5),1e-5));
  float nearC=1.-smoothstep(2000.,9000.,camD),slopeInk=smoothstep(.30,.55,1.-N.y)*.35;
  float tInk=celAmt*max(max(minor*.3,major*.65)*nearC*(1.-hasF*.6),max(ink,slopeInk));
  col=mix(col,L(vec3(.05,.08,.09)),clamp(tInk,0.,1.));
  if(xray>.5&&hasF>.5)col=mix(L(gtPal(cls)),col,.25);
  float fg=1.-exp(-pow(fogDensity*camD,2.));
  gl_FragColor=vec4(mix(col,fogColor,fg),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`});
const terrainPhotoMaterial=terrainMesh.material;

// ------------------------------- ink outlines (jets, buildings, trees) -------------------------------
const CEL_INK=new T.ShaderMaterial({side:T.BackSide,
  uniforms:{ink:{value:new T.Color('#0a1216')},thick:{value:.0022},maxT:{value:.22}},
  vertexShader:`uniform float thick,maxT;
void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vec3 n=normalize(normalMatrix*normal);mv.xyz+=n*min(thick*-mv.z,maxT);gl_Position=projectionMatrix*mv;}`,
  fragmentShader:`uniform vec3 ink;
void main(){gl_FragColor=vec4(ink,1.);
#include <colorspace_fragment>
}`});
function celInk(root){
  const inks=[];
  for(const o of [...root.children]){
    if(!o.isMesh||o.userData.flame||o.userData.exhaust||o.userData.ink||o.material.transparent||!o.geometry.attributes.normal)continue;
    const k=new T.Mesh(o.geometry,CEL_INK.clone());k.userData.ink=true;o.add(k);inks.push(k);
  }
  root.userData.celInks=inks;
}
const CEL_GRAD=new T.DataTexture(new Uint8Array([70,140,205,255]),4,1,T.RedFormat);
CEL_GRAD.minFilter=CEL_GRAD.magFilter=T.NearestFilter;CEL_GRAD.needsUpdate=true;
const GT_INK_FS=`uniform vec3 ink;void main(){gl_FragColor=vec4(ink,1.);
#include <colorspace_fragment>
}`;
const gtBuildingInk=rise=>new T.ShaderMaterial({side:T.BackSide,uniforms:{ink:{value:new T.Color('#0b1418')},thick:{value:.0017},maxT:{value:.9},rise},
  vertexShader:`attribute vec3 inkN;attribute float base;uniform float thick,maxT,rise;
void main(){vec3 p=position;p.y=base+(p.y-base)*rise;vec4 mv=modelViewMatrix*vec4(p,1.);vec3 n=normalize(normalMatrix*inkN);mv.xyz+=n*min(thick*-mv.z,maxT);gl_Position=projectionMatrix*mv;}`,
  fragmentShader:GT_INK_FS});
const gtTreeInk=rise=>new T.ShaderMaterial({side:T.BackSide,uniforms:{ink:{value:new T.Color('#0b1a10')},thick:{value:.0016},maxT:{value:.45},rise},
  vertexShader:`uniform float thick,maxT,rise;
void main(){vec3 p=position*rise;
#ifdef USE_INSTANCING
  vec4 w=modelMatrix*instanceMatrix*vec4(p,1.);vec3 n=normalize(mat3(modelMatrix)*mat3(instanceMatrix)*normal);
#else
  vec4 w=modelMatrix*vec4(p,1.);vec3 n=normalize(mat3(modelMatrix)*normal);
#endif
  vec4 mv=viewMatrix*w;mv.xyz+=normalize(mat3(viewMatrix)*n)*min(thick*-mv.z,maxT);gl_Position=projectionMatrix*mv;}`,
  fragmentShader:GT_INK_FS});

// ------------------------------- facade atlas (2 bays x 2 floors per style quadrant) -------------------------------
function gtFacadeAtlas(){
  // colour canvas + glass mask canvas; alpha = 255 on wall (tintable), 150 on glass
  const S=1024,H=512,c=document.createElement('canvas'),m=document.createElement('canvas');c.width=c.height=m.width=m.height=S;
  const g=c.getContext('2d'),k=m.getContext('2d');k.fillStyle='#fff';k.fillRect(0,0,S,S);
  let seed=9127;const r=()=>(seed=(seed*16807)%2147483647)/2147483647;
  const glass=(x,y,w,h,lit)=>{const gr=g.createLinearGradient(x,y,x+w,y+h);
    if(lit>.84){gr.addColorStop(0,'#ffe2a6');gr.addColorStop(1,'#d79a52');}else if(lit>.64){gr.addColorStop(0,'#bcd8ef');gr.addColorStop(1,'#6f97b8');}
    else{gr.addColorStop(0,'#3c5670');gr.addColorStop(.55,'#1d2c3c');gr.addColorStop(1,'#2a4058');}
    g.fillStyle=gr;g.fillRect(x,y,w,h);k.fillStyle='#000';k.fillRect(x,y,w,h);};
  const frame=(x,y,w,h,col)=>{g.fillStyle=col;g.fillRect(x,y,w,h);k.fillStyle='#000';k.fillRect(x,y,w,h);};
  const wall=(ox,oy,col)=>{g.fillStyle=col;g.fillRect(ox,oy,H,H);};
  // 0 · lap siding, trimmed windows, shutters
  wall(0,0,'#ebe7de');g.fillStyle='rgba(0,0,0,.11)';for(let y=0;y<H;y+=14)g.fillRect(0,y,H,2);
  for(let fy=0;fy<2;fy++)for(let bx=0;bx<2;bx++){const x=bx*256+70,y=fy*256+58,w=116,h=140;
    frame(x-10,y-10,w+20,h+20,'#fbfbf7');glass(x,y,w,h,r());frame(x+w/2-4,y,8,h,'#fbfbf7');frame(x,y+h/2-4,w,8,'#fbfbf7');
    frame(x-44,y-6,30,h+12,'#2e3a46');frame(x+w+14,y-6,30,h+12,'#2e3a46');}
  // 1 · brick, punched windows, stone sills and lintels
  wall(H,0,'#8d4b37');for(let y=0;y<H;y+=16){g.fillStyle='rgba(225,205,190,.45)';g.fillRect(H,y,H,2);for(let x=(y/16%2)*24;x<H;x+=48)g.fillRect(H+x,y,2,16);}
  for(let fy=0;fy<2;fy++)for(let bx=0;bx<2;bx++){const x=H+bx*256+64,y=fy*256+52,w=128,h=150;
    frame(x-8,y+h,w+16,14,'#d9d0c2');frame(x-6,y-14,w+12,12,'#d9d0c2');glass(x,y,w,h,r());frame(x+w/2-3,y,6,h,'#e8e2d6');}
  // 2 · glass curtain wall, mullions, slab bands
  frame(0,H,H,H,'#22364a');for(let fy=0;fy<2;fy++){const y=H+fy*256;
    for(let bx=0;bx<4;bx++)glass(bx*128+6,y+30,116,220,r()*.95);frame(0,y,H,26,'#b9c2c9');for(let x=0;x<H;x+=128)frame(x,y,8,256,'#aeb7bf');}
  // 3 · stucco / concrete, ribbon windows
  wall(H,H,'#d6cfc2');g.fillStyle='rgba(0,0,0,.06)';for(let i=0;i<500;i++)g.fillRect(H+r()*H,H+r()*H,3,3);
  for(let fy=0;fy<2;fy++){const y=H+fy*256+80;frame(H,y-8,H,112,'#8f969b');for(let bx=0;bx<4;bx++)glass(H+bx*128+8,y,112,96,r());}
  const id=g.getImageData(0,0,S,S),md=k.getImageData(0,0,S,S).data,d=id.data;
  for(let i=0;i<d.length;i+=4)d[i+3]=md[i]>127?255:150;
  g.putImageData(id,0,0);
  const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());t.premultiplyAlpha=false;
  return t;
}
const GT_ATLAS=gtFacadeAtlas();
const GT_BU={atlas:{value:GT_ATLAS},sunDir:CEL_U.sunDir,eye:CEL_U.eye,fogColor:CEL_U.fogColor,fogDensity:CEL_U.fogDensity,celAmt:CEL_U.celAmt};
const gtBuildingMaterial=rise=>new T.ShaderMaterial({uniforms:Object.assign({rise},GT_BU),
  vertexShader:`attribute vec3 tint;attribute vec4 info;attribute float base;uniform float rise;
varying vec2 vM;varying vec3 vCol,wp,vN;varying vec4 vInfo;
void main(){vec3 p=position;p.y=base+(p.y-base)*rise;vec4 w=modelMatrix*vec4(p,1.);wp=w.xyz;vN=normalize(mat3(modelMatrix)*normal);vM=uv;vCol=tint;vInfo=info;gl_Position=projectionMatrix*viewMatrix*w;}`,
  fragmentShader:`uniform sampler2D atlas;uniform vec3 sunDir,eye,fogColor;uniform float fogDensity,celAmt;
varying vec2 vM;varying vec3 vCol,wp,vN;varying vec4 vInfo;
vec3 L(vec3 s){return pow(max(s,vec3(0.)),vec3(2.2));}
void main(){
  vec3 N=normalize(vN);float kind=vInfo.x,style=vInfo.y,camD=distance(eye,wp);vec3 c;
  if(kind<.5){
    float fh=(style>1.5&&style<2.5)?3.8:3.1,bw=style<.5?3.4:2.9;
    vec2 cell=vec2(vM.x/bw,vM.y/fh);
    vec2 q=vec2(mod(style,2.)*.5,(1.-floor(style/2.))*.5)+fract(cell*.5)*.5;
    vec4 a=textureGrad(atlas,q,dFdx(cell*.25),dFdy(cell*.25));float wall=step(.8,a.a);
    c=mix(a.rgb,a.rgb*vCol*1.3,wall*((style<.5||style>2.5)?1.:.4));
    float door=vInfo.w*step(vM.y,2.3)*step(abs(vM.x-vInfo.z*.5),.6);
    c=mix(c,L(vec3(.32,.19,.11)),door);
    vec3 V=normalize(eye-wp);float fr=pow(1.-max(dot(V,N),0.),3.);
    c=mix(c,c*.65+L(vec3(.55,.68,.80))*fr*.55,(1.-wall)*(1.-door));
    c=mix(c,vCol*.82,smoothstep(500.,1600.,camD)*.6);
    c*=mix(.82,1.,smoothstep(0.,.5,vM.y));
  }else if(kind<1.5)c=vCol*(.86+.14*step(.5,fract(vM.y*2.2)));
  else c=vCol*(kind>2.5?.85:1.);
  float d=max(dot(N,sunDir),0.),s=d*3.,qq=(floor(s)+smoothstep(.42,.58,fract(s)))/3.;
  vec3 col=c*(.44+.1*N.y+.78*mix(d,qq,celAmt));
  float f=1.-exp(-pow(fogDensity*camD,2.));
  gl_FragColor=vec4(mix(col,fogColor,f),1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`});

// ------------------------------- tree materials (toon + grow-in) -------------------------------
function gtGrowOBC(shader){shader.uniforms.gtRise=this.userData.rise;
  shader.vertexShader='uniform float gtRise;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed*=gtRise;');}
const gtTreeMaterial=rise=>{const m=new T.MeshToonMaterial({color:'#ffffff',gradientMap:CEL_GRAD});m.userData.rise=rise;m.onBeforeCompile=gtGrowOBC;m.customProgramCacheKey=()=>'gtGrow';return m;};

// ------------------------------- 3D builders: buildings + trees per near-ring chunk -------------------------------
const GT_TINTS=[['#f1ede4','#e4d6bd','#cfd8dc','#d9c7a6','#b8c4b0','#9fb3c8','#e8e0d0','#c9b79c'],['#ffffff','#f3e6dc','#e6d2c4'],['#ffffff','#e0ecf5'],['#efe9dd','#ddd5c5','#cfd3d6','#e6dccb']]
  .map(p=>p.map(h=>new T.Color(h)));
const gtHash=(x,y,s=0)=>{let h=Math.imul(Math.round(x*7.13)^Math.imul(Math.round(y*3.71),0x27d4eb2d)^s,0x9e3779b1);h^=h>>>15;h=Math.imul(h,0x85ebca6b);h^=h>>>13;return (h>>>0)/4294967296;};
function gtBuildingGeometry(c,list,toW,polys=[]){
  const P=[],Nn=[],U=[],Tn=[],I=[],B=[],K=[];
  const push=(p,n,uv,tint,info,base,k)=>{P.push(p[0],p[1],p[2]);Nn.push(n[0],n[1],n[2]);U.push(uv[0],uv[1]);Tn.push(tint.r,tint.g,tint.b);I.push(...info);B.push(base);K.push(k[0],k[1],k[2]);};
  const facing=(a,b,cc,n)=>{const ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=cc[0]-a[0],vy=cc[1]-a[1],vz=cc[2]-a[2];
    return (uy*vz-uz*vy)*n[0]+(uz*vx-ux*vz)*n[1]+(ux*vy-uy*vx)*n[2]>=0;};
  // winding is fixed automatically so every face is front-facing along its normal n
  const tri=(a,b,cc,n,uva,uvb,uvc,tint,info,base,ik)=>{
    if(facing(a,b,cc,n)){push(a,n,uva,tint,info,base,ik[0]);push(b,n,uvb,tint,info,base,ik[1]);push(cc,n,uvc,tint,info,base,ik[2]);}
    else{push(a,n,uva,tint,info,base,ik[0]);push(cc,n,uvc,tint,info,base,ik[2]);push(b,n,uvb,tint,info,base,ik[1]);}};
  const quad=(a,b,cc,d,n,ua,va,ub,vb,tint,info,base,ik)=>{
    tri(a,b,cc,n,[ua,va],[ub,va],[ub,vb],tint,info,base,[ik[0],ik[1],ik[2]]);tri(a,cc,d,n,[ua,va],[ub,vb],[ua,vb],tint,info,base,[ik[0],ik[2],ik[3]]);};
  const nrm=v=>{const l=Math.hypot(v[0],v[1],v[2])||1;return [v[0]/l,v[1]/l,v[2]/l];};
  let count=0;
  for(const b of list){
    const [cx,cz]=toW(b.x,b.y),ca=Math.cos(b.ang),sa=Math.sin(b.ang);
    let w=b.w,d=b.d,uAx=[ca,sa],vAx=[-sa,ca];
    if(d>w){[w,d]=[d,w];uAx=[-sa,ca];vAx=[-ca,-sa];}                    // u = long axis
    if(w<3||d<3)continue;
    const hs=gtHash(cx,cz),house=b.roof>0;
    let h=house?clamp(b.h,5.6,11):clamp(b.h,3.6,80);
    const style=house?(hs<.74?0:1):(h>16||b.area>2500?(hs<.6?2:3):(hs<.55?3:1));
    const pal=GT_TINTS[style],tint=pal[Math.floor(gtHash(cz,cx,7)*pal.length)];
    const roofCol=new T.Color().setRGB(b.r/255,b.g/255,b.b/255,T.SRGBColorSpace);
    roofCol.multiplyScalar(house?1.05:1.15).addScalar(.015);
    const corner=(su,sv)=>[cx+uAx[0]*su*w/2+vAx[0]*sv*d/2,cz+uAx[1]*su*w/2+vAx[1]*sv*d/2];
    const C4=[corner(-1,-1),corner(1,-1),corner(1,1),corner(-1,1)];
    const G4=C4.map(p=>ground(p[0],p[1])),gMin=Math.min(...G4),gMax=Math.max(...G4),base=gMin-.8;
    let rise=0;if(b.roof===1)rise=Math.min(d/2*Math.tan(34*Math.PI/180),h*.45);if(b.roof===2)rise=Math.min(d/2*Math.tan(28*Math.PI/180),h*.4);
    const eave=gMax+Math.max(2.7,h-rise),top=eave+rise;
    const outN=(a,bb,ox=cx,oz=cz)=>{let n=[bb[1]-a[1],0,-(bb[0]-a[0])];const mx=(a[0]+bb[0])/2-ox,mz=(a[1]+bb[1])/2-oz;if(n[0]*mx+n[2]*mz<0)n=[-n[0],0,-n[2]];return nrm(n);};
    const ikH=(p,y)=>{const v=nrm([p[0]-cx,0,p[1]-cz]);return nrm([v[0],y,v[2]]);};
    // which long wall gets the front door: the one facing the open side (south-ish if unknown)
    const frontSide=(vAx[1]>0)?1:-1;
    const walls=[[0,1,w,-1],[1,2,d,0],[2,3,w,1],[3,0,d,0]];
    for(const [i0,i1,len,side] of walls){
      const a=C4[i0],bb=C4[i1],n=outN(a,bb);
      const front=side!==0&&side===-frontSide?1:0;
      quad([a[0],base,a[1]],[bb[0],base,bb[1]],[bb[0],eave,bb[1]],[a[0],eave,a[1]],n,0,base-gMin,len,eave-gMin,tint,[0,style,len,front],base,
        [ikH(a,0),ikH(bb,0),ikH(bb,.3),ikH(a,.3)]);
    }
    const yRoof=[.0,1,.0];
    if(b.roof===0){
      // flat roof + parapet + rooftop units
      const pa=.7,ins=.28,inC=C4.map(p=>[p[0]+(cx-p[0])*ins/Math.max(1,Math.hypot(cx-p[0],cz-p[1]))*1.4,p[1]+(cz-p[1])*ins/Math.max(1,Math.hypot(cx-p[0],cz-p[1]))*1.4]);
      quad([C4[0][0],top,C4[0][1]],[C4[3][0],top,C4[3][1]],[C4[2][0],top,C4[2][1]],[C4[1][0],top,C4[1][1]],yRoof,0,0,w,d,roofCol,[2,style,0,0],base,[ikH(C4[0],.6),ikH(C4[3],.6),ikH(C4[2],.6),ikH(C4[1],.6)]);
      for(const [i0,i1] of [[0,1],[1,2],[2,3],[3,0]]){const a=C4[i0],bb=C4[i1],n=outN(a,bb);
        quad([a[0],top,a[1]],[bb[0],top,bb[1]],[bb[0],top+pa,bb[1]],[a[0],top+pa,a[1]],n,0,0,1,1,tint,[3,style,0,0],base,[ikH(a,.4),ikH(bb,.4),ikH(bb,.6),ikH(a,.6)]);
        const ia=inC[i0],ib=inC[i1];
        quad([ib[0],top,ib[1]],[ia[0],top,ia[1]],[ia[0],top+pa,ia[1]],[ib[0],top+pa,ib[1]],[-n[0],0,-n[2]],0,0,1,1,tint,[3,style,0,0],base,[ikH(ib,.4),ikH(ia,.4),ikH(ia,.6),ikH(ib,.6)]);
        quad([a[0],top+pa,a[1]],[bb[0],top+pa,bb[1]],[ib[0],top+pa,ib[1]],[ia[0],top+pa,ia[1]],yRoof,0,0,1,1,tint,[3,style,0,0],base,[ikH(a,.7),ikH(bb,.7),ikH(ib,.7),ikH(ia,.7)]);}
      const units=b.area>200?Math.min(5,1+Math.floor(b.area/700)):0,unitCol=new T.Color('#b7bcc0');
      for(let k=0;k<units;k++){const fu=(gtHash(cx,cz,k*3+1)-.5)*.6*w,fv=(gtHash(cx,cz,k*3+2)-.5)*.6*d,sz=1.6+gtHash(cx,cz,k*3+3)*2.4,uh=1.1+gtHash(cz,cx,k)*1.1;
        const ux=cx+uAx[0]*fu+vAx[0]*fv,uz=cz+uAx[1]*fu+vAx[1]*fv;
        const q=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([su,sv])=>[ux+(uAx[0]*su+vAx[0]*sv)*sz/2,uz+(uAx[1]*su+vAx[1]*sv)*sz/2]);
        for(let e=0;e<4;e++){const a=q[e],bb=q[(e+1)%4],n=outN(a,bb,ux,uz);
          quad([a[0],top,a[1]],[bb[0],top,bb[1]],[bb[0],top+uh,bb[1]],[a[0],top+uh,a[1]],n,0,0,1,1,unitCol,[2,style,0,0],base,[ikH(a,.2),ikH(bb,.2),ikH(bb,.5),ikH(a,.5)]);}
        quad([q[0][0],top+uh,q[0][1]],[q[3][0],top+uh,q[3][1]],[q[2][0],top+uh,q[2][1]],[q[1][0],top+uh,q[1][1]],yRoof,0,0,1,1,unitCol,[2,style,0,0],base,[ikH(q[0],.6),ikH(q[3],.6),ikH(q[2],.6),ikH(q[1],.6)]);}
    }else{
      // pitched roof: gable (1) or hip (2); ridge along the long axis u
      const ov=.45,R=(su,sv,y)=>{const p=[cx+uAx[0]*su+vAx[0]*sv,cz+uAx[1]*su+vAx[1]*sv];return [p[0],y,p[1]];};
      const hw=w/2+ov,hd=d/2+ov,ridgeHalf=b.roof===1?hw:Math.max(0,w/2-d/2);
      const yE=eave-ov*Math.tan(34*Math.PI/180)*.6;
      const e0=R(-hw,-hd,yE),e1=R(hw,-hd,yE),e2=R(hw,hd,yE),e3=R(-hw,hd,yE),r0=R(-ridgeHalf,0,top),r1=R(ridgeHalf,0,top);
      const slopeN=sv=>nrm([vAx[0]*sv*rise,(hd),vAx[1]*sv*rise]);
      const sl=Math.hypot(rise,hd);const ikR=p=>ikH([p[0],p[2]],.8);
      quad(e1,e0,r0,r1,slopeN(-1),0,0,w,sl,roofCol,[1,style,0,0],base,[ikR(e1),ikR(e0),ikR(r0),ikR(r1)]);
      quad(e3,e2,r1,r0,slopeN(1),0,0,w,sl,roofCol,[1,style,0,0],base,[ikR(e3),ikR(e2),ikR(r1),ikR(r0)]);
      if(b.roof===1){
        // gable-end triangles continue the wall material
        const g0=R(-w/2,-d/2,eave),g1=R(-w/2,d/2,eave),g2=R(w/2,-d/2,eave),g3=R(w/2,d/2,eave),t0=R(-w/2,0,top-.05),t1=R(w/2,0,top-.05);
        const nU=nrm([uAx[0],0,uAx[1]]);
        tri(g0,g1,t0,[-nU[0],0,-nU[2]],[0,eave-gMin],[d,eave-gMin],[d/2,top-gMin],tint,[0,style,d,0],base,[ikR(g0),ikR(g1),ikR(t0)]);
        tri(g3,g2,t1,nU,[0,eave-gMin],[d,eave-gMin],[d/2,top-gMin],tint,[0,style,d,0],base,[ikR(g3),ikR(g2),ikR(t1)]);
      }else{
        const nU=nrm([uAx[0],0,uAx[1]]),hipN=s=>nrm([uAx[0]*s*rise,hd,uAx[1]*s*rise]);
        tri(e0,e3,r0,hipN(-1),[0,0],[d,0],[d/2,sl],roofCol,[1,style,0,0],base,[ikR(e0),ikR(e3),ikR(r0)]);
        tri(e2,e1,r1,hipN(1),[0,0],[d,0],[d/2,sl],roofCol,[1,style,0,0],base,[ikR(e2),ikR(e1),ikR(r1)]);
      }
    }
    count++;
  }
  // complex OSM footprints: extruded walls along every edge, flat roof, parapet
  for(const pb of polys){
    const pts=pb.ll.map(([la,lo])=>{const p=toWorld(la,lo);return [p.x,p.z];});
    if(pts.length>3&&Math.hypot(pts[0][0]-pts[pts.length-1][0],pts[0][1]-pts[pts.length-1][1])<.05)pts.pop();
    if(pts.length<3)continue;
    let A=0;for(let i=0;i<pts.length;i++){const a=pts[i],b2=pts[(i+1)%pts.length];A+=a[0]*b2[1]-b2[0]*a[1];}A/=2;if(Math.abs(A)<12)continue;
    const cx=pts.reduce((s,p)=>s+p[0],0)/pts.length,cz=pts.reduce((s,p)=>s+p[1],0)/pts.length,hs=gtHash(cx,cz);
    const area=Math.abs(A),h=clamp(pb.h||(area<260?7.2:area<1500?8.5:10.5),3.4,200);
    const style=h>16||area>2500?(hs<.6?2:3):(area<300?(hs<.7?0:1):(hs<.55?3:1));
    const pal=GT_TINTS[style],tint=pal[Math.floor(gtHash(cz,cx,7)*pal.length)];
    const roofCol=new T.Color().setRGB((pb.r??120)/255,(pb.g??120)/255,(pb.b??120)/255,T.SRGBColorSpace).multiplyScalar(1.12).addScalar(.015);
    const G=pts.map(p=>ground(p[0],p[1])),gMin=Math.min(...G),gMax=Math.max(...G),base=gMin-.8,top=gMax+h,pa=.6;
    const ik=(p,y)=>{const v=nrm([p[0]-cx,0,p[1]-cz]);return nrm([v[0],y,v[2]]);};
    let run=0;
    for(let i=0;i<pts.length;i++){const a=pts[i],b2=pts[(i+1)%pts.length],len=Math.hypot(b2[0]-a[0],b2[1]-a[1]);if(len<.2)continue;
      // outward normal from the polygon winding (A>0: counter-clockwise in x/z)
      let n=nrm([b2[1]-a[1],0,-(b2[0]-a[0])]);if(A<0)n=[-n[0],0,-n[2]];
      quad([a[0],base,a[1]],[b2[0],base,b2[1]],[b2[0],top,b2[1]],[a[0],top,a[1]],n,run,base-gMin,run+len,top-gMin,tint,[0,style,len,0],base,[ik(a,0),ik(b2,0),ik(b2,.3),ik(a,.3)]);
      quad([a[0],top,a[1]],[b2[0],top,b2[1]],[b2[0],top+pa,b2[1]],[a[0],top+pa,a[1]],n,0,0,1,1,tint,[3,style,0,0],base,[ik(a,.4),ik(b2,.4),ik(b2,.6),ik(a,.6)]);
      run+=len;}
    const tris=T.ShapeUtils.triangulateShape(pts.map(p=>new T.Vector2(p[0],p[1])),[]);
    for(const [i0,i1,i2] of tris){const a=pts[i0],b2=pts[i1],c2=pts[i2];
      tri([a[0],top+.05,a[1]],[b2[0],top+.05,b2[1]],[c2[0],top+.05,c2[1]],[0,1,0],[a[0],a[1]],[b2[0],b2[1]],[c2[0],c2[1]],roofCol,[2,style,0,0],base,[ik(a,.7),ik(b2,.7),ik(c2,.7)]);}
    count++;
  }
  if(!count)return null;
  const g=new T.BufferGeometry();
  g.setAttribute('position',new T.Float32BufferAttribute(P,3));g.setAttribute('normal',new T.Float32BufferAttribute(Nn,3));
  g.setAttribute('uv',new T.Float32BufferAttribute(U,2));g.setAttribute('tint',new T.Float32BufferAttribute(Tn,3));
  g.setAttribute('info',new T.Float32BufferAttribute(I,4));g.setAttribute('base',new T.Float32BufferAttribute(B,1));g.setAttribute('inkN',new T.Float32BufferAttribute(K,3));
  g.computeBoundingSphere();g.userData.count=count;return g;
}
// shared tree geometries (built once)
const GT_GEO=(()=>{
  const lumpy=(detail,amp,seed)=>{const g=new T.IcosahedronGeometry(1,detail),p=g.attributes.position;
    for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const n=1+amp*(Math.sin(x*4.1+seed)*Math.sin(y*3.7+seed*2)*Math.sin(z*4.6+seed*.7)+.35*Math.sin(x*9.3+y*7.1+z*8.2));p.setXYZ(i,x*n,y*n,z*n);}
    g.computeVertexNormals();return g;};
  const crown=lumpy(1,.2,1.3),bush=lumpy(1,.18,4.1);
  const cones=[[.95,.0,.5],[.75,.28,.45],[.52,.52,.48]].map(([r,y0,h])=>{const c=new T.ConeGeometry(r,h,8,1,false);c.translate(0,y0+h/2+.04,0);return c;});
  const merge=gs=>{const P=[],Nn=[];for(const g of gs){const q=g.toNonIndexed();P.push(...q.attributes.position.array);Nn.push(...q.attributes.normal.array);}
    const m=new T.BufferGeometry();m.setAttribute('position',new T.Float32BufferAttribute(P,3));m.setAttribute('normal',new T.Float32BufferAttribute(Nn,3));return m;};
  const conifer=merge(cones);conifer.scale(1,1/1.04,1);
  const trunk=new T.CylinderGeometry(.5,.7,1,6,1,true);trunk.translate(0,.5,0);
  return {crown,bush,conifer,trunk};
})();
function gtTreeMeshes(c,list,toW,riseU){
  const dec=[],con=[],bus=[];for(const t of list)(t.type===2?bus:t.type===1?con:dec).push(t);
  const m4=new T.Matrix4(),q=new T.Quaternion(),s=new T.Vector3(),p=new T.Vector3(),col=new T.Color(),out=[];
  const make=(geo,arr,fn,ink)=>{if(!arr.length)return;const mat=gtTreeMaterial(riseU),mesh=new T.InstancedMesh(geo,mat,arr.length);
    arr.forEach((t,i)=>{const [x,z]=toW(t.x,t.y),g=ground(x,z);fn(t,x,g,z);m4.compose(p,q,s);mesh.setMatrixAt(i,m4);mesh.setColorAt(i,col);});
    mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;mesh.computeBoundingSphere();out.push(mesh);
    if(ink){const k=new T.InstancedMesh(geo,gtTreeInk(riseU),arr.length);k.instanceMatrix=mesh.instanceMatrix;k.boundingSphere=mesh.boundingSphere;k.userData.ink=true;out.push(k);}
    return mesh;};
  const leaf=(t,h0,s0,l0,ls)=>{const lum=(t.R+t.G+t.B)/765;col.setHSL(h0+gtHash(t.x,t.y,5)*.07,s0+gtHash(t.y,t.x,6)*.16,l0+lum*ls+gtHash(t.x,t.y,8)*.05);};
  make(GT_GEO.crown,dec,(t,x,g,z)=>{const r=t.r,h=Math.max(t.h,r*1.6+2);q.setFromAxisAngle(new T.Vector3(0,1,0),gtHash(x,z)*6.28);p.set(x,g+h-r*.9,z);s.set(r,r*.88,r);leaf(t,.22,.42,.12,.22);},true);
  make(GT_GEO.trunk,dec,(t,x,g,z)=>{const r=t.r,h=Math.max(t.h,r*1.6+2),th=Math.max(1,h-r*1.5);q.identity();p.set(x,g-.2,z);s.set(.16+r*.04,th,.16+r*.04);col.setHSL(.07,.35,.12);},false);
  make(GT_GEO.conifer,con,(t,x,g,z)=>{q.setFromAxisAngle(new T.Vector3(0,1,0),gtHash(x,z)*6.28);p.set(x,g-.3,z);s.set(t.r*1.05,Math.max(t.h,t.r*2.6),t.r*1.05);leaf(t,.33,.38,.06,.14);},true);
  make(GT_GEO.bush,bus,(t,x,g,z)=>{const r=Math.max(.7,t.r);q.setFromAxisAngle(new T.Vector3(0,1,0),gtHash(x,z)*6.28);p.set(x,g+r*.42,z);s.set(r,r*.72,r);leaf(t,.24,.45,.11,.2);},false);
  return out;
}
// chunk 3D lifecycle
GT.buildQ=[];GT.live=new Set();
function gtQueueBuild(ch){if(!ch.ring.near)return;gtDrop3D(ch);if(!GT.buildQ.includes(ch))GT.buildQ.push(ch);}
function gtDrop3D(ch){if(!ch.obj)return;scene.remove(ch.obj);
  ch.obj.traverse(o=>{if(!o.isMesh)return;if(o.isInstancedMesh&&!o.userData.ink)o.dispose();
    if(!o.userData.sharedGeo&&!Object.values(GT_GEO).includes(o.geometry))o.geometry.dispose();o.material.dispose();});
  ch.obj=null;GT.live.delete(ch);}
function gtBuild3D(ch){
  const ring=ch.ring,p0=ring.pxToWorld(ch,0,0),px=ring.pxToWorld(ch,640,0),py=ring.pxToWorld(ch,0,640);
  const ax=(px.x-p0.x)/640,bz=(px.z-p0.z)/640,az=(py.z-p0.z)/640,bx=(py.x-p0.x)/640;
  const toW=(x,y)=>[p0.x+x*ax+y*bx,p0.z+x*bz+y*az];
  const grp=new T.Group();grp.name='GT chunk '+ch.x+','+ch.y;grp.userData.riseU={value:0};grp.userData.born=performance.now();
  // OSM footprints whose centroid is in this chunk's core: rectangle-like -> parametric box with pitched roof, else extruded polygon
  const boxes=[...ch.buildings],polys=[];
  for(const pb of ch.osmB||[]){if(pb.cx<GT_MARGIN||pb.cy<GT_MARGIN||pb.cx>=GT_MARGIN+512||pb.cy>=GT_MARGIN+512)continue;
    const p=[];for(let k=0;k<pb.pts.length;k+=2)p.push([pb.pts[k],pb.pts[k+1]]);if(p.length>3&&p[0][0]===p[p.length-1][0]&&p[0][1]===p[p.length-1][1])p.pop();
    let A=0;for(let i=0;i<p.length;i++){const a=p[i],b=p[(i+1)%p.length];A+=a[0]*b[1]-b[0]*a[1];}A=Math.abs(A/2);
    let best=null;for(let i=0;i<p.length;i++){const a=p[i],b=p[(i+1)%p.length],ang=Math.atan2(b[1]-a[1],b[0]-a[0]),ca=Math.cos(ang),sa=Math.sin(ang);
      let u0=1e9,u1=-1e9,v0=1e9,v1=-1e9;for(const q of p){const u=q[0]*ca+q[1]*sa,v=-q[0]*sa+q[1]*ca;u0=Math.min(u0,u);u1=Math.max(u1,u);v0=Math.min(v0,v);v1=Math.max(v1,v);}
      const ar=(u1-u0)*(v1-v0);if(!best||ar<best.ar)best={ar,ang,ca,sa,u0,u1,v0,v1};}
    if(!best)continue;const mpp2=ring.mpp*ring.mpp,am=A*mpp2,rect=A/(best.ar||1);
    if(rect>.82&&p.length<=8){const cu=(best.u0+best.u1)/2,cv=(best.v0+best.v1)/2,w=(best.u1-best.u0)*ring.mpp,d=(best.v1-best.v0)*ring.mpp;
      const hasTag=pb.h>0&&!pb.roof&&false;const pitched=am<450&&!(pb.h>12);
      boxes.push({x:cu*best.ca-cv*best.sa,y:cu*best.sa+cv*best.ca,w,d,ang:best.ang,h:pb.h||(am<260?7.2:am<1500?8.5:10.5),area:am,
        roof:pitched?(pb.roof||(Math.max(w,d)/Math.max(.1,Math.min(w,d))>1.3?1:2)):0,r:pb.r??120,g:pb.g??120,b:pb.b??120,osm:1});}
    else polys.push(pb);}
  GT.osmUsed=(GT.osmUsed||0)+(ch.osmB||[]).length;
  const bg=gtBuildingGeometry(ch,boxes,toW,polys);
  if(bg){const m=new T.Mesh(bg,gtBuildingMaterial(grp.userData.riseU));m.name='buildings';grp.add(m);
    const k=new T.Mesh(bg,gtBuildingInk(grp.userData.riseU));k.userData.ink=true;k.userData.sharedGeo=true;grp.add(k);}
  for(const m of gtTreeMeshes(ch,ch.trees,toW,grp.userData.riseU)){if(m.userData.ink)m.userData.sharedGeo=true;grp.add(m);}
  grp.traverse(o=>{if(o.isInstancedMesh&&!o.userData.ink)o.userData.sharedGeo=true;});
  const w=ring.chunkWorld(ch.x,ch.y);grp.userData.center=new T.Vector3(w.x,ground(w.x,w.z),w.z);
  ch.obj=grp;GT.live.add(ch);scene.add(grp);
  GT.buildings=0;GT.trees=0;for(const c of GT.live){GT.buildings+=c.buildings.length;GT.trees+=c.trees.length;}
}

// ------------------------------- GPU grass field (only under ~95 m AGL) -------------------------------
const GT_HMAP=new T.DataTexture(heightGrid,N,N,T.RedFormat,T.FloatType);GT_HMAP.minFilter=GT_HMAP.magFilter=T.NearestFilter;GT_HMAP.needsUpdate=true;
const GT_GRASS_N=GT_LITE?110:170,GT_GRASS_S=1.3;
const gtGrassGeo=(()=>{const P=[];for(let i=0;i<7;i++){const a=i/7*Math.PI*2+(i%2)*.45,r=.1+.22*((i*37)%10)/10,w=.055,lean=.18;
    const cx=Math.cos(a)*r,cz=Math.sin(a)*r,px=-Math.sin(a)*w,pz=Math.cos(a)*w,tx=cx+Math.cos(a)*lean,tz=cz+Math.sin(a)*lean;
    P.push(cx-px,0,cz-pz,cx+px,0,cz+pz,tx,1,tz);}
  const g=new T.InstancedBufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(P,3));g.instanceCount=GT_GRASS_N*GT_GRASS_N;return g;})();
const GT_GRASS_U={hMap:{value:GT_HMAP},nearMap:{value:GT_NEAR.tex},nearFeat:{value:GT_NEAR.feat},nearB:GT_NEAR.uBounds,gCenter:{value:new T.Vector2()},
  gN:{value:GT_GRASS_N},gS:{value:GT_GRASS_S},hR:{value:R},hN:{value:TERRAIN.n},time:CEL_U.time,range:{value:GT_GRASS_N*GT_GRASS_S*.5},
  eye:CEL_U.eye,sunDir:CEL_U.sunDir,fogColor:CEL_U.fogColor,fogDensity:CEL_U.fogDensity};
const gtGrass=new T.Mesh(gtGrassGeo,new T.ShaderMaterial({uniforms:GT_GRASS_U,side:T.DoubleSide,
  vertexShader:`uniform sampler2D hMap,nearMap,nearFeat;uniform vec4 nearB;uniform vec2 gCenter;uniform float gN,gS,hR,hN,time,range;uniform vec3 eye;
varying vec3 vC,wpv;varying float vT;
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float terrainH(vec2 xz){vec2 uv=clamp((xz+hR)/(2.*hR)*hN,vec2(0.),vec2(hN-.0001));vec2 i=floor(uv),f=uv-i;ivec2 ii=ivec2(i);
  float A=texelFetch(hMap,ii,0).r,B=texelFetch(hMap,ii+ivec2(1,0),0).r,C=texelFetch(hMap,ii+ivec2(0,1),0).r,D=texelFetch(hMap,ii+ivec2(1,1),0).r;
  return f.x+f.y<=1.?A+(B-A)*f.x+(C-A)*f.y:D+(C-D)*(1.-f.x)+(B-D)*(1.-f.y);}
void main(){
  float id=float(gl_InstanceID),ix=mod(id,gN),iz=floor(id/gN);
  vec2 gp=gCenter+(vec2(ix,iz)-gN*.5)*gS,jit=vec2(h21(gp),h21(gp+17.3))-.5,xz=gp+jit*gS*.95;
  vec2 t=(xz-nearB.xy)/(nearB.zw-nearB.xy);vec4 f=texture(nearFeat,t);float cls=floor((f.r*255.+.5)/25.);
  float ok=step(.5,f.a)*(1.-step(.5,abs(cls-2.)))*step(0.,t.x)*step(t.x,1.)*step(0.,t.y)*step(t.y,1.);
  float dist=distance(eye.xz,xz),fade=1.-smoothstep(range*.55,range*.97,dist),sc=ok*fade*(.55+.65*h21(gp+3.1));
  float rot=h21(gp+9.)*6.283;mat2 Rm=mat2(cos(rot),-sin(rot),sin(rot),cos(rot));
  vec3 p=position;p.xz=Rm*p.xz;p*=sc;p.x+=sin(time*2.1+xz.x*.35+xz.y*.27)*.2*position.y*sc;
  vec3 w=vec3(xz.x+p.x,terrainH(xz)+p.y+.03,xz.y+p.z);wpv=w;
  vec3 img=texture(nearMap,vec2(t.x,1.-t.y)).rgb;vC=mix(img*1.15,pow(vec3(.36,.58,.22),vec3(2.2)),.5)*(.62+.55*position.y);vT=position.y;
  gl_Position=projectionMatrix*viewMatrix*vec4(w,1.);}`,
  fragmentShader:`uniform vec3 eye,fogColor;uniform float fogDensity;varying vec3 vC,wpv;varying float vT;
void main(){vec3 c=pow(floor(pow(vC,vec3(1./2.2))*9.+.5)/9.,vec3(2.2));float f=1.-exp(-pow(fogDensity*distance(eye,wpv),2.));gl_FragColor=vec4(mix(c,fogColor,f),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));
gtGrass.frustumCulled=false;gtGrass.visible=false;gtGrass.name='GT grass';scene.add(gtGrass);

// ------------------------------- hide the old z13 cone trees where real trees exist -------------------------------
const GT_HIDE={value:new T.Vector4(1e7,1e7,1e7,1e7)};
function gtHideOBC(shader){shader.uniforms.gtHide=GT_HIDE;
  shader.vertexShader='uniform vec4 gtHide;\n'+shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
#ifdef USE_INSTANCING
  vec4 gtO=modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
  if(gtO.x>gtHide.x&&gtO.x<gtHide.z&&gtO.z>gtHide.y&&gtO.z<gtHide.w)gl_Position=vec4(2.,2.,2.,1.);
#endif`);}

// ------------------------------- UI -------------------------------
const CEL={mode:0,modes:['Cel + Ground Truth','Photo + Ground Truth','Original']};
const celBtn=document.createElement('button');celBtn.title='Terrain style (V)';$('help').before(celBtn);
const gtBtn=document.createElement('button');gtBtn.title='Ground-truth 3D buildings, trees and grass (B)';$('help').before(gtBtn);
const hdStat=document.createElement('span');$('geoInfo').append(document.createElement('br'),hdStat);
$('hint').textContent+=' · V style · B 3D · X x-ray · O OSM · G tune';
let gtOldTrees=null;
function celApply(){
  const m=CEL.mode;
  terrainMesh.material=m===2?terrainPhotoMaterial:celTerrainMaterial;
  CEL_U.celAmt.value=m===0?1:0;CEL_U.detailOn.value=m<2?1:0;CEL_U.gtAmt.value=GT.on?1:0;
  if(gtOldTrees)gtOldTrees.material=m===0?gtOldTrees.userData.toonMat:gtOldTrees.userData.photoMat;
  celBtn.textContent='🎨 '+CEL.modes[m];celBtn.classList.toggle('on',m===0);
  gtBtn.textContent=GT.on?'🏙 3D on':'🏙 3D off';gtBtn.classList.toggle('on',GT.on);
}
celBtn.onclick=()=>{CEL.mode=(CEL.mode+1)%3;celApply();toast('🎨 Terrain · '+CEL.modes[CEL.mode]);};
gtBtn.onclick=()=>{GT.on=!GT.on;celApply();toast(GT.on?'🏙 Ground truth on · buildings, trees, grass':'🏙 Ground truth off');};
// tuning panel
const gtPanel=document.createElement('div');
gtPanel.style.cssText='position:fixed;right:12px;top:86px;z-index:30;width:250px;padding:10px 12px;border-radius:12px;background:rgba(8,18,24,.82);color:#dff;font:12px system-ui,sans-serif;display:none;backdrop-filter:blur(6px)';
const GT_SLIDERS=[['vegGn','Green → vegetation',.34,.46,.005,.40],['treeRough','Tree texture',6,20,.5,11],['shadowL','Shadow darkness',10,50,1,26],
  ['toneDark','Dark-roof tone',60,130,1,96],['roadHalf','Road half-width m',3,10,.25,6.5],['sunTan','Height per shadow m',.5,1.6,.05,1]];
gtPanel.innerHTML='<b>Ground truth tuning</b> <span style="opacity:.6">(G)</span><br>'+GT_SLIDERS.map(([k,l,a,b,s,v])=>
  `<label style="display:block;margin-top:6px">${l} <span id="gtv_${k}">${v}</span><input id="gts_${k}" type="range" min="${a}" max="${b}" step="${s}" value="${v}" style="width:100%"></label>`).join('')+
  '<label style="display:block;margin-top:6px"><input id="gtXray" type="checkbox"> Class-map x-ray (X)</label><button id="gtApply" style="margin-top:6px;width:100%">Re-analyse chunks</button>';
document.body.append(gtPanel);
for(const [k] of GT_SLIDERS)$('gts_'+k).oninput=e=>{GT.params[k]=+e.target.value;$('gtv_'+k).textContent=e.target.value;};
$('gtApply').onclick=()=>{GT.paramsRev++;GT.sun.fill(0);GT.sunW=0;toast('🏙 Re-analysing with new thresholds');};
$('gtXray').onchange=e=>{GT.xray=e.target.checked?1:0;CEL_U.xray.value=GT.xray;};
addEventListener('keydown',e=>{if(editable()||e.repeat)return;
  if(e.code==='KeyV')celBtn.click();
  if(e.code==='KeyB')gtBtn.click();
  if(e.code==='KeyX'){GT.xray^=1;CEL_U.xray.value=GT.xray;$('gtXray').checked=!!GT.xray;toast(GT.xray?'X-ray: class map':'X-ray off');}
  if(e.code==='KeyO'){OSM.on=!OSM.on;GT.paramsRev++;toast(OSM.on?'🗺 OSM assist on · exact road lines + footprints':'🗺 OSM assist off · colour map only');}
  if(e.code==='KeyG')gtPanel.style.display=gtPanel.style.display==='none'?'block':'none';});
celApply();

// ------------------------------- per-frame tick (runs right before each render) -------------------------------
let celStatusAt=0,gtLastT=performance.now();
const gtFrustum=new T.Frustum(),gtPV=new T.Matrix4(),gtTmp=new T.Vector3(),GT_ARROWS=['→','↘','↓','↙','←','↖','↑','↗'];
function celTick(){
  const now=performance.now(),dt=Math.min(.1,(now-gtLastT)/1000);gtLastT=now;
  CEL_U.time.value=now/1000;CEL_U.eye.value.copy(camera.position);CEL_U.gtAmt.value=GT.on?1:0;
  const agl=camera.position.y-ground(camera.position.x,camera.position.z);
  camera.updateMatrixWorld();gtPV.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);gtFrustum.setFromProjectionMatrix(gtPV);
  if(CEL.mode<2){
    const f=fwd(me),ahead=me.p.clone().addScaledVector(f,clamp(me.speed*3,0,1200)),aheadN=me.p.clone().addScaledVector(f,clamp(me.speed*2,0,520));
    for(const r of GT_RINGS){const a=r.near?aheadN:ahead,g=toGeo(a.x,a.z);r.recenter(g.lat,g.lon);r.pump();r.upload();}
    if(GT.on){GT_NEAR.schedule(aheadN,gtFrustum);GT_FAR.schedule(ahead,gtFrustum);}
  }
  // ---- 3D level of detail
  const want3D=GT.on&&CEL.mode<2&&agl<GT_CFG.maxAGL3D;
  if(want3D&&GT.buildQ.length){
    GT.buildQ=GT.buildQ.filter(c=>c.state==='done'&&c.ring.chunkIn(c)&&!c.obj);
    let best=null,bd=1e9;
    for(const c of GT.buildQ){const w=c.ring.chunkWorld(c.x,c.y),d=Math.hypot(w.x-camera.position.x,w.z-camera.position.z);
      const vis=gtFrustum.intersectsSphere(new T.Sphere(gtTmp.set(w.x,ground(w.x,w.z),w.z),420));const s=d*(vis?1:2);if(d<GT_CFG.build3D&&s<bd){bd=s;best=c;}}
    if(best){GT.buildQ.splice(GT.buildQ.indexOf(best),1);gtBuild3D(best);}
  }
  for(const c of [...GT.live]){
    const ctr=c.obj.userData.center,d=Math.hypot(ctr.x-camera.position.x,ctr.z-camera.position.z);
    if(!c.ring.chunkIn(c)||d>GT_CFG.keep3D||!GT.on){gtDrop3D(c);if(GT.on&&c.ring.chunkIn(c)&&c.state==='done')GT.buildQ.push(c);continue;}
    const u=c.obj.userData.riseU;if(u.value<1){c.obj.userData.t=Math.min(1,(c.obj.userData.t||0)+dt/1.15);u.value=1-Math.pow(1-c.obj.userData.t,3);}
    c.obj.visible=want3D;
    for(const o of c.obj.children){if(o.userData.ink)o.visible=CEL.mode===0&&d<1500;
      else if(o.isInstancedMesh&&(o.geometry===GT_GEO.trunk||o.geometry===GT_GEO.bush))o.visible=d<1000;}
  }
  // ---- grass
  const grassOn=GT.on&&CEL.mode<2&&agl<GT_CFG.grassAGL&&GT_NEAR.chunks.size>0;gtGrass.visible=grassOn;
  if(grassOn){const f=fwd(me);gtTmp.set(f.x,0,f.z).normalize();const R0=GT_GRASS_U.range.value,cx=camera.position.x+gtTmp.x*R0*.45,cz=camera.position.z+gtTmp.z*R0*.45;
    GT_GRASS_U.gCenter.value.set(Math.round(cx/GT_GRASS_S)*GT_GRASS_S,Math.round(cz/GT_GRASS_S)*GT_GRASS_S);}
  // ---- old cone trees: patch materials once, hide them inside the near ring while 3D is live
  if(!gtOldTrees){const t=scene.children.find(o=>o.isInstancedMesh&&!o.name.startsWith('GT'));
    if(t){gtOldTrees=t;t.userData.photoMat=t.material;t.userData.toonMat=new T.MeshToonMaterial({color:t.material.color,gradientMap:CEL_GRAD});
      for(const m of [t.userData.photoMat,t.userData.toonMat]){m.onBeforeCompile=gtHideOBC;m.customProgramCacheKey=()=>'gtHide'+m.type;m.needsUpdate=true;}celApply();}}
  if(want3D&&GT.live.size){const b=GT_NEAR.uBounds.value,i=60;GT_HIDE.value.set(b.x+i,b.y+i,b.z-i,b.w-i);}else GT_HIDE.value.set(1e7,1e7,1e7,1e7);
  // ---- ink on jets
  for(const a of [me,...peers.values(),...bots.values()]){if(!a.mesh.userData.celInks)celInk(a.mesh);for(const k of a.mesh.userData.celInks)k.visible=CEL.mode===0;}
  // ---- status
  if(now>celStatusAt){celStatusAt=now+500;
    const cnt=r=>{let ok=0;for(let j=0;j<r.grid;j++)for(let i=0;i<r.grid;i++)if(r.cache.get(r.key(r.x0+i,r.y0+j))?.state==='ok')ok++;return ok;};
    const chunksDone=r=>{let n=0;for(const c of r.chunks.values())if(c.state==='done'&&r.chunkIn(c))n++;return n;};
    const sd=gtSunDom();
    hdStat.textContent=CEL.mode===2?'Original photo terrain':GT_NEAR.blocked?'HD imagery blocked by this host (CORS/CSP) · base imagery only':
      `z${GT_NEAR.z} ${cnt(GT_NEAR)}/64 · z${GT_FAR.z} ${cnt(GT_FAR)}/64 · analysed ${chunksDone(GT_NEAR)}+${chunksDone(GT_FAR)}/32`+
      (GT.on?`${OSM.on?` · © OpenStreetMap ${OSM.roads} roads/${OSM.bldgs} footprints${OSM.fails?' ('+OSM.fails+' fails)':''}`:''} · 🏠 ${GT.buildings} · 🌳 ${GT.trees} · sun shadows ${sd<0?'…':GT_ARROWS[sd]} · ${GT.msAvg|0} ms/chunk${GT.pool.length?'':' (main thread)'}${GT.errors?' · ⚠ '+GT.lastErr:''}`:' · 3D off');}
}
const _celRender=renderer.render.bind(renderer);
renderer.render=(s,c)=>{celTick();_celRender(s,c);};
window.SKY_CEL={GT,GT_NEAR,GT_FAR,CEL,CEL_U,gtAnalyze,OSM,me};
// ============================ end Sky Chase 8.3 ground-truth patch ============================
