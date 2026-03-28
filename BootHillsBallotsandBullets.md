I want to create an authentic feeling of a simplified game based on Boot Hill - Ballots and Bullets "Election Day".  

Lets build a full map of Promise City.   

For threeJS and interfaces 

I want to do something similar to open world on my rollercoaster example.  
I want to include mp3 and screen cap to mp4 from my Video Looper example and I want to include gesture recognition and movement of face eyes, head, hands, and focus from my Mediapipe example in order to play with video inputs.   
Here are the three assets I want to use:

MP3 upload/play alongside MP4 recording from screen capture of video game playing in 3d:
https://allaiinc.org/Smart_Audio-Video_Looper_Playlist_Crop_Photo_Snap.html

MediaPipe body and facial gesture recognition:
https://allaiinc.org/Mediapipe-SOMA-Mirror.html

Mediapipe and moving interactions:
https://allaiinc.org/SubMediaPipe8-Claude.html

Mediapipe on Large continuous open world: 
https://allaiinc.org/Submarine-Mediapipe-7-Claude.html

OVoxels:
https://allaiinc.org/Aarons-OVoxel-Lab.html

TSL and Water/Glass/Pipes and Coasters:
https://allaiinc.org/ThreeJS-TSL-Water-Coaster.html

Advanced 3D Open World:
https://allaiinc.org/VoidDrift7.html




# Version 2.0:

<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>PROMISE CITY — Ballots & Bullets</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rye&family=IM+Fell+English:ital@0;1&family=Special+Elite&display=swap');
:root{--dust:#c4a76c;--wood:#8b5e3c;--leather:#6b3a2a;--parchment:#f5e6c8;--blood:#8b1a1a;--gold:#daa520;--ink:#1a0e04;--sage:#4a6741;--copper:#b87333}
*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;height:100%;overflow:hidden;background:#000;font-family:'IM Fell English',serif}
canvas#gc{width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:1}
#ts{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background:radial-gradient(ellipse at center,#2a1a08,#0a0400);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:opacity 1.5s}
#ts.h{opacity:0;pointer-events:none}
#ts h1{font-family:'Rye',serif;font-size:clamp(2.5rem,7vw,5.5rem);color:var(--gold);text-shadow:0 0 30px rgba(218,165,32,.5),0 4px 8px rgba(0,0,0,.8);letter-spacing:.08em;animation:fl 4s infinite alternate}
#ts h2{font-family:'Special Elite',monospace;font-size:clamp(1rem,2.5vw,1.8rem);color:var(--parchment);opacity:.8;margin-top:.5em;letter-spacing:.15em}
#ts .yr{font-family:'Rye',serif;font-size:1.1rem;color:var(--copper);margin-top:.5em;letter-spacing:.3em}
#ts .sub{font-family:'IM Fell English',serif;font-size:clamp(.8rem,1.4vw,1rem);color:var(--dust);opacity:.6;margin-top:1.5em;font-style:italic;max-width:560px;text-align:center;line-height:1.5}
#ts .sc{margin-top:1.2em;font-family:'Special Elite',monospace;font-size:.75rem;color:var(--copper);line-height:1.9;text-align:center}
#ts .go{margin-top:2em;font-family:'Special Elite',monospace;color:var(--gold);font-size:1rem;animation:pu 2s infinite;letter-spacing:.1em}
@keyframes fl{0%,90%,100%{opacity:1}95%{opacity:.85}}@keyframes pu{0%,100%{opacity:.4}50%{opacity:1}}
#hud{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;pointer-events:none;display:none}#hud.on{display:block}
.hp{background:linear-gradient(135deg,rgba(26,14,4,.92),rgba(90,58,30,.85));border:1px solid rgba(218,165,32,.3);border-radius:6px;padding:8px 12px;color:var(--parchment);font-family:'Special Elite',monospace;font-size:.78rem;backdrop-filter:blur(6px);box-shadow:0 4px 20px rgba(0,0,0,.6)}
#ht{display:flex;justify-content:space-between;align-items:flex-start;padding:10px 14px;pointer-events:none}#ht>*{pointer-events:auto}
#pi{min-width:200px}.pn{font-family:'Rye',serif;font-size:.95rem;color:var(--gold)}.pf{font-size:.65rem;color:var(--copper);margin-top:2px}
.ps{display:flex;gap:10px;margin-top:5px}.ps div{text-align:center}.ps b{font-size:1rem;color:var(--gold);display:block}.ps span{font-size:.5rem;opacity:.7}
#sp{text-align:center;min-width:210px}#sp .t{font-family:'Rye',serif;font-size:.8rem;color:var(--gold)}
#sp .sn{font-size:.85rem;color:#fff;margin-top:3px}#sp .sd{font-size:.6rem;color:var(--copper);margin-top:2px}
.fb{margin-top:6px}.fb div{display:flex;align-items:center;gap:5px;margin:2px 0;font-size:.65rem}
.fb .bg{flex:1;height:7px;background:rgba(0,0,0,.5);border-radius:4px;overflow:hidden}.fb .fi{height:100%;border-radius:4px;transition:width .5s}
.fb .law .fi{background:linear-gradient(90deg,var(--gold),#e8c84a)}.fb .cow .fi{background:linear-gradient(90deg,var(--blood),#c42828)}
#mm{width:150px;height:150px;border:2px solid rgba(218,165,32,.4);border-radius:6px;overflow:hidden;background:rgba(26,14,4,.9)}
#mmc{width:100%;height:100%}
#wh{position:absolute;bottom:14px;right:14px;display:flex;gap:7px;pointer-events:auto;z-index:15}
.ws{width:66px;height:66px;border:2px solid rgba(218,165,32,.3);border-radius:7px;background:rgba(26,14,4,.85);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;backdrop-filter:blur(6px)}
.ws.on{border-color:var(--gold);background:rgba(218,165,32,.15);box-shadow:0 0 12px rgba(218,165,32,.3)}.ws.lk{opacity:.3;cursor:not-allowed}
.ws .wi{font-size:1.7rem}.ws .wn{font-size:.5rem;color:var(--parchment);font-family:'Special Elite',monospace;margin-top:1px}
.ws .wk{font-size:.45rem;color:var(--copper)}.ws .wa{font-size:.55rem;color:var(--gold);font-family:'Special Elite',monospace}
#ch{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:22px;height:22px;pointer-events:none;z-index:12;opacity:.5}
#ch::before,#ch::after{content:'';position:absolute;background:var(--gold)}#ch::before{width:2px;height:100%;left:50%;transform:translateX(-50%)}#ch::after{height:2px;width:100%;top:50%;transform:translateY(-50%)}
#cp{position:absolute;top:50%;right:14px;transform:translateY(-50%);font-family:'Rye',serif;font-size:1.4rem;color:var(--gold);text-shadow:0 2px 8px rgba(0,0,0,.8);pointer-events:none;opacity:.6}
#lb{position:absolute;bottom:110px;left:50%;transform:translateX(-50%);font-family:'Rye',serif;font-size:1.1rem;color:var(--gold);text-shadow:0 2px 10px rgba(0,0,0,.9);background:linear-gradient(135deg,rgba(26,14,4,.85),rgba(90,58,30,.7));border:1px solid rgba(218,165,32,.3);border-radius:6px;padding:7px 22px;opacity:0;transition:opacity .5s;pointer-events:none;white-space:nowrap}
#lb.vis{opacity:1}
#ctrl{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-family:'Special Elite',monospace;font-size:.6rem;color:var(--parchment);opacity:.4;pointer-events:none;text-align:center;max-width:580px}
#do{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center}
#do.on{display:flex;pointer-events:auto}
#db{max-width:500px;width:90%;background:linear-gradient(135deg,#1a0e04,#3a2010);border:2px solid var(--gold);border-radius:10px;padding:22px;color:var(--parchment);box-shadow:0 8px 40px rgba(0,0,0,.8)}
.dn{font-family:'Rye',serif;color:var(--gold);font-size:1rem}.dr{font-size:.65rem;color:var(--copper);font-family:'Special Elite',monospace}
.dt{margin-top:10px;font-size:.88rem;line-height:1.5}.dc{margin-top:14px;display:flex;flex-direction:column;gap:5px}
.dch{background:rgba(218,165,32,.1);border:1px solid rgba(218,165,32,.3);color:var(--parchment);padding:7px 11px;border-radius:4px;cursor:pointer;font-family:'IM Fell English',serif;font-size:.82rem;transition:all .2s;text-align:left}
.dch:hover{background:rgba(218,165,32,.25);border-color:var(--gold)}
#mp{position:absolute;top:50%;left:14px;transform:translateY(-50%);z-index:20;display:none;flex-direction:column;gap:7px}
#mp.on{display:flex;pointer-events:auto}
.mb{width:46px;height:46px;border-radius:50%;border:2px solid rgba(218,165,32,.4);background:rgba(26,14,4,.9);color:var(--gold);cursor:pointer;font-size:1.2rem;display:flex;align-items:center;justify-content:center;transition:all .2s;backdrop-filter:blur(6px);position:relative}
.mb:hover{background:rgba(218,165,32,.2);border-color:var(--gold);transform:scale(1.1)}
.mb.rec{border-color:var(--blood);animation:rp 1s infinite}
.mb .ml{position:absolute;left:54px;white-space:nowrap;font-family:'Special Elite',monospace;font-size:.6rem;color:var(--parchment);opacity:0;transition:opacity .2s;pointer-events:none}
.mb:hover .ml{opacity:1}
@keyframes rp{0%,100%{box-shadow:0 0 0 0 rgba(139,26,26,.4)}50%{box-shadow:0 0 0 8px rgba(139,26,26,0)}}
#go{position:absolute;bottom:14px;right:100px;z-index:20;display:none}#go.on{display:block;pointer-events:auto}
#gcam{width:170px;height:128px;border:2px solid rgba(218,165,32,.3);border-radius:7px;background:#000;object-fit:cover;box-shadow:0 4px 16px rgba(0,0,0,.6)}
#gi{font-family:'Special Elite',monospace;font-size:.55rem;color:var(--copper);text-align:center;margin-top:2px}
#fmo{position:absolute;top:0;left:0;width:100%;height:100%;z-index:90;background:rgba(10,4,0,.93);display:none;flex-direction:column;align-items:center;justify-content:center}
#fmo.on{display:flex;pointer-events:auto}
#fmt{font-family:'Rye',serif;font-size:1.4rem;color:var(--gold);letter-spacing:.1em;margin-bottom:10px}
#fmh{font-family:'Special Elite',monospace;font-size:.7rem;color:var(--copper);margin-top:10px}
#fmc{border:2px solid rgba(218,165,32,.3);border-radius:8px}
#nt{position:absolute;top:75px;left:50%;transform:translateX(-50%);font-family:'Special Elite',monospace;font-size:.82rem;color:var(--gold);background:rgba(26,14,4,.9);border:1px solid rgba(218,165,32,.3);border-radius:6px;padding:7px 18px;opacity:0;transition:opacity .4s;pointer-events:none;z-index:30;text-align:center;max-width:480px}
#nt.vis{opacity:1}
#el{position:absolute;bottom:48px;left:14px;width:320px;max-height:170px;overflow-y:auto;z-index:15;display:none}
#el.on{display:block;pointer-events:auto}#el::-webkit-scrollbar{width:3px}#el::-webkit-scrollbar-thumb{background:rgba(218,165,32,.3);border-radius:2px}
.le{font-family:'Special Elite',monospace;font-size:.6rem;color:var(--parchment);opacity:.7;padding:1px 0;border-bottom:1px solid rgba(218,165,32,.06)}.le.im{color:var(--gold);opacity:1}
canvas#av{position:absolute;bottom:0;left:0;width:100%;height:34px;z-index:5;pointer-events:none;opacity:.22}
#sg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:200;background:rgba(10,4,0,.95);display:none;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}
#sg.on{display:flex}
#sg h2{font-family:'Rye',serif;font-size:clamp(1.4rem,4vw,2.8rem);color:var(--gold);text-shadow:0 0 20px rgba(218,165,32,.4)}
#sg .ss{font-family:'Special Elite',monospace;font-size:1rem;color:var(--copper);margin-top:.5em;letter-spacing:.1em}
#sg .sd{font-family:'IM Fell English',serif;font-size:.88rem;color:var(--parchment);margin-top:1.2em;max-width:480px;text-align:center;line-height:1.6;opacity:.8}
#sg .sw{margin-top:1.2em;font-family:'Special Elite',monospace;font-size:.78rem;color:var(--dust);line-height:1.8}
#sg .sp{margin-top:1.8em;font-family:'Special Elite',monospace;color:var(--gold);animation:pu 2s infinite}
</style></head><body>
<div id="ts"><h1>PROMISE CITY</h1><h2>BALLOTS &amp; BULLETS</h2>
<div class="yr">— COCHISE COUNTY · ARIZONA TERRITORY · 1882 —</div>
<div class="sub">Two factions vie for control. Walk the dusty streets. Choose your side. Survive five scenarios — from the Trail Dust Saloon to a moonlit duel to the death.</div>
<div class="sc">I — HOLLISTER'S LAW · Trail Dust Saloon<br>II — HANG 'EM HIGH · The Jailhouse<br>III — LONG BRANCH SALOON · Cowboy Faction<br>IV — FLASHMAN'S HONOR · Law &amp; Order Campaign<br>V — DARK OF THE MOON · Fight to the Death</div>
<div class="go">[ CLICK TO ENTER PROMISE CITY ]</div></div>
<canvas id="gc"></canvas><canvas id="av"></canvas>
<div id="hud"><div id="ht">
<div id="pi" class="hp"><div class="pn" id="pn">The Stranger</div><div class="pf" id="pf">UNAFFILIATED</div>
<div class="ps"><div><b id="vg">72</b><span>GUN</span></div><div><b id="vt">40</b><span>THROW</span></div><div><b id="vs">12</b><span>STR</span></div><div><b id="vp">8</b><span>SPD</span></div><div><b id="vb">14</b><span>BRAV</span></div><div><b id="vc">$50</b><span>CASH</span></div></div></div>
<div id="sp" class="hp"><div class="t">ELECTION DAY</div><div class="sn" id="sn">I — HOLLISTER'S LAW</div><div class="sd" id="sd">Trail Dust Saloon</div>
<div class="fb"><div class="law"><span>⚖️L&amp;O</span><div class="bg"><div class="fi" id="lb1" style="width:50%"></div></div><span id="lp1">50%</span></div>
<div class="cow"><span>🤠COW</span><div class="bg"><div class="fi" id="cb1" style="width:50%"></div></div><span id="cp1">50%</span></div></div></div>
<div id="mm"><canvas id="mmc" width="150" height="150"></canvas></div></div>
<div id="ch"></div><div id="cp">N</div><div id="lb"></div><div id="wh"></div>
<div id="ctrl">WASD — Move · Q/E — Turn Left/Right · F — Interact · M — Map · TAB — Media · G — Gesture · 1/2/3 — Weapons · SHIFT — Sprint · Click — Attack</div></div>
<div id="do"><div id="db"><div class="dn" id="dn"></div><div class="dr" id="drr"></div><div class="dt" id="dtt"></div><div class="dc" id="dcc"></div></div></div>
<div id="mp"><button class="mb" id="bmp3" title="MP3 Audio">🎵<span class="ml">MP3 Audio</span></button><button class="mb" id="bmp4" title="MP4 Record">📹<span class="ml">MP4 Record</span></button><button class="mb" id="bsnp" title="Screenshot">📷<span class="ml">Screenshot</span></button><button class="mb" id="bmic" title="Mic">🎤<span class="ml">Mic Input</span></button></div>
<div id="go"><video id="gcam" autoplay muted playsinline></video><div id="gi">GESTURE: idle</div></div>
<div id="fmo"><div id="fmt">PROMISE CITY — 1882</div><canvas id="fmc" width="700" height="500"></canvas><div id="fmh">Press M or ESC to close · Gold=Law&Order · Red=Cowboy · ★=Scenario · Green=You</div></div>
<div id="sg"><h2 id="sgt"></h2><div class="ss" id="sgs"></div><div class="sd" id="sgd"></div><div class="sw" id="sgw"></div><div class="sp">[ CLICK TO BEGIN ]</div></div>
<div id="nt"></div><div id="el"></div>
<script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/"}}</script>
<script type="module">
import*as THREE from'three';
const G={on:0,pau:0,dlg:0,map:0,med:0,gest:0,rec:0,sc:0,scT:new Set(),law:50,cow:50,fac:null,rep:0,$:50,gun:72,thr:40,str:12,spd:8,brv:14,w:0,ammo:6,mx:6,vis:new Set(),ev:[],nb:null,nn:null};
const SC=[
{id:'hollisters',t:"I — HOLLISTER'S LAW",s:'Trail Dust Saloon',b:'hollisters',d:"Ride into Promise City and belly up to the bar at Hollister's Trail Dust Saloon. A stranger's first drink is free — but the conversation may cost you dearly.",w:"🔪 Knife — close quarters only",u:0},
{id:'hang_em',t:"II — HANG 'EM HIGH",s:'The Jailhouse',b:'jail',d:"A prisoner's been taken. Marshal Chambers needs deputies — or someone needs to break a friend loose. Which side of the bars will you stand on?",w:"🔪 Knife · 🥢 Dual Sticks unlocked",u:1},
{id:'long_branch',t:"III — LONG BRANCH SALOON",s:'Cowboy Faction HQ',b:'long_branch',d:"The Cowboys gather at the Long Branch. Whiskey flows, plans are hatched. Earn Eagle-Eye Douglas's trust — or betray it.",w:"🔪 Knife · 🥢 Dual Sticks · 🔫 Dual Pistols (6 rounds)",u:2},
{id:'flashmans',t:"IV — FLASHMAN'S HONOR",s:'Law & Order Campaign',b:'flashmans',d:"Law & Order holds a rally. Speeches, endorsements, backroom deals. Every vote counts, every dirty trick is on the table.",w:"All weapons · Ammunition scarce"},
{id:'dark_moon',t:"V — DARK OF THE MOON",s:'Two-Sided Fight to the Death',b:'boot_hill',d:"Election Day has come and gone. The losing side won't accept it. Under a moonless sky near Boot Hill, two factions meet. Only one walks away.",w:"All weapons · No quarter · END OF GAME"}];
const B=[
{id:'great_western',n:'Great Western Boarding House',t:'b',x:-60,z:-12,w:14,h:10,d:10,c:0xa0845c,f:'law',ds:'Finest rooms. $2/night.',s:2},
{id:'bank',n:'First National Bank',t:'b',x:-42,z:-12,w:10,h:12,d:10,c:0x8a7a6a,f:'law',ds:'Solid brick vault.',s:2},
{id:'newspaper',n:'Promise City Herald',t:'sh',x:-28,z:-12,w:8,h:8,d:8,c:0x9a8a6a,f:'law',ds:'The press prints truth — for a price.',s:1},
{id:'assay',n:'County Assay Office',t:'g',x:-16,z:-12,w:10,h:8,d:8,c:0x7a7a7a,f:null,ds:'Have your ore weighed.',s:1},
{id:'general',n:"McAllister's General Store",t:'sh',x:-2,z:-12,w:12,h:9,d:10,c:0xa08050,f:'law',ds:'Everything west of the Pecos.',s:1},
{id:'gunsmith',n:"Sweeney's Arms & Ammo",t:'sh',x:14,z:-12,w:8,h:8,d:8,c:0x6a5a4a,f:null,ds:'🔫 RELOAD HERE. Finest Colts.',s:1},
{id:'barber',n:'Barber & Dentist',t:'sv',x:26,z:-12,w:7,h:7,d:7,c:0xb09070,f:null,ds:'All equally painful.',s:1},
{id:'hotel',n:'Cosmopolitan Hotel',t:'h',x:40,z:-12,w:14,h:12,d:10,c:0x9a7a5a,f:'law',ds:'Glass windows. Political meetings.',s:2},
{id:'telegraph',n:'Western Union Telegraph',t:'sv',x:58,z:-12,w:8,h:8,d:8,c:0x8a8a6a,f:null,ds:'25¢/word anywhere.',s:1},
{id:'hollisters',n:"Hollister's Trail Dust Saloon",t:'sa',x:-58,z:12,w:16,h:10,d:12,c:0x7a3a2a,f:null,ds:"★ SCENARIO I",sc:0,s:2},
{id:'oriental',n:'The Oriental Saloon',t:'sa',x:-38,z:12,w:12,h:9,d:10,c:0x8a4a3a,f:'cowboy',ds:'Pig-Eye holds court.',s:1},
{id:'livery',n:'O.K. Corral & Livery',t:'li',x:-20,z:12,w:16,h:8,d:14,c:0x6a5030,f:null,ds:'Board your horse. $1/day.',s:1},
{id:'jail',n:"Marshal's Office & Jail",t:'ja',x:0,z:14,w:11,h:9,d:10,c:0x6a6a6a,f:'law',ds:'★ SCENARIO II — Shotgun George.',sc:1,s:1},
{id:'doc',n:"Dr. Waverly's Practice",t:'dc',x:14,z:12,w:8,h:8,d:8,c:0xb0a080,f:'law',ds:'Patches what bullets tear.',s:1},
{id:'undertaker',n:"Prospero's Undertaking",t:'sv',x:26,z:12,w:8,h:8,d:8,c:0x3a3a3a,f:null,ds:'Pine boxes $5. Oak $20.',s:1},
{id:'land',n:'Cochise County Land Office',t:'g',x:40,z:12,w:10,h:9,d:9,c:0x8a7a5a,f:'law',ds:'Mining claims and deeds.',s:1},
{id:'freight',n:'Butterfield Stage',t:'sv',x:56,z:12,w:14,h:8,d:12,c:0x7a6a4a,f:null,ds:'Tombstone: Tue & Fri.',s:1},
{id:'church',n:'First Presbyterian',t:'ch',x:30,z:-38,w:10,h:14,d:16,c:0xd0c8b0,f:'law',ds:'Rev. Whitfield presides.',s:1},
{id:'st_ant',n:"St. Anthony's Catholic",t:'ch',x:-50,z:42,w:10,h:14,d:14,c:0xc8b898,f:null,ds:'Father Esteban ministers.',s:1},
{id:'school',n:'Promise City School',t:'ci',x:50,z:-38,w:12,h:8,d:10,c:0xb8a080,f:'law',ds:'23 students.',s:1},
{id:'long_branch',n:'Long Branch Saloon',t:'sa',x:-30,z:38,w:16,h:11,d:12,c:0x8b1a1a,f:'cowboy',ds:'★ SCENARIO III — Cowboy HQ.',sc:2,s:2},
{id:'flashmans',n:"Flashman's Honor",t:'ha',x:45,z:38,w:14,h:10,d:12,c:0xc8a840,f:'law',ds:"★ SCENARIO IV — L&O Campaign.",sc:3,s:2},
{id:'silver',n:'Silverbell Mining Co.',t:'mi',x:72,z:30,w:16,h:10,d:14,c:0x5a5a5a,f:'cowboy',ds:'Miners vote Cowboy.',s:1},
{id:'wong',n:"Wong's Laundry",t:'sv',x:-32,z:55,w:8,h:7,d:8,c:0xa09070,f:null,ds:'Wong hears everything.',s:1},
{id:'brewery',n:'Haas Brothers Brewery',t:'in',x:-65,z:38,w:14,h:9,d:12,c:0x6a4a2a,f:'cowboy',ds:'Supplies every saloon.',s:1},
{id:'smith',n:"Diego's Smithy",t:'in',x:-45,z:55,w:10,h:8,d:10,c:0x4a3a2a,f:null,ds:'Horseshoes & manacles.',s:1},
{id:'birdcage',n:'Birdcage Dance Hall',t:'sa',x:20,z:38,w:14,h:10,d:12,c:0x8a3a4a,f:'cowboy',ds:'Private boxes upstairs.',s:2},
{id:'lumber',n:'Arizona Lumber Yard',t:'in',x:68,z:-35,w:16,h:6,d:16,c:0x7a6a40,f:null,ds:'Dragoon Mountains pine.',s:1},
{id:'bath',n:'Turkish Bath House',t:'sv',x:-15,z:55,w:8,h:7,d:8,c:0xb8a888,f:null,ds:'Hot baths 50¢.',s:1},
{id:'boot_hill',n:'Boot Hill Cemetery',t:'cem',x:82,z:-52,w:22,h:1,d:22,c:0x5a6a4a,f:null,ds:'★ SCENARIO V — Final resting place.',sc:4,s:0},
{id:'tower',n:'Water Tower',t:'lm',x:0,z:-42,w:4,h:18,d:4,c:0x7a7a7a,f:null,ds:'Strategic vantage.',s:0},
{id:'mayor',n:'Whitfield Residence',t:'re',x:48,z:-52,w:10,h:9,d:10,c:0xb8a070,f:'law',ds:'L&O HQ.',s:2},
{id:'ranch',n:'Douglas Ranch Office',t:'re',x:-72,z:50,w:12,h:8,d:10,c:0x6a5a3a,f:'cowboy',ds:'Cowboy HQ.',s:1}];
const NP=[
{id:'ch',nm:'"Shotgun" George Chambers',rl:'Town Marshal',fc:'law',bl:'jail',dl:{t:'Stranger, I keep the peace. Cause trouble and my jail has room.',ch:[
{l:'I\'m here to help keep order.',e:()=>{G.rep+=5;G.brv++;ae('Chambers nods. +5 REP +1 BRAV',1)}},{l:'Just passing through.',e:()=>ae('Chambers eyes you.')},{l:'Work for a fast gun?',e:()=>{G.$+=10;ae('$10 deputy offer.',1)}}]}},
{id:'wh',nm:'Rev. J. Whitfield',rl:'L&O Mayoral Candidate',fc:'law',bl:'flashmans',dl:{t:'Promise City needs moral leadership. Stand with Law & Order.',ch:[
{l:'I\'ll support Law & Order.',e:()=>{G.fac='law';G.law+=5;ae('⚖️ Joined LAW & ORDER!',1)}},{l:'Need both sides.',e:()=>ae('Whitfield frowns.')},{l:'Sounds like tyranny.',e:()=>{G.rep-=3;ae('Whitfield prays for you.')}}]}},
{id:'ee',nm:'"Eagle-Eye" Douglas',rl:'Cowboy Boss',fc:'cowboy',bl:'long_branch',dl:{t:'*spits* Mine workers built this town. Law & Order wants to tax us dead. Want real work?',ch:[
{l:'I\'ll ride with Cowboys.',e:()=>{G.fac='cowboy';G.cow+=5;ae('🤠 Joined COWBOYS!',1)}},{l:'What kind of work?',e:()=>{G.$+=15;ae('$15 slides across the bar.',1)}},{l:'Don\'t work for outlaws.',e:()=>{G.rep+=3;G.cow-=2;ae('Hand on his Colt.',1)}}]}},
{id:'dw',nm:'Dr. Waverly',rl:'Town Doctor',fc:'law',bl:'doc',dl:{t:'New face! I patch what bullets tear apart. Running for council too.',ch:[
{l:'Patch me up, Doc.',e:()=>{G.str=Math.min(20,G.str+3);ae('+3 STR',1)}},{l:'Political situation?',e:()=>ae('Doc shares intel.',1)},{l:'Who to watch out for?',e:()=>ae('"The Douglas Brothers."',1)}]}},
{id:'ka',nm:'"Faro" Kate',rl:"Hollister's Dealer",fc:null,bl:'hollisters',dl:{t:"Welcome stranger. First drink's free. Honest faro, strong whiskey.",ch:[
{l:'Deal me in.',e:()=>{const w=Math.random()>.45;G.$+=w?25:-15;ae(w?'Won $25! 🎰':'Lost $15.',1)}},{l:'Who runs this town?',e:()=>ae('"Money runs it."',1)},{l:'Nice place.',e:()=>{G.rep++;ae('Kate pours another.')}}]}},
{id:'pe',nm:'"Pig-Eye" Douglas',rl:'Enforcer',fc:'cowboy',bl:'oriental',dl:{t:'*glares* Cowboy territory. Remember that.',ch:[
{l:'Easy. Just a drink.',e:()=>ae('Pig-Eye grunts.')},{l:"Don't scare easy.",e:()=>{G.brv+=2;ae('+2 BRAV',1)}},{l:"Cowboys' days are numbered.",e:()=>{G.rep+=3;G.cow-=2;ae('⚠️ Reaches for gun!',1)}}]}},
{id:'fe',nm:'Father Esteban',rl:'Priest',fc:null,bl:'st_ant',dl:{t:'Bienvenido. I pray the election brings peace.',ch:[
{l:'Bless me, Father.',e:()=>{G.brv+=3;ae('🙏 +3 BRAV',1)}},{l:'Influence the vote?',e:()=>ae('Stern look.')},{l:'Peace unlikely.',e:()=>ae('"God have mercy."')}]}},
{id:'wo',nm:'Mr. Wong',rl:'Informant',fc:null,bl:'wong',dl:{t:'Laundry! Two bits. Also... I hear things.',ch:[
{l:'What have you heard?',e:()=>{ae('"Ballot stuffing at dawn."',1);G.law+=2}},{l:'Clean my clothes.',e:()=>{G.$--;ae('Fresh. -$1.')}},{l:'Who troubles you?',e:()=>ae('"Pig-Eye Douglas."',1)}]}}];
const WP=[{n:'Knife',i:'🔪',r:3,dm:15,inf:1},{n:'Dual Sticks',i:'🥢',r:4,dm:20,inf:1},{n:'Dual Pistols',i:'🔫',r:60,dm:45,inf:0}];
// THREE
const cv=document.getElementById('gc'),Re=new THREE.WebGLRenderer({canvas:cv,antialias:1});
Re.setSize(innerWidth,innerHeight);Re.setPixelRatio(Math.min(devicePixelRatio,2));
Re.shadowMap.enabled=1;Re.shadowMap.type=THREE.PCFSoftShadowMap;Re.toneMapping=THREE.ACESFilmicToneMapping;Re.toneMappingExposure=1.1;
const sc=new THREE.Scene();sc.background=new THREE.Color(0x87CEEB);sc.fog=new THREE.FogExp2(0xc8b898,.0025);
const ca=new THREE.PerspectiveCamera(65,innerWidth/innerHeight,.1,500);ca.position.set(0,2.5,40);
sc.add(new THREE.AmbientLight(0xf5e6c8,.4));
const sn=new THREE.DirectionalLight(0xfff0d0,1.8);sn.position.set(50,80,30);sn.castShadow=1;sn.shadow.mapSize.set(2048,2048);
const ss=sn.shadow.camera;ss.near=.5;ss.far=200;ss.left=-100;ss.right=100;ss.top=100;ss.bottom=-100;sn.shadow.bias=-.001;sc.add(sn);sc.add(new THREE.HemisphereLight(0x87CEEB,0x8a7a5a,.5));
// Ground
const gG=new THREE.PlaneGeometry(400,400,80,80),gPa=gG.attributes.position;
for(let i=0;i<gPa.count;i++){const x=gPa.getX(i),z=gPa.getY(i),d2=Math.sqrt(x*x+z*z);let y=0;if(d2>80)y=(d2-80)*.08*(Math.sin(x*.02)*.5+Math.cos(z*.03)*.5+.5)+Math.sin(x*.05+z*.07)*2;gPa.setZ(i,y);}
gG.computeVertexNormals();const gn=new THREE.Mesh(gG,new THREE.MeshStandardMaterial({color:0xc4a06c,roughness:.95}));gn.rotation.x=-Math.PI/2;gn.receiveShadow=1;sc.add(gn);
// Roads
const mkR=(a,b,c,d,w)=>{const dx=c-a,dz=d-b,l=Math.sqrt(dx*dx+dz*dz);const m=new THREE.Mesh(new THREE.PlaneGeometry(l,w),new THREE.MeshStandardMaterial({color:0xa89060,roughness:1}));m.rotation.x=-Math.PI/2;m.position.set((a+c)/2,.02,(b+d)/2);m.rotation.z=-Math.atan2(dz,dx);m.receiveShadow=1;sc.add(m)};
mkR(-95,0,95,0,8);mkR(-50,-65,-50,65,5);mkR(0,-65,0,65,5);mkR(50,-65,50,65,5);mkR(-95,38,95,38,4);mkR(-95,-38,95,-38,4);mkR(-95,55,95,55,3);
const bwM=new THREE.MeshStandardMaterial({color:0x8b7355,roughness:.85});
[[-6],[6]].forEach(([z])=>{const m=new THREE.Mesh(new THREE.BoxGeometry(180,.15,2),bwM);m.position.set(0,.08,z);m.receiveShadow=1;m.castShadow=1;sc.add(m)});
// Buildings
const bMs=[],bMp=new Map();
B.forEach(b=>{const g=new THREE.Group();g.position.set(b.x,0,b.z);const ah=b.s===0?1:b.h;
const bd=new THREE.Mesh(new THREE.BoxGeometry(b.w,ah,b.d),new THREE.MeshStandardMaterial({color:b.c,roughness:.8,metalness:.05}));bd.position.y=ah/2;bd.castShadow=1;bd.receiveShadow=1;g.add(bd);
if(b.s>=1&&b.t!=='cem'&&b.t!=='lm'){
if(b.t==='ch'){const st=new THREE.Mesh(new THREE.ConeGeometry(2,8,4),new THREE.MeshStandardMaterial({color:0xd0c0a0}));st.position.y=ah+4;st.castShadow=1;g.add(st);
const cv2=new THREE.Mesh(new THREE.BoxGeometry(.2,2,.2),new THREE.MeshStandardMaterial({color:0xffd700}));cv2.position.y=ah+9;g.add(cv2);
const ch2=new THREE.Mesh(new THREE.BoxGeometry(1.2,.2,.2),new THREE.MeshStandardMaterial({color:0xffd700}));ch2.position.y=ah+8.5;g.add(ch2);}
else if(['sa','h','ha'].includes(b.t)){const ff=new THREE.Mesh(new THREE.BoxGeometry(b.w+.5,3,.3),new THREE.MeshStandardMaterial({color:new THREE.Color(b.c).multiplyScalar(.85)}));ff.position.set(0,ah+1.5,-b.d/2);ff.castShadow=1;g.add(ff);}
else{const rf=new THREE.Mesh(new THREE.BoxGeometry(b.w+1,.5,b.d+1),new THREE.MeshStandardMaterial({color:0x5a4030}));rf.position.y=ah+.25;rf.castShadow=1;g.add(rf);}
const wm=new THREE.MeshStandardMaterial({color:0x4488aa,roughness:.3,metalness:.5,emissive:0x112233,emissiveIntensity:.2});
const nw=Math.floor(b.w/4);for(let i=0;i<nw;i++){const wx=-b.w/2+2+i*(b.w/nw);for(let f=0;f<b.s;f++){const wy=2+f*4;
const w1=new THREE.Mesh(new THREE.PlaneGeometry(1.2,1.8),wm);w1.position.set(wx,wy,-b.d/2-.01);g.add(w1);
const w2=new THREE.Mesh(new THREE.PlaneGeometry(1.2,1.8),wm);w2.position.set(wx,wy,b.d/2+.01);w2.rotation.y=Math.PI;g.add(w2);}}
const dr=new THREE.Mesh(new THREE.PlaneGeometry(1.5,2.5),new THREE.MeshStandardMaterial({color:0x4a2a1a}));dr.position.set(0,1.25,-b.d/2-.02);g.add(dr);
if(b.t==='sa'){const sm=new THREE.MeshStandardMaterial({color:0x6a3a1a});
const l=new THREE.Mesh(new THREE.PlaneGeometry(.7,1.2),sm);l.position.set(-.4,1.8,-b.d/2-.03);g.add(l);
const r=new THREE.Mesh(new THREE.PlaneGeometry(.7,1.2),sm);r.position.set(.4,1.8,-b.d/2-.03);g.add(r);}}
if(!['cem','lm','re'].includes(b.t)){const sc2=document.createElement('canvas');sc2.width=512;sc2.height=64;const cx=sc2.getContext('2d');cx.fillStyle='#1a0e04';cx.fillRect(0,0,512,64);
cx.fillStyle=b.sc!==undefined?'#ff4444':'#daa520';cx.font='bold 22px serif';cx.textAlign='center';cx.fillText(b.n.substring(0,35),256,40);
const sg2=new THREE.Mesh(new THREE.PlaneGeometry(b.w*.8,1),new THREE.MeshStandardMaterial({map:new THREE.CanvasTexture(sc2),roughness:.6}));sg2.position.set(0,ah+.5,-b.d/2-.1);g.add(sg2);}
if(b.sc!==undefined){const star=new THREE.Mesh(new THREE.OctahedronGeometry(.8,0),new THREE.MeshStandardMaterial({color:0xff4444,emissive:0xff2200,emissiveIntensity:.5,roughness:.3}));star.position.set(0,ah+3,-b.d/2);star.userData.st=1;g.add(star);}
if(b.f){const fc=b.f==='law'?0xdaa520:0x8b1a1a;const pl=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,ah+3),new THREE.MeshStandardMaterial({color:0x8a8a8a}));pl.position.set(b.w/2+.5,(ah+3)/2,0);g.add(pl);
const fl=new THREE.Mesh(new THREE.PlaneGeometry(1.5,1),new THREE.MeshStandardMaterial({color:fc,side:THREE.DoubleSide}));fl.position.set(b.w/2+1.3,ah+2.5,0);g.add(fl);}
if(b.t==='cem')for(let i=0;i<20;i++){const gs=new THREE.Mesh(new THREE.BoxGeometry(.6,1.2,.15),new THREE.MeshStandardMaterial({color:0x8a8a7a}));gs.position.set(-9+Math.random()*18,.6,-9+Math.random()*18);gs.rotation.y=(Math.random()-.5)*.3;gs.castShadow=1;g.add(gs);}
if(b.id==='tower'){const tk=new THREE.Mesh(new THREE.CylinderGeometry(3,3,4,12),new THREE.MeshStandardMaterial({color:0x6a5a4a}));tk.position.y=16;tk.castShadow=1;g.add(tk);
for(let i=0;i<4;i++){const a=(i/4)*Math.PI*2;const lg=new THREE.Mesh(new THREE.CylinderGeometry(.2,.25,14),new THREE.MeshStandardMaterial({color:0x5a5a5a}));lg.position.set(Math.cos(a)*2,7,Math.sin(a)*2);g.add(lg);}}
sc.add(g);bMs.push({g,b});bMp.set(b.id,{g,b})});
// Env: cacti, rocks, mountains, hitching, tumbleweeds, dust
const cm=new THREE.MeshStandardMaterial({color:0x2d5a1e,roughness:.8});
for(let i=0;i<50;i++){const a=Math.random()*Math.PI*2,r=55+Math.random()*100;const g=new THREE.Group();const h=2+Math.random()*1.5;
const tr=new THREE.Mesh(new THREE.CylinderGeometry(.3,.4,3+Math.random()*3,8),cm);tr.position.y=h;tr.castShadow=1;g.add(tr);
if(Math.random()>.3){const arm=new THREE.Mesh(new THREE.CylinderGeometry(.2,.25,2,6),cm);arm.position.set(.8,h+.5,0);arm.rotation.z=-Math.PI/3;g.add(arm);}
g.position.set(Math.cos(a)*r,0,Math.sin(a)*r);sc.add(g);}
for(let i=0;i<35;i++){const rk=new THREE.Mesh(new THREE.DodecahedronGeometry(1+Math.random()*2,0),new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.08,.3,.3+Math.random()*.2),roughness:.95}));
const a=Math.random()*Math.PI*2,r=50+Math.random()*120;rk.position.set(Math.cos(a)*r,.5,Math.sin(a)*r);rk.rotation.set(Math.random(),Math.random(),Math.random());rk.scale.y=.5+Math.random()*.5;rk.castShadow=1;sc.add(rk);}
for(let i=0;i<12;i++){const mt=new THREE.Mesh(new THREE.ConeGeometry(20+Math.random()*30,30+Math.random()*40,6),new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.06,.2,.35+Math.random()*.1)}));
const a=(i/12)*Math.PI*2;mt.position.set(Math.cos(a)*(160+Math.random()*40),0,Math.sin(a)*(160+Math.random()*40));sc.add(mt);}
const hpM=new THREE.MeshStandardMaterial({color:0x5a4030});
[-55,-35,-15,0,15,35,55].forEach(x=>{[-4,4].forEach(z=>{const g=new THREE.Group();
const p1=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,1.2),hpM);p1.position.set(-.8,.6,0);g.add(p1);
const p2=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,1.2),hpM);p2.position.set(.8,.6,0);g.add(p2);
const bar=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,2),hpM);bar.position.y=1.1;bar.rotation.z=Math.PI/2;g.add(bar);
g.position.set(x,0,z);sc.add(g)})});
const tw=[];for(let i=0;i<8;i++){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.4+Math.random()*.3,0),new THREE.MeshStandardMaterial({color:0x9a8a50,wireframe:1}));m.position.set(-100+Math.random()*200,.4,-80+Math.random()*160);m.userData={s:.02+Math.random()*.05,r:.01+Math.random()*.03};sc.add(m);tw.push(m);}
const dN=400,dBG=new THREE.BufferGeometry(),dBP=new Float32Array(dN*3);for(let i=0;i<dN;i++){dBP[i*3]=(Math.random()-.5)*200;dBP[i*3+1]=Math.random()*15;dBP[i*3+2]=(Math.random()-.5)*200;}
dBG.setAttribute('position',new THREE.BufferAttribute(dBP,3));sc.add(new THREE.Points(dBG,new THREE.PointsMaterial({color:0xc4a06c,size:.15,transparent:1,opacity:.3,depthWrite:0})));
// NPCs
const nMs=[];NP.forEach(np=>{const b=B.find(bl=>bl.id===np.bl);if(!b)return;const g=new THREE.Group();
const fc=np.fc==='law'?0x4a6741:np.fc==='cowboy'?0x6b3a2a:0x6a6a6a;
const bd=new THREE.Mesh(new THREE.CylinderGeometry(.3,.35,1.6,8),new THREE.MeshStandardMaterial({color:fc}));bd.position.y=.8;g.add(bd);
const hd=new THREE.Mesh(new THREE.SphereGeometry(.25,8,8),new THREE.MeshStandardMaterial({color:0xd4a878}));hd.position.y=1.85;g.add(hd);
const hb=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.06,12),new THREE.MeshStandardMaterial({color:0x3a2a1a}));hb.position.y=2.1;g.add(hb);
const ht=new THREE.Mesh(new THREE.CylinderGeometry(.25,.3,.4,8),new THREE.MeshStandardMaterial({color:0x3a2a1a}));ht.position.y=2.3;g.add(ht);
const off=3+Math.random()*3,side=Math.random()>.5?1:-1;g.position.set(b.x+side*off,0,b.z-b.d/2-2);sc.add(g);nMs.push({g,np,p:g.position})});
// Weapon HUD
function rWH(){const el=document.getElementById('wh');el.innerHTML='';WP.forEach((w,i)=>{const lk=i===1&&G.sc<1||i===2&&G.sc<2;
const d=document.createElement('div');d.className='ws'+(i===G.w?' on':'')+(lk?' lk':'');d.onclick=()=>sW(i);
d.innerHTML=`<div class="wi">${w.i}</div><div class="wn">${w.n}</div><div class="wk">[${i+1}]</div><div class="wa">${w.inf?'∞':G.ammo+'/'+G.mx}</div>`;el.appendChild(d)});}rWH();
function sW(i){if(i===1&&G.sc<1){sN('🥢 Dual Sticks unlock in Scenario II');return}if(i===2&&G.sc<2){sN('🔫 Dual Pistols unlock in Scenario III');return}G.w=i;rWH();}window.sW=sW;
// Player
const P={p:new THREE.Vector3(0,2.5,40),y:0,pi:0};const K={};
document.addEventListener('keydown',e=>{K[e.code]=1;
if(e.code==='KeyF')tI();if(e.code==='Tab'){e.preventDefault();tMed()}if(e.code==='KeyM'){e.preventDefault();tMap()}if(e.code==='KeyG')tG();
if(e.code==='Escape'){cD();cMap()}if(e.code==='Digit1')sW(0);if(e.code==='Digit2')sW(1);if(e.code==='Digit3')sW(2)});
document.addEventListener('keyup',e=>{K[e.code]=0});
let pl=0;cv.addEventListener('click',()=>{if(G.on&&!G.dlg&&!G.map)cv.requestPointerLock()});
document.addEventListener('pointerlockchange',()=>{pl=document.pointerLockElement===cv});
document.addEventListener('mousemove',e=>{if(!pl||G.dlg||G.map)return;P.y-=e.movementX*.002;P.pi-=e.movementY*.002;P.pi=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,P.pi))});
cv.addEventListener('mousedown',e=>{if(!pl||G.dlg||G.map)return;if(e.button===0)atk()});
function atk(){const w=WP[G.w];if(G.w===2){if(G.ammo<=0){sN("Empty! Visit Sweeney's to reload.");return}G.ammo--;rWH()}ae(`${w.i} ${w.n} — ${w.dm} dmg`)}
function uP(dt){if(G.dlg||G.pau||G.map)return;const ts=2.5*dt;if(K['KeyQ'])P.y+=ts;if(K['KeyE'])P.y-=ts;
const sp=P.p.moveSpd||(K['ShiftLeft']||K['ShiftRight']?21.6:12);const s=sp*dt;
const fw=new THREE.Vector3(-Math.sin(P.y),0,-Math.cos(P.y)),rt=new THREE.Vector3(Math.cos(P.y),0,-Math.sin(P.y)),mv=new THREE.Vector3();
if(K['KeyW']||K['ArrowUp'])mv.add(fw);if(K['KeyS']||K['ArrowDown'])mv.sub(fw);if(K['KeyA']||K['ArrowLeft'])mv.sub(rt);if(K['KeyD']||K['ArrowRight'])mv.add(rt);
if(mv.length()>0){mv.normalize().multiplyScalar(s);const np=P.p.clone().add(mv);let bl=0;
for(const bm of bMs){const b=bm.b,pd=1.5;if(np.x>b.x-b.w/2-pd&&np.x<b.x+b.w/2+pd&&np.z>b.z-b.d/2-pd&&np.z<b.z+b.d/2+pd){bl=1;break}}if(!bl)P.p.copy(np)}
P.p.y=2.5;ca.position.copy(P.p);const ld=new THREE.Vector3(-Math.sin(P.y)*Math.cos(P.pi),Math.sin(P.pi),-Math.cos(P.y)*Math.cos(P.pi));ca.lookAt(P.p.clone().add(ld));cN()}
// Nearby
const lbE=document.getElementById('lb');let lBI=null;
function cN(){const px=P.p.x,pz=P.p.z;let nb=null,nd=999,nn=null,nnd=999;
for(const bm of bMs){const b=bm.b,dx=px-b.x,dz=pz-b.z,d=Math.sqrt(dx*dx+dz*dz);if(d<b.w/2+6&&d<nd){nd=d;nb=b}}
for(const nm of nMs){const dx=px-nm.p.x,dz=pz-nm.p.z,d=Math.sqrt(dx*dx+dz*dz);if(d<5&&d<nnd){nnd=d;nn=nm.np}}
G.nb=nb;G.nn=nn;
if(nb&&nb.id!==lBI){lBI=nb.id;lbE.textContent=nb.n+(nb.sc!==undefined?' ★':'');lbE.classList.add('vis');
if(!G.vis.has(nb.id)){G.vis.add(nb.id);ae('Discovered: '+nb.n,1)}clearTimeout(lbE._t);lbE._t=setTimeout(()=>lbE.classList.remove('vis'),3000)}else if(!nb)lBI=null;
if(nn){lbE.textContent='[F] '+nn.nm;lbE.classList.add('vis');clearTimeout(lbE._t);lbE._t=setTimeout(()=>lbE.classList.remove('vis'),1500)}
if(nb&&nb.sc!==undefined&&nb.sc===G.sc&&!G.scT.has(G.sc))sSG(G.sc)}
function tI(){if(G.dlg)return;if(G.nn)oD(G.nn);else if(G.nb){if(G.nb.id==='gunsmith'){if(G.ammo<G.mx){const c=Math.max(1,(G.mx-G.ammo)*2);if(G.$>=c){G.$-=c;G.ammo=G.mx;rWH();sN('🔫 Reloaded! -$'+c)}else sN('Not enough cash.')}else sN('Fully loaded.')}else sN(G.nb.ds)}}
function oD(np){if(!np.dl)return;G.dlg=1;document.exitPointerLock();const d=np.dl;
document.getElementById('dn').textContent=np.nm;document.getElementById('drr').textContent=np.rl+' · '+(np.fc?np.fc==='law'?'⚖️ Law & Order':'🤠 Cowboy':'Neutral');
document.getElementById('dtt').textContent=d.t;const ch=document.getElementById('dcc');ch.innerHTML='';
d.ch.forEach(c=>{const btn=document.createElement('button');btn.className='dch';btn.textContent=c.l;btn.onclick=()=>{c.e();cD();uH()};ch.appendChild(btn)});
const cl=document.createElement('button');cl.className='dch';cl.textContent='[Walk away]';cl.onclick=cD;ch.appendChild(cl);document.getElementById('do').classList.add('on')}
function cD(){G.dlg=0;document.getElementById('do').classList.remove('on')}
// Scenarios
function sSG(i){G.scT.add(i);G.pau=1;document.exitPointerLock();const s=SC[i];
document.getElementById('sgt').textContent=s.t;document.getElementById('sgs').textContent=s.s;document.getElementById('sgd').textContent=s.d;document.getElementById('sgw').textContent=s.w;
document.getElementById('sg').classList.add('on')}
document.getElementById('sg').addEventListener('click',()=>{document.getElementById('sg').classList.remove('on');G.pau=0;ae('★ '+SC[G.sc].t+' — BEGIN',1);rWH();uH();
const cs=G.sc;setTimeout(()=>{if(G.sc===cs&&G.sc<4){G.sc++;ae('Next: '+SC[G.sc].t+' — '+SC[G.sc].s,1);uH();rWH()}},20000)});
// Map
function tMap(){G.map=!G.map;document.getElementById('fmo').classList.toggle('on',G.map);if(G.map){document.exitPointerLock();dFM()}}
function cMap(){G.map=0;document.getElementById('fmo').classList.remove('on')}
function dFM(){const c=document.getElementById('fmc'),x=c.getContext('2d'),W=700,H=500;x.fillStyle='#1a0e04';x.fillRect(0,0,W,H);
const ox=W/2,oy=H/2,s=2.8;x.strokeStyle='rgba(168,144,96,.25)';x.lineWidth=s*8;x.beginPath();x.moveTo(ox-95*s,oy);x.lineTo(ox+95*s,oy);x.stroke();
x.lineWidth=s*4;[-50,0,50].forEach(v=>{x.beginPath();x.moveTo(ox+v*s,oy-65*s);x.lineTo(ox+v*s,oy+65*s);x.stroke()});
[38,-38].forEach(v=>{x.beginPath();x.moveTo(ox-95*s,oy+v*s);x.lineTo(ox+95*s,oy+v*s);x.stroke()});
B.forEach(b=>{const bx=ox+b.x*s,bz=oy+b.z*s;x.fillStyle=b.sc!==undefined?'rgba(255,68,68,.8)':b.f==='law'?'rgba(218,165,32,.7)':b.f==='cowboy'?'rgba(139,26,26,.7)':'rgba(106,90,74,.6)';
x.fillRect(bx-b.w*s/2,bz-b.d*s/2,b.w*s,b.d*s);x.fillStyle='#f5e6c8';x.font='7px monospace';x.textAlign='center';x.fillText(b.n.length>20?b.n.substr(0,18)+'..':b.n,bx,bz-b.d*s/2-3)});
x.fillStyle='#0f0';x.beginPath();x.arc(ox+P.p.x*s,oy+P.p.z*s,5,0,Math.PI*2);x.fill();
x.strokeStyle='#0f0';x.lineWidth=2;x.beginPath();x.moveTo(ox+P.p.x*s,oy+P.p.z*s);x.lineTo(ox+(P.p.x-Math.sin(P.y)*5)*s,oy+(P.p.z-Math.cos(P.y)*5)*s);x.stroke();
x.font='11px monospace';x.textAlign='left';const ly=H-60;
[[15,ly,'#daa520','Law & Order'],[15,ly+18,'#8b1a1a','Cowboy'],[15,ly+36,'#ff4444','★ Scenario']].forEach(([a,b,c,t])=>{x.fillStyle=c;x.fillRect(a,b,12,12);x.fillStyle='#f5e6c8';x.fillText(t,a+17,b+10)})}
// Minimap
const mmX=document.getElementById('mmc').getContext('2d');
function dMM(){const x=mmX,w=150,h=150,cx=w/2,cy=h/2,s=.65;x.fillStyle='#2a1a08';x.fillRect(0,0,w,h);
x.strokeStyle='rgba(168,144,96,.2)';x.lineWidth=s*6;x.beginPath();x.moveTo(cx-90*s,cy);x.lineTo(cx+90*s,cy);x.stroke();
B.forEach(b=>{const bx=cx+(b.x-P.p.x)*s,bz=cy+(b.z-P.p.z)*s;if(bx<-10||bx>w+10||bz<-10||bz>h+10)return;
x.fillStyle=b.sc!==undefined?'rgba(255,68,68,.8)':b.f==='law'?'#daa520':b.f==='cowboy'?'#8b1a1a':'#6a5a4a';
x.fillRect(bx-b.w*s/2,bz-b.d*s/2,Math.max(2,b.w*s),Math.max(2,b.d*s))});
nMs.forEach(nm=>{const nx=cx+(nm.p.x-P.p.x)*s,nz=cy+(nm.p.z-P.p.z)*s;if(nx<0||nx>w||nz<0||nz>h)return;
x.fillStyle=nm.np.fc==='law'?'#4a6741':nm.np.fc==='cowboy'?'#c42828':'#aaa';x.beginPath();x.arc(nx,nz,2,0,Math.PI*2);x.fill()});
x.fillStyle='#0f0';x.beginPath();x.arc(cx,cy,3,0,Math.PI*2);x.fill();
x.strokeStyle='#0f0';x.lineWidth=1.5;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx-Math.sin(P.y)*10,cy-Math.cos(P.y)*10);x.stroke()}
// Media TAB
function tMed(){G.med=!G.med;document.getElementById('mp').classList.toggle('on',G.med);document.getElementById('el').classList.toggle('on',G.med)}
let aC,aA,aD;const avC=document.getElementById('av'),avX=avC.getContext('2d');
document.getElementById('bmp3').addEventListener('click',()=>{const ip=document.createElement('input');ip.type='file';ip.accept='.mp3,audio/*';
ip.onchange=async e=>{const f=e.target.files[0];if(!f)return;if(!aC)aC=new AudioContext();const buf=await aC.decodeAudioData(await f.arrayBuffer());
const src=aC.createBufferSource();src.buffer=buf;aA=aC.createAnalyser();aA.fftSize=256;aD=new Uint8Array(aA.frequencyBinCount);
src.connect(aA);aA.connect(aC.destination);src.start();ae('🎵 '+f.name,1)};ip.click()});
let mR,rC=[];document.getElementById('bmp4').addEventListener('click',async()=>{const b=document.getElementById('bmp4');
if(!G.rec){try{const s=cv.captureStream(30);if(aC&&aC.state==='running'){const d=aC.createMediaStreamDestination();aA.connect(d);s.addTrack(d.stream.getAudioTracks()[0])}
mR=new MediaRecorder(s,{mimeType:'video/webm'});rC=[];mR.ondataavailable=e=>{if(e.data.size>0)rC.push(e.data)};
mR.onstop=()=>{const bl=new Blob(rC,{type:'video/webm'});const a=document.createElement('a');a.href=URL.createObjectURL(bl);a.download='promise-city.webm';a.click();ae('📹 MP4 saved!',1)};
mR.start();G.rec=1;b.classList.add('rec');b.textContent='⏹';ae('📹 Recording...',1)}catch(e){ae('Failed: '+e.message)}}
else{mR.stop();G.rec=0;b.classList.remove('rec');b.textContent='📹'}});
document.getElementById('bsnp').addEventListener('click',()=>{Re.render(sc,ca);const a=document.createElement('a');a.href=Re.domElement.toDataURL('image/png');a.download='promise-city.png';a.click();ae('📷 Screenshot!',1)});
document.getElementById('bmic').addEventListener('click',async()=>{try{const s=await navigator.mediaDevices.getUserMedia({audio:1});if(!aC)aC=new AudioContext();
const m=aC.createMediaStreamSource(s);aA=aC.createAnalyser();aA.fftSize=256;aD=new Uint8Array(aA.frequencyBinCount);m.connect(aA);ae('🎤 Mic on!',1)}catch(e){ae('Mic denied.')}});
function dAV(){if(!aA||!aD)return;aA.getByteFrequencyData(aD);const w=avC.width=innerWidth,h=avC.height=34;avX.clearRect(0,0,w,h);
const bw=w/aD.length;for(let i=0;i<aD.length;i++){const bh=(aD[i]/255)*h;avX.fillStyle=`rgba(218,165,32,${aD[i]/255*.6})`;avX.fillRect(i*bw,h-bh,bw-1,bh)}}
// Gesture G
let gS=null;async function tG(){G.gest=!G.gest;document.getElementById('go').classList.toggle('on',G.gest);
if(G.gest&&!gS){try{gS=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:320,height:240}});document.getElementById('gcam').srcObject=gS;ae('👁️ Gesture on!',1);sGD()}
catch(e){ae('Cam denied.');G.gest=0;document.getElementById('go').classList.remove('on')}}else if(!G.gest&&gS){gS.getTracks().forEach(t=>t.stop());gS=null}}
let pF=null;function sGD(){const v=document.getElementById('gcam'),tc=document.createElement('canvas');tc.width=80;tc.height=60;const tx=tc.getContext('2d');
function d(){if(!G.gest)return;tx.drawImage(v,0,0,80,60);const fr=tx.getImageData(0,0,80,60);
if(pF){let m=0,lm=0,rm=0,tm=0;for(let i=0;i<fr.data.length;i+=4){const d=Math.abs(fr.data[i]-pF.data[i])+Math.abs(fr.data[i+1]-pF.data[i+1])+Math.abs(fr.data[i+2]-pF.data[i+2]);
m+=d;const px=(i/4)%80,py=Math.floor((i/4)/80);if(px<30)lm+=d;if(px>50)rm+=d;if(py<25)tm+=d}m/=(80*60);
let g='idle';if(m>15){if(lm>rm*1.5)g='lean-right';else if(rm>lm*1.5)g='lean-left';else if(tm>m*60*.6)g='head-up';else g='moving'}
document.getElementById('gi').textContent='GESTURE: '+g+' | '+m.toFixed(1);
if(g==='lean-left')P.y+=.012;if(g==='lean-right')P.y-=.012;if(g==='head-up')P.pi=Math.min(P.pi+.006,Math.PI/4)}pF=fr;requestAnimationFrame(d)}d()}
// HUD
function uH(){document.getElementById('vg').textContent=G.gun;document.getElementById('vt').textContent=G.thr;document.getElementById('vs').textContent=G.str;
document.getElementById('vp').textContent=G.spd;document.getElementById('vb').textContent=G.brv;document.getElementById('vc').textContent='$'+G.$;
document.getElementById('pf').textContent=G.fac==='law'?'⚖️ LAW & ORDER':G.fac==='cowboy'?'🤠 COWBOY FACTION':'UNAFFILIATED';
const t=G.law+G.cow,lp=Math.round(G.law/t*100),cp=100-lp;
document.getElementById('lb1').style.width=lp+'%';document.getElementById('cb1').style.width=cp+'%';
document.getElementById('lp1').textContent=lp+'%';document.getElementById('cp1').textContent=cp+'%';
if(G.sc<5){document.getElementById('sn').textContent=SC[G.sc].t;document.getElementById('sd').textContent=SC[G.sc].s}
const dg=((P.y*180/Math.PI)%360+360)%360;document.getElementById('cp').textContent=['N','NE','E','SE','S','SW','W','NW'][Math.round(dg/45)%8]}
const ntE=document.getElementById('nt');let nT;function sN(t){ntE.textContent=t;ntE.classList.add('vis');clearTimeout(nT);nT=setTimeout(()=>ntE.classList.remove('vis'),4000)}
const elE=document.getElementById('el');function ae(t,im=0){G.ev.push({t,im});const e=document.createElement('div');e.className='le'+(im?' im':'');e.textContent='» '+t;elE.appendChild(e);elE.scrollTop=elE.scrollHeight;if(im)sN(t)}
// Loop
const ck=new THREE.Clock();let fr=0;
function an(){requestAnimationFrame(an);const dt=Math.min(ck.getDelta(),.05);fr++;
if(!G.on){const t=ck.elapsedTime*.08;ca.position.set(Math.sin(t)*65,20,Math.cos(t)*65);ca.lookAt(0,5,0);Re.render(sc,ca);return}
uP(dt);tw.forEach(t=>{t.position.x+=t.userData.s*2;t.position.z+=Math.sin(fr*.01)*.02;t.rotation.x+=t.userData.r;t.rotation.z+=t.userData.r*.7;if(t.position.x>150)t.position.x=-150});
const dp=dBG.attributes.position;for(let i=0;i<dN;i++){dp.array[i*3]+=.02;dp.array[i*3+1]+=Math.sin(fr*.005+i)*.005;if(dp.array[i*3]>100)dp.array[i*3]=-100}dp.needsUpdate=1;
nMs.forEach((nm,i)=>{nm.g.rotation.y=Math.sin(fr*.003+i*1.7)*.3;nm.g.position.y=Math.sin(fr*.008+i*2.3)*.05});
bMs.forEach(bm=>{bm.g.children.forEach(ch=>{if(ch.userData.st){ch.rotation.y=fr*.02;ch.position.y=bm.b.h+3+Math.sin(fr*.03)*.5}})});
const dp2=(ck.elapsedTime*.004)%1,sa=dp2*Math.PI;sn.position.set(Math.cos(sa)*80,Math.sin(sa)*80+10,30);
const wm=Math.sin(sa);sn.color.setHSL(.1,.3,.8+wm*.2);sc.background.setHSL(.55,.4+wm*.2,.5+wm*.3);
if(fr%30===0){uH();dMM()}dAV();Re.render(sc,ca)}
addEventListener('resize',()=>{ca.aspect=innerWidth/innerHeight;ca.updateProjectionMatrix();Re.setSize(innerWidth,innerHeight)});
document.getElementById('ts').addEventListener('click',()=>{G.on=1;document.getElementById('ts').classList.add('h');document.getElementById('hud').classList.add('on');document.getElementById('el').classList.add('on');
ae('You ride into Promise City, Arizona Territory. 1882.',1);ae('Two factions battle for control. An election looms.',1);
ae('★ Head to Hollister\'s Trail Dust Saloon to begin.',1);ae('WASD move · Q/E turn · F interact · M map · TAB media · G gesture',0);cv.requestPointerLock()});
ae('Promise City awaits...',1);an();
</script></body></html>

