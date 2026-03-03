Can you help make my Skyforge html JS game (open in preview or canvas so we can playtest it with iterations in AI without leaving the model. 
using threeJS the best advanced webgpu demonstration of an educational game to teach the 3D concepts and function names.
advance this game significantly using nothing other than the threeJS modern methods 


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>SKYFORGE: Embodied Intelligence — WebGPU Edition</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;600;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;user-select:none}
body{background:#000;overflow:hidden;font-family:'Exo 2',sans-serif;color:#0ff}
#viewport{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;cursor:crosshair}

/* === EDUCATIONAL OVERLAY === */
#edu-panel{position:fixed;top:340px;left:15px;z-index:20;width:240px;
  background:linear-gradient(135deg,rgba(0,5,15,0.92),rgba(5,0,20,0.88));
  border:1px solid rgba(0,255,255,0.3);border-left:4px solid #0ff;padding:14px;
  border-radius:6px;box-shadow:0 0 30px rgba(0,255,255,0.15);
  max-height:35vh;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#0ff #111;
  transition:all 0.3s;font-size:11px;line-height:1.5}
#edu-panel::-webkit-scrollbar{width:4px}
#edu-panel::-webkit-scrollbar-thumb{background:#0ff;border-radius:2px}
#edu-panel .edu-title{font-family:'Orbitron',sans-serif;color:#f0a;font-size:11px;
  letter-spacing:2px;text-shadow:0 0 8px #f0a}
#edu-panel .panel-toggle{border-color:rgba(0,255,255,0.3);color:#0ff}
#edu-panel .panel-toggle:hover{border-color:#0ff;background:rgba(0,255,255,0.15)}
.edu-entry{padding:6px 8px;margin-bottom:6px;background:rgba(0,255,255,0.05);
  border-left:2px solid #0ff;border-radius:2px;transition:all 0.3s}
.edu-entry:hover{background:rgba(0,255,255,0.12)}
.edu-fn{color:#0f0;font-family:monospace;font-size:10px;font-weight:bold}
.edu-desc{color:#8af;font-size:10px;margin-top:2px}
.edu-entry.highlight{border-left-color:#f0a;background:rgba(255,0,170,0.1);animation:eduPulse 1s}
@keyframes eduPulse{0%,100%{border-left-color:#f0a}50%{border-left-color:#fff}}

/* === DIALOG === */
.dialog-overlay{position:fixed;top:0;left:0;width:100%;height:100%;
  background:rgba(0,0,0,0.85);z-index:150;display:none;align-items:center;
  justify-content:center;backdrop-filter:blur(8px)}
.dialog-overlay.active{display:flex;animation:fadeIn .3s}
.dialog-overlay.dismissing{animation:fadeOut .3s forwards}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeOut{from{opacity:1}to{opacity:0}}
.dialog-box{background:linear-gradient(135deg,#0a0a20,#050510);border:3px solid #0ff;
  border-top:6px solid #f0a;padding:30px;max-width:520px;width:90%;border-radius:10px;
  box-shadow:0 0 80px rgba(0,255,255,0.4);animation:slideUp .3s}
@keyframes slideUp{from{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}
.dialog-icon{text-align:center;font-size:56px;margin-bottom:18px}
.dialog-title{font-family:'Orbitron',sans-serif;color:#f0a;font-size:24px;text-align:center;
  margin-bottom:12px;letter-spacing:3px;text-shadow:0 0 20px #f0a}
.dialog-message{color:#0ff;font-size:14px;text-align:center;margin-bottom:22px;line-height:1.6}
.dialog-buttons{display:flex;gap:10px;justify-content:center}
.dialog-btn{padding:14px 36px;background:linear-gradient(135deg,#f0a,#a05);border:2px solid #f0a;
  color:#fff;font-weight:bold;cursor:pointer;font-family:'Orbitron',sans-serif;font-size:14px;
  border-radius:5px;box-shadow:0 0 20px rgba(255,0,255,0.5);transition:all .3s}
.dialog-btn:hover{transform:scale(1.05);box-shadow:0 0 30px rgba(255,0,255,0.8)}
.dialog-progress{width:100%;height:3px;background:rgba(0,255,255,0.2);margin-top:18px;
  border-radius:2px;overflow:hidden}
.dialog-progress-bar{height:100%;background:linear-gradient(90deg,#0ff,#f0a);width:100%;
  box-shadow:0 0 10px #0ff}
.dialog-hint{text-align:center;color:#666;font-size:10px;margin-top:6px;
  text-transform:uppercase;letter-spacing:1px}

/* === TOAST === */
.toast-container{position:fixed;top:20px;right:20px;z-index:160;pointer-events:none}
.toast{background:linear-gradient(135deg,#0a0a20,#050510);border:2px solid #0ff;
  border-left:5px solid #f0a;padding:14px 18px;margin-bottom:8px;border-radius:5px;
  box-shadow:0 0 25px rgba(0,255,255,0.4);animation:toastSlide .3s;
  pointer-events:auto;min-width:240px}
@keyframes toastSlide{from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1}}
.toast-title{font-family:'Orbitron',sans-serif;color:#f0a;font-size:12px;margin-bottom:4px;letter-spacing:2px}
.toast-message{color:#0ff;font-size:11px}

/* === COLLAPSIBLE PANELS === */
.panel-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.panel-toggle{background:none;border:2px solid rgba(255,255,255,0.2);color:inherit;
  width:24px;height:24px;border-radius:4px;cursor:pointer;display:flex;align-items:center;
  justify-content:center;font-size:12px;transition:all .3s;flex-shrink:0;padding:0;line-height:1}
.panel-toggle:hover{border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.1)}
.panel-body{overflow:hidden;transition:max-height .35s ease,opacity .25s ease;
  max-height:800px;opacity:1}
.panel-collapsed .panel-body{max-height:0;opacity:0;margin:0;padding:0}
.panel-collapsed .panel-header{margin-bottom:0}
.panel-collapsed .panel-toggle{transform:rotate(180deg)}

/* === HUD LEFT === */
#hud{position:fixed;top:15px;left:15px;z-index:10;
  background:linear-gradient(135deg,rgba(0,10,30,0.94),rgba(0,5,20,0.85));
  border:2px solid #0ff;border-left:5px solid #f0a;padding:16px;width:240px;
  box-shadow:0 0 30px rgba(0,255,255,0.25);border-radius:5px;transition:width .3s}
.hud-title{font-family:'Orbitron',sans-serif;font-size:12px;color:#f0a;
  letter-spacing:3px;text-transform:uppercase;text-shadow:0 0 10px #f0a}
#hud .panel-toggle{border-color:rgba(0,255,255,0.3);color:#0ff}
#hud .panel-toggle:hover{border-color:#0ff;background:rgba(0,255,255,0.15)}
.stat-row{display:flex;justify-content:space-between;margin-bottom:8px;padding:6px 8px;
  background:rgba(0,0,0,0.3);border-left:3px solid transparent;transition:all .3s}
.stat-row:hover{background:rgba(0,255,255,0.08);border-left-color:#0ff}
.stat-val{font-weight:bold;font-size:18px;font-family:'Orbitron',sans-serif}
.label{color:#888;font-size:10px;letter-spacing:1px;text-transform:uppercase}
#combo-display{margin-top:12px;padding:8px;background:rgba(255,0,255,0.08);border:1px solid #f0a;
  text-align:center;font-size:12px;color:#f0a;font-weight:bold;letter-spacing:2px}
#level-bar{margin-top:12px;padding:8px;background:rgba(0,0,0,0.5);border:1px solid #0ff}
.level-title{display:flex;justify-content:space-between;margin-bottom:4px;font-size:11px;color:#0ff}
.xp-bar-bg{width:100%;height:6px;background:#111;border-radius:3px;overflow:hidden}
.xp-bar-fill{height:100%;background:linear-gradient(90deg,#0ff,#f0a);width:0%;
  transition:width .5s;box-shadow:0 0 8px #0ff}

/* === COGNITION PANEL RIGHT === */
#cognition-panel{position:fixed;top:15px;right:15px;z-index:10;
  background:linear-gradient(135deg,rgba(10,0,30,0.94),rgba(5,0,20,0.85));
  border:2px solid #f0a;border-right:5px solid #0ff;padding:16px;width:260px;
  box-shadow:0 0 30px rgba(255,0,255,0.25);border-radius:5px}
.cognition-title{font-family:'Orbitron',sans-serif;font-size:12px;color:#0ff;
  letter-spacing:3px;text-transform:uppercase;text-shadow:0 0 10px #0ff}
#cognition-panel .panel-toggle{border-color:rgba(255,0,170,0.3);color:#f0a}
#cognition-panel .panel-toggle:hover{border-color:#f0a;background:rgba(255,0,170,0.15)}
.cognition-stat{display:flex;justify-content:space-between;margin-bottom:8px;padding:6px 8px;
  background:rgba(0,0,0,0.4);border-left:3px solid #0ff}
.cognition-label{color:#0ff;font-size:10px;text-transform:uppercase;letter-spacing:1px}
.cognition-value{color:#f0a;font-weight:bold;font-size:14px;font-family:'Orbitron',sans-serif}
.cognition-bar{width:100%;height:5px;background:#111;border-radius:3px;overflow:hidden;margin-top:4px;margin-bottom:6px}
.cognition-bar-fill{height:100%;transition:width .5s}
.bar-cellular{background:#0f0;box-shadow:0 0 6px #0f0}
.bar-tissue{background:#0ff;box-shadow:0 0 6px #0ff}
.bar-organ{background:#f0a;box-shadow:0 0 6px #f0a}
.bar-swarm{background:#fa0;box-shadow:0 0 6px #fa0}
.mode-btn{width:100%;padding:10px;margin-top:8px;background:linear-gradient(135deg,#1a1a2e,#0a0a1a);
  border:2px solid #f0a;color:#f0a;cursor:pointer;font-family:'Orbitron',sans-serif;
  font-weight:bold;font-size:10px;letter-spacing:1px;transition:all .3s;border-radius:4px}
.mode-btn:hover{background:linear-gradient(135deg,#f0a,#a05);color:#fff;box-shadow:0 0 20px rgba(255,0,255,0.6)}
.mode-btn.active{background:linear-gradient(135deg,#f0a,#a05);color:#fff}

/* === SLOT MACHINE BOTTOM === */
#ui-layer{position:fixed;bottom:0;left:0;width:100%;z-index:10;display:flex;justify-content:center;padding-bottom:16px}
.machine-frame{width:560px;background:linear-gradient(135deg,#0a0a20,#050510);
  border:3px solid #0ff;border-top:6px solid #f0a;padding:16px;
  box-shadow:0 0 50px rgba(0,255,255,0.4);border-radius:10px;position:relative;transition:transform .3s}
.machine-collapse-btn{position:absolute;top:-14px;right:10px;background:linear-gradient(135deg,#1a1a2e,#0a0a1a);
  border:2px solid #0ff;color:#0ff;width:28px;height:28px;border-radius:50%;cursor:pointer;
  display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .3s;z-index:11}
.machine-collapse-btn:hover{background:#0ff;color:#000;box-shadow:0 0 15px #0ff}
.machine-frame.collapsed{transform:translateY(calc(100% - 45px))}
.machine-frame.collapsed .reels,.machine-frame.collapsed .controls,.machine-frame.collapsed .payout-info{display:none}
.machine-title{font-family:'Orbitron',sans-serif;text-align:center;color:#f0a;font-size:16px;
  margin-bottom:12px;letter-spacing:4px;text-shadow:0 0 12px #f0a}
.reels{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;background:#000;height:100px;
  margin-bottom:12px;border:2px solid #333;border-radius:5px;overflow:hidden;box-shadow:inset 0 0 25px rgba(0,0,0,0.9)}
.reel-strip{background:linear-gradient(180deg,#0a0a0a,#050505);border-right:2px solid #222;
  position:relative;overflow:hidden}
.reel-strip:last-child{border-right:none}
.symbol{height:100px;display:flex;align-items:center;justify-content:center;font-size:42px;
  position:relative;transition:transform .3s}
.symbol.win{animation:symbolWin .5s infinite}
@keyframes symbolWin{0%,100%{transform:scale(1)}50%{transform:scale(1.2);filter:brightness(2)}}
.controls{display:grid;grid-template-columns:1fr 1fr 2fr;gap:6px;margin-bottom:8px}
.btn{background:linear-gradient(135deg,#1a1a2e,#0a0a1a);color:#0ff;border:2px solid #0ff;
  padding:12px;cursor:pointer;font-family:'Orbitron',sans-serif;font-weight:bold;transition:all .3s;
  text-transform:uppercase;font-size:11px;letter-spacing:1px;box-shadow:0 0 8px rgba(0,255,255,0.3)}
.btn:hover:not(:disabled){background:linear-gradient(135deg,#0ff,#08a);color:#000;
  box-shadow:0 0 18px rgba(0,255,255,0.8);transform:translateY(-1px)}
.btn.active{background:linear-gradient(135deg,#f0a,#a05);border-color:#f0a}
.btn:disabled{opacity:.3;cursor:not-allowed}
#btn-spin{background:linear-gradient(135deg,#f0a,#a05);border-color:#f0a;font-size:13px;
  box-shadow:0 0 18px rgba(255,0,255,0.5)}
#btn-spin:hover:not(:disabled){background:linear-gradient(135deg,#fff,#f0a);
  box-shadow:0 0 28px rgba(255,0,255,0.9)}
.payout-info{display:grid;grid-template-columns:repeat(2,1fr);gap:4px;font-size:9px;color:#666;margin-top:8px}
.payout-item{padding:4px;background:rgba(0,0,0,0.5);border-left:2px solid #333;
  display:flex;justify-content:space-between}

/* === CAMERA CONTROLS === */
#camera-controls{position:fixed;bottom:20px;right:20px;z-index:10;display:flex;flex-direction:column;gap:4px}
.cam-btn{width:44px;height:44px;background:rgba(0,20,40,0.9);border:2px solid #0ff;color:#0ff;
  font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:all .3s;border-radius:5px}
.cam-btn:hover{background:rgba(0,255,255,0.3);box-shadow:0 0 15px rgba(0,255,255,0.5)}

/* === RENDERER INFO === */
#renderer-info{position:fixed;bottom:15px;left:15px;z-index:10;font-size:9px;color:#555;
  font-family:monospace;letter-spacing:1px}

/* === OVERLAY === */
#overlay{position:fixed;top:0;left:0;width:100%;height:100%;
  background:linear-gradient(135deg,#000,#0a0a20 50%,#000);z-index:200;
  display:flex;flex-direction:column;align-items:center;justify-content:center}
#overlay h1{font-family:'Orbitron',sans-serif;font-size:3.2rem;color:#f0a;margin-bottom:8px;
  text-transform:uppercase;letter-spacing:10px;text-shadow:0 0 30px #f0a,0 0 60px #f0a;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{text-shadow:0 0 30px #f0a}50%{text-shadow:0 0 60px #f0a,0 0 90px #f0a}}
#overlay h2{font-family:'Exo 2',sans-serif;font-size:1.6rem;color:#0ff;margin-bottom:8px;
  letter-spacing:4px;text-shadow:0 0 20px #0ff}
#overlay .subtitle{color:#f0a;font-size:12px;letter-spacing:6px;font-family:'Orbitron',sans-serif;margin-bottom:24px}
#overlay p{color:#0ff;margin-bottom:12px;font-size:14px;text-align:center;max-width:680px;line-height:1.6}
#overlay button{padding:18px 55px;font-size:20px;background:linear-gradient(135deg,#f0a,#a05);
  border:3px solid #f0a;font-weight:900;cursor:pointer;color:#fff;font-family:'Orbitron',sans-serif;
  box-shadow:0 0 40px #f0a;text-transform:uppercase;letter-spacing:3px;transition:all .3s;
  border-radius:5px;margin-top:10px}
#overlay button:hover{transform:scale(1.05);box-shadow:0 0 60px #f0a}

.float-text{position:absolute;font-weight:bold;font-family:'Orbitron',sans-serif;
  pointer-events:none;animation:floatUp 1.5s forwards;font-size:20px;z-index:100}
@keyframes floatUp{0%{opacity:1;transform:translateY(0) scale(.5)}50%{transform:translateY(-30px) scale(1.2)}100%{opacity:0;transform:translateY(-60px) scale(1)}}

/* === BUILD INFO === */
#build-info{position:fixed;top:50%;right:-320px;transform:translateY(-50%);width:280px;
  background:rgba(0,10,30,0.95);border:2px solid #0ff;border-right:none;padding:18px;
  z-index:15;transition:right .3s;border-radius:5px 0 0 5px}
#build-info.visible{right:0}
.info-title{font-family:'Orbitron',sans-serif;color:#f0a;font-size:14px;letter-spacing:2px}
#build-info .panel-toggle{border-color:rgba(0,255,255,0.3);color:#0ff}
#build-info .panel-toggle:hover{border-color:#0ff;background:rgba(0,255,255,0.15)}
.info-row{margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid #333}
.info-label{color:#666;font-size:10px;text-transform:uppercase}
.info-value{color:#0ff;font-size:14px;font-weight:bold}
#upgrade-btn{width:100%;margin-top:12px}

/* === TECH TREE === */
#tech-tree-btn{display:none}
#tech-panel{position:fixed;bottom:210px;left:15px;z-index:10;width:240px;
  background:linear-gradient(135deg,rgba(0,10,30,0.95),rgba(0,5,20,0.9));
  border:2px solid #fa0;border-left:5px solid #fa0;padding:14px;border-radius:5px;
  box-shadow:0 0 30px rgba(255,170,0,0.25);max-height:260px;overflow-y:auto;
  transition:all .3s}
.tech-title{font-family:'Orbitron',sans-serif;color:#fa0;font-size:12px;letter-spacing:2px}
#tech-panel .panel-toggle{border-color:rgba(255,170,0,0.3);color:#fa0}
#tech-panel .panel-toggle:hover{border-color:#fa0;background:rgba(255,170,0,0.15)}
.tech-item{padding:8px;margin-bottom:6px;background:rgba(0,0,0,0.4);border-left:3px solid #555;
  cursor:pointer;transition:all .3s;border-radius:2px}
.tech-item:hover{background:rgba(255,170,0,0.1);border-left-color:#fa0}
.tech-item.unlocked{border-left-color:#0f0;opacity:0.6}
.tech-item.available{border-left-color:#fa0}
.tech-name{color:#fa0;font-size:11px;font-weight:bold}
.tech-cost{color:#888;font-size:9px;margin-top:2px}
.tech-effect{color:#0ff;font-size:9px;margin-top:2px}
</style>
</head>
<body>

<div id="overlay">
  <h1>SKYFORGE</h1>
  <h2>Embodied Intelligence</h2>
  <div class="subtitle">WebGPU EDITION — Three.js 0.183</div>
  <p>
    <strong>Learn 3D Programming Through Play:</strong><br>
    Every action teaches real Three.js API calls.<br>
    WebGPURenderer • TSL Shading Language • Node Materials • Post-Processing<br><br>
    <strong>40+ Tarot Combinations:</strong><br>
    🧬 Cellular • ⚡ Bioelectric • 🔄 Morphogenesis • 🌊 Swarm • 🧪 Xenobots
  </p>
  <button onclick="initSim()">⚡ INITIALIZE SKYFORGE ⚡</button>
</div>

<div id="viewport"></div>

<div class="dialog-overlay" id="dialog-overlay">
  <div class="dialog-box">
    <div class="dialog-icon" id="dialog-icon"></div>
    <div class="dialog-title" id="dialog-title"></div>
    <div class="dialog-message" id="dialog-message"></div>
    <div class="dialog-buttons" id="dialog-buttons"></div>
    <div class="dialog-progress" id="dialog-progress" style="display:none;">
      <div class="dialog-progress-bar" id="dialog-progress-bar"></div>
    </div>
  </div>
</div>

<div class="toast-container" id="toast-container"></div>

<div id="hud">
  <div class="panel-header">
    <div class="hud-title">⚡ RESOURCES</div>
    <button class="panel-toggle" onclick="togglePanel('hud')" title="Collapse">▲</button>
  </div>
  <div class="panel-body">
    <div class="stat-row"><span class="label">⚡ Energy</span><span id="ui-energy" class="stat-val" style="color:#0ff">150</span></div>
    <div class="stat-row"><span class="label">🔧 Materials</span><span id="ui-materials" class="stat-val" style="color:#ffaa00">0</span></div>
    <div class="stat-row"><span class="label">💎 Credits</span><span id="ui-credits" class="stat-val" style="color:#f0f">0</span></div>
    <div class="stat-row"><span class="label">🧬 Population</span><span id="ui-pop" class="stat-val" style="color:#0f0">0</span></div>
    <div class="stat-row"><span class="label">🏗️ Structures</span><span id="ui-builds" class="stat-val" style="color:#ff0">0</span></div>
    <div id="combo-display">NO COMBO</div>
    <div id="level-bar">
      <div class="level-title"><span>ARCHITECT LVL <span id="level-num">1</span></span><span id="xp-text">0 / 100 XP</span></div>
      <div class="xp-bar-bg"><div class="xp-bar-fill" id="xp-bar"></div></div>
    </div>
  </div>
</div>

<div id="edu-panel">
  <div class="panel-header">
    <div class="edu-title">📘 API LOG</div>
    <button class="panel-toggle" onclick="togglePanel('edu-panel')" title="Collapse">▲</button>
  </div>
  <div class="panel-body">
    <div id="edu-log"></div>
  </div>
</div>

<div id="cognition-panel">
  <div class="panel-header">
    <div class="cognition-title">🧠 COGNITION</div>
    <button class="panel-toggle" onclick="togglePanel('cognition-panel')" title="Collapse">▲</button>
  </div>
  <div class="panel-body">
    <div class="cognition-stat"><span class="cognition-label">Cellular Intelligence</span><span class="cognition-value" id="cellular-intel">0</span></div>
    <div class="cognition-bar"><div class="cognition-bar-fill bar-cellular" id="cellular-bar" style="width:0%"></div></div>
    <div class="cognition-stat"><span class="cognition-label">Tissue Networks</span><span class="cognition-value" id="tissue-intel">0</span></div>
    <div class="cognition-bar"><div class="cognition-bar-fill bar-tissue" id="tissue-bar" style="width:0%"></div></div>
    <div class="cognition-stat"><span class="cognition-label">Organ Systems</span><span class="cognition-value" id="organ-intel">0</span></div>
    <div class="cognition-bar"><div class="cognition-bar-fill bar-organ" id="organ-bar" style="width:0%"></div></div>
    <div class="cognition-stat"><span class="cognition-label">Swarm Mind</span><span class="cognition-value" id="swarm-intel">0</span></div>
    <div class="cognition-bar"><div class="cognition-bar-fill bar-swarm" id="swarm-bar" style="width:0%"></div></div>
    <button class="mode-btn" id="bioelectric-btn" onclick="toggleBioelectricView()">⚡ BIOELECTRIC NETWORK</button>
    <button class="mode-btn" id="morpho-btn" onclick="triggerMorphogenesis()">🔄 TRIGGER MORPHOGENESIS</button>
    <button class="mode-btn" id="xenobot-btn" onclick="spawnXenobot()">🧪 CREATE XENOBOT (50 CR)</button>
  </div>
</div>

<div id="ui-layer">
  <div class="machine-frame">
    <button class="machine-collapse-btn" onclick="toggleMachineCollapse()">▼</button>
    <div class="machine-title">🎰 COGNITION FORGE 🎰</div>
    <div class="reels" id="reels-container"></div>
    <div class="controls">
      <button class="btn" id="btn-turbo" onclick="toggleTurbo()">⚡ TURBO</button>
      <button class="btn" id="btn-auto" onclick="toggleAuto()">🔄 AUTO</button>
      <button class="btn" id="btn-spin" onclick="spin()">SPIN (15 E)</button>
    </div>
    <div class="payout-info" id="payout-info">
      <div style="grid-column:1/-1;text-align:center;color:#0ff;font-size:10px;margin-bottom:4px;border-bottom:1px solid #333;padding-bottom:4px">EMBODIED INTELLIGENCE CARDS</div>
    </div>
  </div>
</div>

<div id="tech-tree-btn"></div>
<div id="tech-panel" class="panel-collapsed">
  <div class="panel-header">
    <div class="tech-title">🔬 EVOLUTION TREE</div>
    <button class="panel-toggle" onclick="togglePanel('tech-panel')" title="Expand" style="transform:rotate(180deg)">▲</button>
  </div>
  <div class="panel-body">
    <div id="tech-items"></div>
  </div>
</div>

<div id="camera-controls">
  <button class="cam-btn" onclick="camAdjust('in')">+</button>
  <button class="cam-btn" onclick="camAdjust('out')">−</button>
  <button class="cam-btn" onclick="camAdjust('reset')">⌂</button>
</div>

<div id="renderer-info">Loading renderer...</div>

<div id="build-info">
  <div class="panel-header">
    <div class="info-title">STRUCTURE DATA</div>
    <button class="panel-toggle" onclick="togglePanel('build-info')" title="Collapse">▲</button>
  </div>
  <div class="panel-body">
    <div class="info-row"><div class="info-label">Type</div><div class="info-value" id="info-type">-</div></div>
    <div class="info-row"><div class="info-label">Level</div><div class="info-value" id="info-level">-</div></div>
    <div class="info-row"><div class="info-label">Production</div><div class="info-value" id="info-production">-</div></div>
    <div class="info-row"><div class="info-label">Cognition Type</div><div class="info-value" id="info-cognition">-</div></div>
    <button class="btn" id="upgrade-btn" onclick="upgradeSelected()">UPGRADE (50 CR)</button>
  </div>
</div>

<!-- Modern Three.js with import maps -->
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.1/examples/jsm/"
  }
}
</script>

<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';

/* ======================================================
   EDUCATIONAL LOGGER — Teaches Three.js API as you play
   ====================================================== */
const EduLog = {
  entries: [],
  maxEntries: 25,
  log(fnName, desc) {
    this.entries.unshift({ fn: fnName, desc, time: Date.now() });
    if (this.entries.length > this.maxEntries) this.entries.pop();
    this.render();
  },
  render() {
    const el = document.getElementById('edu-log');
    if (!el) return;
    el.innerHTML = this.entries.map((e, i) =>
      `<div class="edu-entry${i === 0 ? ' highlight' : ''}">
        <div class="edu-fn">${e.fn}</div>
        <div class="edu-desc">${e.desc}</div>
      </div>`
    ).join('');
  }
};

/* ======================================================
   UI SYSTEM
   ====================================================== */
const UI = {
  showDialog(icon, title, message, buttons = [{ text: 'OK', primary: true }]) {
    const overlay = document.getElementById('dialog-overlay');
    document.getElementById('dialog-icon').innerText = icon;
    document.getElementById('dialog-title').innerText = title;
    document.getElementById('dialog-message').innerText = message;
    document.getElementById('dialog-progress').style.display = 'none';
    const btnC = document.getElementById('dialog-buttons');
    btnC.innerHTML = '';
    buttons.forEach(btn => {
      const b = document.createElement('button');
      b.className = 'dialog-btn';
      b.innerText = btn.text;
      b.onclick = () => { overlay.classList.remove('active'); if (btn.callback) btn.callback(); };
      btnC.appendChild(b);
    });
    overlay.classList.add('active');
  },
  showToast(title, message, duration = 3000) {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<div class="toast-title">${title}</div><div class="toast-message">${message}</div>`;
    c.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastSlide .3s reverse'; setTimeout(() => t.remove(), 300); }, duration);
  },
  showMilestone(icon, title, message, duration = 3000) {
    const overlay = document.getElementById('dialog-overlay');
    document.getElementById('dialog-icon').innerText = icon;
    document.getElementById('dialog-title').innerText = title;
    document.getElementById('dialog-message').innerText = message;
    document.getElementById('dialog-buttons').innerHTML = '';
    const pb = document.getElementById('dialog-progress');
    pb.style.display = 'block';
    pb.innerHTML = `<div class="dialog-progress-bar" style="animation:progressShrink ${duration / 1000}s linear forwards"></div><div class="dialog-hint">Click anywhere to continue</div>`;
    overlay.classList.remove('dismissing');
    overlay.classList.add('active');
    const tid = setTimeout(() => dismiss(), duration);
    const dismiss = () => {
      clearTimeout(tid);
      overlay.classList.add('dismissing');
      setTimeout(() => { overlay.classList.remove('active', 'dismissing'); pb.style.display = 'none'; }, 300);
      overlay.removeEventListener('click', dismiss);
    };
    overlay.addEventListener('click', dismiss);
  }
};

const styleEl = document.createElement('style');
styleEl.textContent = `@keyframes progressShrink{from{width:100%}to{width:0%}}`;
document.head.appendChild(styleEl);

/* ======================================================
   TAROT CARD DATA
   ====================================================== */
const TAROT_DATA = `emoji1,emoji2,emoji3,emoji4,emoji5,card_name,effect,rarity
🧬,🧬,🧬,🧬,🧬,Cellular Genesis,+500 Cellular Intel,legendary
🌊,🌊,🌊,🌊,🌊,Swarm Consciousness,+500 Swarm Intel,legendary
⚡,⚡,⚡,⚡,⚡,Bioelectric Surge,+200 Energy +Network Boost,epic
🔮,🔮,🔮,🔮,🔮,Proto-Cognition,+100 All Intel Types,epic
🌙,🌙,🌙,🌙,🌙,Morphogenetic Field,Trigger Morphogenesis,epic
🧪,🧪,🧪,🧪,🧪,Synthetic Life,Create 3 Xenobots,epic
💫,💫,💫,💫,💫,Emergent Mind,All Systems Level Up,epic
🔬,🔬,🔬,🔬,🔬,Developmental Bio,+150 Tissue Networks,rare
🌀,🌀,🌀,🌀,🌀,Self-Organization,Buildings Auto-Connect,rare
💎,💎,💎,💎,💎,Crystallized Thought,+150 Credits,rare
🔥,🔥,🔥,🔥,🔥,Metabolic Surge,+100 Energy,rare
🌿,🌿,🌿,🌿,🌿,Adaptive Growth,+75 All Resources,rare
🎯,🎯,🎯,🎯,🎯,Target Morphology,+100 Organ Systems,rare
🛡️,🛡️,🛡️,🛡️,🛡️,Somatic Protection,+40 Energy,uncommon
🌊,🌊,🌊,🌊,🌊,Collective Flow,+30 Swarm Intel,uncommon
🔧,🔧,🔧,🔧,🔧,Morpho-Engineer,+30 Materials,uncommon
🧬,🧬,🧬,🧬,🧬,Cell Collective,+30 Cellular Intel,uncommon
🌟,🌟,🌟,🌟,🌟,The Universe,All resources maxed,legendary
👑,👑,👑,👑,👑,The Emperor,+500 Credits,legendary
🧬,⚡,🔮,🌊,💫,Scale-Free Mind,All Cognition +200,mythic
🔬,🧪,🌀,🔥,🌿,Life As It Can Be,Triple Production,mythic
⚡,🧬,🌊,🔮,🎯,Embodied Intelligence,Instant Evolution,mythic`;

const TarotCards = {
  cards: [], symbolPool: [],
  rarityWeights: { legendary: 1, mythic: 2, epic: 5, rare: 15, uncommon: 30, common: 47 },
  init() {
    const lines = TAROT_DATA.trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
      const v = lines[i].split(',');
      this.cards.push({ emojis: [v[0], v[1], v[2], v[3], v[4]], name: v[5], effect: v[6], rarity: v[7] });
    }
    this.cards.forEach(card => {
      const w = this.rarityWeights[card.rarity] || 10;
      for (let i = 0; i < w; i++) card.emojis.forEach(e => this.symbolPool.push(e));
    });
  },
  getRandomSymbol() {
    if (!this.symbolPool.length) return ['🧬', '⚡', '🔮', '🌊', '💫'][Math.floor(Math.random() * 5)];
    return this.symbolPool[Math.floor(Math.random() * this.symbolPool.length)];
  },
  checkCombination(symbols) {
    for (let card of this.cards) if (this.eq(symbols, card.emojis)) return card;
    const counts = {};
    symbols.forEach(s => counts[s] = (counts[s] || 0) + 1);
    const max = Math.max(...Object.values(counts));
    if (max === 5) { const s = Object.keys(counts).find(k => counts[k] === 5); const c = this.cards.find(cc => cc.emojis[0] === s && cc.emojis.every(e => e === s)); if (c) return c; }
    if (max === 4) return { name: 'Four of a Kind', effect: 'quad_bonus', rarity: 'rare' };
    if (max === 3) return { name: 'Three of a Kind', effect: 'triple_bonus', rarity: 'uncommon' };
    if (max === 2) { const pairs = Object.keys(counts).filter(k => counts[k] === 2); if (pairs.length === 2) return { name: 'Two Pairs', effect: 'double_pair', rarity: 'common' }; return { name: 'Pair', effect: 'pair_bonus', rarity: 'common' }; }
    return null;
  },
  eq(a, b) { return a.length === b.length && a.every((v, i) => v === b[i]); }
};

/* ======================================================
   AUDIO
   ====================================================== */
const SFX = {
  ctx: null,
  init() { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); },
  play(freq, type, dur, vol = 0.1, slide = false) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, this.ctx.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq / 2, this.ctx.currentTime + dur);
    g.gain.setValueAtTime(vol, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);
    o.connect(g); g.connect(this.ctx.destination); o.start(); o.stop(this.ctx.currentTime + dur);
  },
  chord(freqs, type = 'sine', dur = 0.3, vol = 0.05) { freqs.forEach(f => this.play(f, type, dur, vol)); },
  born: () => SFX.chord([400, 500, 600], 'sine', 0.15, 0.04),
  droneHit: () => { SFX.play(200, 'square', 0.15, 0.15); setTimeout(() => SFX.chord([150, 180, 220], 'sawtooth', 0.25, 0.12, true), 50); },
  build: () => SFX.chord([80, 120, 160], 'square', 0.4, 0.2),
  spin: () => SFX.play(300, 'sawtooth', 0.08, 0.08),
  win: () => SFX.chord([500, 625, 750, 1000], 'sine', 0.5, 0.15),
  jackpot: () => { for (let i = 0; i < 5; i++) setTimeout(() => SFX.chord([400 + i * 100, 500 + i * 100, 600 + i * 100], 'sine', 0.3, 0.1), i * 100); },
  upgrade: () => SFX.chord([600, 800, 1000], 'triangle', 0.3, 0.1),
  levelUp: () => { SFX.chord([400, 500, 600, 800], 'sine', 0.5, 0.15); setTimeout(() => SFX.chord([800, 1000, 1200, 1600], 'sine', 0.5, 0.15), 200); },
  bioelectric: () => SFX.play(800, 'sine', 0.5, 0.08, true),
  morpho: () => { for (let i = 0; i < 3; i++) setTimeout(() => SFX.chord([300 + i * 50, 400 + i * 50, 500 + i * 50], 'triangle', 0.4, 0.1), i * 150); },
  xenobot: () => SFX.chord([350, 450, 550, 650], 'square', 0.4, 0.12)
};

/* ======================================================
   TECH TREE
   ====================================================== */
const TechTree = {
  techs: [
    { id: 'solar', name: 'Solar Harvester', cost: 100, costType: 'credits', effect: 'Energy +5/tick', unlocked: false, req: null, apply() { Game.techBonuses.energyPerTick += 5; } },
    { id: 'refinery', name: 'Matter Refinery', cost: 150, costType: 'credits', effect: 'Materials +3/tick', unlocked: false, req: null, apply() { Game.techBonuses.materialsPerTick += 3; } },
    { id: 'neural', name: 'Neural Amplifier', cost: 200, costType: 'credits', effect: 'Cellular Intel x2', unlocked: false, req: 'solar', apply() { Game.techBonuses.cellularMult = 2; } },
    { id: 'swarmnet', name: 'Swarm Network', cost: 250, costType: 'credits', effect: 'Swarm Intel x2', unlocked: false, req: 'refinery', apply() { Game.techBonuses.swarmMult = 2; } },
    { id: 'xenofab', name: 'Xenobot Factory', cost: 300, costType: 'credits', effect: 'Free Xenobots', unlocked: false, req: 'neural', apply() { Game.techBonuses.freeXenobots = true; } },
    { id: 'bloom', name: 'Bloom Overdrive', cost: 100, costType: 'credits', effect: 'Enhanced Visuals', unlocked: false, req: null, apply() { if (Sim.bloomPass) { Sim.bloomPass.strength = 2.0; Sim.bloomPass.radius = 0.6; } } },
    { id: 'turbocore', name: 'Turbo Core', cost: 400, costType: 'credits', effect: 'Spin cost halved', unlocked: false, req: 'swarmnet', apply() { Game.techBonuses.spinCostHalf = true; } },
  ],
  init() { this.render(); },
  render() {
    const el = document.getElementById('tech-items');
    if (!el) return;
    el.innerHTML = this.techs.map(t => {
      const available = !t.unlocked && (!t.req || this.techs.find(r => r.id === t.req)?.unlocked);
      return `<div class="tech-item ${t.unlocked ? 'unlocked' : ''} ${available ? 'available' : ''}" onclick="researchTech('${t.id}')">
        <div class="tech-name">${t.unlocked ? '✅' : available ? '🔓' : '🔒'} ${t.name}</div>
        <div class="tech-cost">${t.unlocked ? 'UNLOCKED' : t.cost + ' ' + t.costType}</div>
        <div class="tech-effect">${t.effect}</div>
      </div>`;
    }).join('');
  },
  research(id) {
    const t = this.techs.find(x => x.id === id);
    if (!t || t.unlocked) return;
    if (t.req && !this.techs.find(r => r.id === t.req)?.unlocked) { UI.showDialog('🔒', 'LOCKED', 'Research prerequisite first!'); return; }
    if (Game.credits < t.cost) { UI.showDialog('⚠️', 'INSUFFICIENT CREDITS', `Need ${t.cost} credits!`); return; }
    Game.credits -= t.cost;
    t.unlocked = true;
    t.apply();
    SFX.upgrade();
    UI.showMilestone('🔬', 'TECH UNLOCKED', `${t.name}: ${t.effect}`);
    Game.addXP(50);
    Game.updateHUD();
    this.render();
    EduLog.log('TechTree.research()', `Unlocked ${t.name} — game state mutation pattern`);
  }
};

/* ======================================================
   COGNITION SYSTEM
   ====================================================== */
const CognitionSystem = {
  cellular: 0, tissue: 0, organ: 0, swarm: 0,
  bioelectricView: false, bioelectricLines: [], xenobots: [],
  update() {
    const cm = Game.techBonuses?.cellularMult || 1;
    const sm = Game.techBonuses?.swarmMult || 1;
    this.cellular = Math.floor(Sim.entities.length / 2) * cm;
    this.tissue = Math.floor(Sim.buildings.length * 5);
    this.organ = Math.floor(Sim.buildings.filter(b => b.level >= 3).length * 10);
    this.swarm = Math.floor(Math.sqrt(Sim.entities.length) * 10) * sm;
    this.updateUI();
  },
  updateUI() {
    document.getElementById('cellular-intel').innerText = this.cellular;
    document.getElementById('tissue-intel').innerText = this.tissue;
    document.getElementById('organ-intel').innerText = this.organ;
    document.getElementById('swarm-intel').innerText = this.swarm;
    document.getElementById('cellular-bar').style.width = Math.min(100, this.cellular / 10) + '%';
    document.getElementById('tissue-bar').style.width = Math.min(100, this.tissue / 10) + '%';
    document.getElementById('organ-bar').style.width = Math.min(100, this.organ / 10) + '%';
    document.getElementById('swarm-bar').style.width = Math.min(100, this.swarm / 10) + '%';
  },
  toggleBioelectric() {
    this.bioelectricView = !this.bioelectricView;
    document.getElementById('bioelectric-btn').classList.toggle('active');
    if (this.bioelectricView) {
      UI.showToast('⚡ BIOELECTRIC NETWORK', 'Visualizing cellular flows');
      SFX.bioelectric();
      this.createBioelectricNetwork();
      EduLog.log('THREE.Line(geom, mat)', 'Created line segments between buildings — THREE.BufferGeometry.setFromPoints()');
    } else {
      this.clearBioelectricNetwork();
    }
  },
  createBioelectricNetwork() {
    for (let i = 0; i < Sim.buildings.length; i++) {
      for (let j = i + 1; j < Sim.buildings.length; j++) {
        const b1 = Sim.buildings[i], b2 = Sim.buildings[j];
        const dist = b1.mesh.position.distanceTo(b2.mesh.position);
        if (dist < 35) {
          const pts = [];
          const segments = 20;
          for (let s = 0; s <= segments; s++) {
            const t = s / segments;
            const x = b1.mesh.position.x + (b2.mesh.position.x - b1.mesh.position.x) * t;
            const y = b1.mesh.position.y + (b2.mesh.position.y - b1.mesh.position.y) * t + Math.sin(t * Math.PI) * 5;
            const z = b1.mesh.position.z + (b2.mesh.position.z - b1.mesh.position.z) * t;
            pts.push(new THREE.Vector3(x, y, z));
          }
          const geom = new THREE.BufferGeometry().setFromPoints(pts);
          const mat = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.4 });
          const line = new THREE.Line(geom, mat);
          Sim.scene.add(line);
          this.bioelectricLines.push(line);
        }
      }
    }
  },
  clearBioelectricNetwork() {
    this.bioelectricLines.forEach(l => { Sim.scene.remove(l); l.geometry.dispose(); l.material.dispose(); });
    this.bioelectricLines = [];
  },
  triggerMorphogenesis() {
    if (Sim.buildings.length < 3) { UI.showDialog('⚠️', 'INSUFFICIENT', 'Need 3+ buildings!'); return; }
    SFX.morpho();
    UI.showMilestone('🌀', 'MORPHOGENESIS', 'Structures self-organizing!');
    const n = Math.min(3, Sim.buildings.length);
    for (let i = 0; i < n; i++) {
      const b = Sim.buildings[Math.floor(Math.random() * Sim.buildings.length)];
      b.level++;
      b.value = Math.floor(b.value * 1.3);
      const s = b.mesh.scale;
      const target = { x: s.x * 1.15, y: s.y * 1.15, z: s.z * 1.15 };
      Sim.animateScale(b.mesh, target, 600);
      Sim.spawnParticles(b.mesh.position, 0x00ffff, 20);
    }
    Game.addXP(100);
    this.tissue += 50; this.organ += 25;
    this.update();
    if (this.bioelectricView) { this.clearBioelectricNetwork(); this.createBioelectricNetwork(); }
    EduLog.log('Mesh.scale.set()', 'Scaled buildings via morphogenesis — THREE.Vector3 manipulation');
  },
  spawnXenobot() {
    const cost = Game.techBonuses?.freeXenobots ? 0 : 50;
    if (Game.credits < cost) { UI.showDialog('⚠️', 'INSUFFICIENT CREDITS', `Need ${cost} credits!`); return; }
    Game.credits -= cost;
    SFX.xenobot();
    const colors = [0xff00ff, 0x00ffff, 0xffff00];
    const c = colors[Math.floor(Math.random() * colors.length)];
    const geo = new THREE.OctahedronGeometry(1.5, 1);
    const mat = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.8, metalness: 0.7, roughness: 0.3, wireframe: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((Math.random() - 0.5) * 40, 1, (Math.random() - 0.5) * 40);
    mesh.castShadow = true;
    Sim.scene.add(mesh);
    const light = new THREE.PointLight(c, 2, 15);
    mesh.add(light);
    this.xenobots.push({ mesh, target: new THREE.Vector3(0, 1, 0), resourceBonus: 0.5 });
    UI.showToast('🧪 XENOBOT CREATED', 'Synthetic organism deployed!');
    this.cellular += 20;
    this.update();
    Game.updateHUD();
    EduLog.log('new THREE.OctahedronGeometry(1.5, 1)', 'Created octahedron with detail=1 for xenobot');
    EduLog.log('new THREE.PointLight(color, 2, 15)', 'Attached point light to mesh — child of Object3D');
  },
  updateXenobots() {
    for (let x of this.xenobots) {
      if (x.mesh.position.distanceTo(x.target) < 2) x.target.set((Math.random() - 0.5) * 50, 1, (Math.random() - 0.5) * 50);
      const dir = new THREE.Vector3().subVectors(x.target, x.mesh.position).normalize();
      x.mesh.position.add(dir.multiplyScalar(0.15));
      x.mesh.rotation.x += 0.03;
      x.mesh.rotation.y += 0.03;
    }
  }
};

/* ======================================================
   3D SIMULATION — Modern Three.js with post-processing
   ====================================================== */
const Sim = {
  scene: null, camera: null, renderer: null, composer: null, bloomPass: null,
  controls: null, raycaster: null, mouse: null, timer: null,
  entities: [], buildings: [], selectedBuilding: null,
  drone: null, droneSpeed: 1, terrain: null,
  tweens: [],

  async init() {
    this.timer = new THREE.Timer();
    EduLog.log('new THREE.Timer()', 'Modern high-res timer (replaces deprecated Clock)');

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050510, 0.006);
    this.scene.background = new THREE.Color(0x050510);
    EduLog.log('new THREE.Scene()', 'Root container for all 3D objects');
    EduLog.log('new THREE.FogExp2(0x050510, 0.006)', 'Exponential fog for depth atmosphere');

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 800);
    this.camera.position.set(60, 55, 60);
    EduLog.log('new THREE.PerspectiveCamera(60, aspect, 0.5, 800)', 'FOV=60° perspective projection');

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    document.getElementById('viewport').appendChild(this.renderer.domElement);
    EduLog.log('new THREE.WebGLRenderer({antialias, powerPreference})', 'WebGL renderer with ACES tonemapping, PCFShadowMap');
    EduLog.log('renderer.toneMapping = ACESFilmicToneMapping', 'Cinematic tone mapping for HDR-like output');

    document.getElementById('renderer-info').innerText = `Three.js r183 | WebGL2 | ACES Filmic | PCF Shadows | Timer API`;

    // OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2.2;
    this.controls.minDistance = 30;
    this.controls.maxDistance = 200;
    this.controls.target.set(0, 5, 0);
    EduLog.log('new OrbitControls(camera, domElement)', 'Mouse-driven orbit with damping=0.08');

    // Post-processing
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
    this.composer.addPass(this.bloomPass);
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
    EduLog.log('new EffectComposer(renderer)', 'Multi-pass post-processing pipeline');
    EduLog.log('new UnrealBloomPass(res, 1.0, 0.4, 0.85)', 'Bloom: strength=1.0, radius=0.4, threshold=0.85');
    EduLog.log('new OutputPass()', 'Final color space conversion pass');

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Lighting
    this.setupLighting();
    this.createTerrain();
    this.createSkyDome();
    this.createDrone();
    this.createGridRings();

    window.addEventListener('pointerdown', this.onMouseClick.bind(this));
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    });

    this.animate();
  },

  setupLighting() {
    const amb = new THREE.AmbientLight(0x303050, 0.5);
    this.scene.add(amb);
    EduLog.log('new THREE.AmbientLight(0x303050, 0.5)', 'Uniform ambient fill light');

    const hemi = new THREE.HemisphereLight(0x4488ff, 0x002244, 0.6);
    this.scene.add(hemi);
    EduLog.log('new THREE.HemisphereLight(sky, ground, 0.6)', 'Sky/ground gradient light');

    const sun = new THREE.DirectionalLight(0xffaa44, 2.0);
    sun.position.set(60, 100, 40);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 4096;
    sun.shadow.mapSize.height = 4096;
    sun.shadow.camera.left = -80;
    sun.shadow.camera.right = 80;
    sun.shadow.camera.top = 80;
    sun.shadow.camera.bottom = -80;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 250;
    sun.shadow.bias = -0.001;
    this.scene.add(sun);
    EduLog.log('new THREE.DirectionalLight(0xffaa44, 2.0)', 'Sun light with 4096x4096 shadow map');

    const accent1 = new THREE.PointLight(0xff00ff, 3, 80);
    accent1.position.set(0, 30, 0);
    this.scene.add(accent1);

    const accent2 = new THREE.PointLight(0x00ffff, 2, 60);
    accent2.position.set(-30, 20, 30);
    this.scene.add(accent2);
    EduLog.log('new THREE.PointLight(color, intensity, distance)', 'Accent point lights for neon atmosphere');
  },

  createTerrain() {
    const noise = new ImprovedNoise();
    const size = 200, segs = 128;
    const geo = new THREE.PlaneGeometry(size, size, segs, segs);
    const positions = geo.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i], z = positions[i + 1];
      positions[i + 2] = noise.noise(x * 0.02, z * 0.02, 0) * 4 + noise.noise(x * 0.05, z * 0.05, 0) * 1.5;
    }
    geo.computeVertexNormals();

    // Create procedural grid texture on canvas
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#080818';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#0ff';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.15;
    for (let i = 0; i <= 512; i += 16) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke(); }
    ctx.globalAlpha = 0.3;
    ctx.strokeStyle = '#f0a';
    for (let i = 0; i <= 512; i += 64) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke(); }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8);

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      color: 0x0a0a20,
      roughness: 0.85,
      metalness: 0.15,
      emissive: 0x001122,
      emissiveIntensity: 0.3
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.terrain = mesh;
    EduLog.log('new THREE.PlaneGeometry(200, 200, 128, 128)', 'High-res terrain plane with 128x128 segments');
    EduLog.log('ImprovedNoise.noise(x, z, 0)', 'Perlin noise for procedural terrain height');
    EduLog.log('new THREE.CanvasTexture(canvas)', 'Procedural grid texture from canvas2D');
  },

  createSkyDome() {
    const geo = new THREE.SphereGeometry(350, 32, 16);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x050520,
      side: THREE.BackSide
    });
    const sky = new THREE.Mesh(geo, mat);
    this.scene.add(sky);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 300 + Math.random() * 30;
      starPositions.push(Math.sin(phi) * Math.cos(theta) * r, Math.cos(phi) * r, Math.sin(phi) * Math.sin(theta) * r);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, sizeAttenuation: true });
    this.scene.add(new THREE.Points(starGeo, starMat));
    EduLog.log('new THREE.Points(geom, PointsMaterial)', '2000 stars via point cloud — Float32BufferAttribute');
    EduLog.log('SphereGeometry + BackSide', 'Sky dome with interior-facing faces');
  },

  createGridRings() {
    const ringMat = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.08 });
    [20, 40, 60, 80].forEach(r => {
      const pts = [];
      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0.1, Math.sin(a) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      this.scene.add(new THREE.Line(geo, ringMat));
    });
    EduLog.log('THREE.BufferGeometry().setFromPoints()', 'Concentric ring guides from Vector3 arrays');
  },

  createDrone() {
    const group = new THREE.Group();

    // Core
    const coreGeo = new THREE.IcosahedronGeometry(2.5, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, emissive: 0xffaa00, emissiveIntensity: 1.5,
      roughness: 0.1, metalness: 0.9
    });
    group.add(new THREE.Mesh(coreGeo, coreMat));

    // Ring
    const ringGeo = new THREE.TorusGeometry(5, 0.4, 8, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 0.6, wireframe: true
    });
    group.add(new THREE.Mesh(ringGeo, ringMat));

    // Second ring perpendicular
    const ring2 = new THREE.Mesh(ringGeo.clone(), ringMat.clone());
    ring2.rotation.x = Math.PI / 2;
    group.add(ring2);

    // Hitbox
    const hitbox = new THREE.Mesh(new THREE.SphereGeometry(8), new THREE.MeshBasicMaterial({ visible: false }));
    hitbox.userData = { isDrone: true };
    group.add(hitbox);

    const light = new THREE.PointLight(0xffaa00, 3, 50);
    group.add(light);

    group.position.set(0, 40, 0);
    this.scene.add(group);
    this.drone = group;
    EduLog.log('new THREE.Group()', 'Drone composite: IcosahedronGeometry + 2x TorusGeometry + PointLight');
    EduLog.log('new THREE.IcosahedronGeometry(2.5, 2)', 'Subdivided icosahedron (detail=2) for smooth sphere-like core');
  },

  updateDrone(time) {
    if (!this.drone) return;
    const s = this.droneSpeed * 0.4;
    this.drone.position.x = Math.sin(time * s) * 45;
    this.drone.position.z = Math.cos(time * s * 0.7) * 45;
    this.drone.position.y = 35 + Math.sin(time * 2) * 6;
    this.drone.children[1].rotation.z += 0.02;
    this.drone.children[2].rotation.y += 0.015;
    const pulse = 1 + Math.sin(time * 3) * 0.12;
    this.drone.children[0].scale.setScalar(pulse);
  },

  onMouseClick(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);
    for (let hit of hits) {
      if (hit.object.userData.isDrone) {
        this.deployDrone();
        this.spawnFloatText(event.clientX, event.clientY, '+5 MAT', '#ffaa00');
        EduLog.log('Raycaster.intersectObjects()', 'Click-tested drone hitbox — recursive scene traversal');
        break;
      } else if (hit.object.userData.isBuilding) {
        this.selectBuilding(hit.object.userData.building);
        EduLog.log('Raycaster.intersectObjects()', 'Selected building via ray-mesh intersection');
        break;
      }
    }
  },

  deployDrone() {
    if (Game.materials < 5) { UI.showDialog('⚠️', 'INSUFFICIENT MATERIALS', 'Need 5 materials!'); return; }
    SFX.droneHit();
    Game.materials -= 5;
    this.spawnParticles(this.drone.position, 0xffaa00, 25);

    const crateGeo = new THREE.BoxGeometry(3, 3, 3);
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x00ffcc, emissive: 0x00ffcc, emissiveIntensity: 0.6, wireframe: true });
    const crate = new THREE.Mesh(crateGeo, crateMat);
    crate.position.copy(this.drone.position);
    const glow = new THREE.PointLight(0x00ffcc, 3, 25);
    crate.add(glow);
    this.scene.add(crate);

    const startY = crate.position.y;
    const targetX = crate.position.x, targetZ = crate.position.z;
    this.addTween(crate.position, { y: 1 }, 1200, t => {
      // bounce easing
      const n = t;
      if (n < (1 / 2.75)) return 7.5625 * n * n;
      else if (n < (2 / 2.75)) return 7.5625 * (n - (1.5 / 2.75)) ** 2 + 0.75;
      else if (n < (2.5 / 2.75)) return 7.5625 * (n - (2.25 / 2.75)) ** 2 + 0.9375;
      return 7.5625 * (n - (2.625 / 2.75)) ** 2 + 0.984375;
    }, () => {
      this.scene.remove(crate);
      crate.geometry.dispose(); crate.material.dispose();
      this.buildStructure(targetX, targetZ);
    });
    EduLog.log('Mesh.position.copy(source)', 'Crate spawn at drone position — Vector3 copy');
  },

  buildStructure(x, z) {
    SFX.build();
    const types = [
      { name: 'Neural Tower', height: 14, geoFn: () => new THREE.CylinderGeometry(1.5, 3, 14, 6), color: 0x0099ff, production: 'energy', value: 2, cognition: 'cellular' },
      { name: 'Tissue Dome', height: 8, geoFn: () => new THREE.DodecahedronGeometry(5, 0), color: 0xffaa00, production: 'materials', value: 1, cognition: 'tissue' },
      { name: 'Organ Spire', height: 16, geoFn: () => new THREE.ConeGeometry(3, 16, 5), color: 0xff00ff, production: 'credits', value: 3, cognition: 'organ' },
      { name: 'Swarm Nexus', height: 6, geoFn: () => new THREE.TorusKnotGeometry(3, 0.8, 64, 8, 2, 3), color: 0x00ff00, production: 'population', value: 5, cognition: 'swarm' },
      { name: 'Biofield Lens', height: 10, geoFn: () => new THREE.IcosahedronGeometry(4, 1), color: 0xffff00, production: 'energy', value: 3, cognition: 'cellular' },
      { name: 'Morpho Gate', height: 12, geoFn: () => new THREE.TorusGeometry(4, 1.5, 8, 6), color: 0xff4400, production: 'credits', value: 4, cognition: 'organ' },
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const geo = type.geoFn();

    const mat = new THREE.MeshStandardMaterial({
      color: type.color,
      emissive: type.color,
      emissiveIntensity: 0.4,
      roughness: 0.35,
      metalness: 0.65,
      envMapIntensity: 1.0
    });

    const building = new THREE.Mesh(geo, mat);
    building.position.set(x, type.height / 2 + 1, z);
    building.castShadow = true;
    building.receiveShadow = true;

    const bData = {
      type: type.name, level: 1, production: type.production,
      value: type.value, mesh: building, baseColor: type.color, cognitionType: type.cognition
    };
    building.userData = { isBuilding: true, building: bData };

    // Accent light per building
    const bLight = new THREE.PointLight(type.color, 1.5, 20);
    bLight.position.y = type.height / 2;
    building.add(bLight);

    // Edge glow
    const edges = new THREE.EdgesGeometry(geo);
    const edgeMat = new THREE.LineBasicMaterial({ color: type.color, transparent: true, opacity: 0.6 });
    const wireframe = new THREE.LineSegments(edges, edgeMat);
    building.add(wireframe);

    this.scene.add(building);
    this.buildings.push(bData);
    Game.buildingsBuilt++;
    Game.addXP(10);
    CognitionSystem.update();
    this.spawnParticles(new THREE.Vector3(x, 1, z), 0xaaaaaa, 20);

    if (CognitionSystem.bioelectricView) {
      CognitionSystem.clearBioelectricNetwork();
      CognitionSystem.createBioelectricNetwork();
    }

    const geoName = geo.type || geo.constructor.name || 'Geometry';
    EduLog.log(`new THREE.${geoName}(...)`, `Built ${type.name} — emissive MeshStandardMaterial`);
    EduLog.log('new THREE.EdgesGeometry(geo)', 'Wireframe overlay via edge detection');
  },

  selectBuilding(building) {
    if (this.selectedBuilding) this.selectedBuilding.mesh.material.emissiveIntensity = 0.4;
    this.selectedBuilding = building;
    building.mesh.material.emissiveIntensity = 1.0;
    document.getElementById('info-type').innerText = building.type;
    document.getElementById('info-level').innerText = building.level;
    document.getElementById('info-production').innerText = `+${building.value} ${building.production}/tick`;
    document.getElementById('info-cognition').innerText = building.cognitionType.toUpperCase();
    document.getElementById('build-info').classList.add('visible');
    SFX.play(400, 'sine', 0.1, 0.05);
  },

  upgradeBuilding(building) {
    if (Game.credits < 50) { UI.showDialog('⚠️', 'INSUFFICIENT CREDITS', 'Need 50 credits!'); return; }
    Game.credits -= 50;
    building.level++;
    building.value = Math.floor(building.value * 1.5);
    building.mesh.scale.multiplyScalar(1.1);
    building.mesh.material.emissiveIntensity = 1.2;
    SFX.upgrade();
    this.spawnParticles(building.mesh.position, 0xff00ff, 15);
    this.selectBuilding(building);
    Game.addXP(25);
    Game.updateHUD();
    CognitionSystem.update();
    UI.showToast('UPGRADE COMPLETE', `${building.type} level ${building.level}!`);
    EduLog.log('Mesh.scale.multiplyScalar(1.1)', 'Uniform scale increase on upgrade');
  },

  spawnAgent() {
    if (this.entities.length > 120) return;
    const colors = [0x00ffcc, 0xff00ff, 0xffaa00, 0x00ff00];
    const c = colors[Math.floor(Math.random() * colors.length)];
    const mesh = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.5),
      new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.6 })
    );
    mesh.position.set((Math.random() - 0.5) * 10, 0.6, (Math.random() - 0.5) * 10);
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.entities.push({ mesh, target: new THREE.Vector3(0, 0.6, 0), speed: 0.05 + Math.random() * 0.1 });
    SFX.born();
    CognitionSystem.update();
  },

  spawnParticles(pos, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.4, 0.4),
        new THREE.MeshBasicMaterial({ color })
      );
      m.position.copy(pos);
      this.scene.add(m);
      const tx = pos.x + (Math.random() - 0.5) * 10;
      const ty = pos.y + Math.random() * 10;
      const tz = pos.z + (Math.random() - 0.5) * 10;
      this.addTween(m.position, { x: tx, y: ty, z: tz }, 600 + Math.random() * 400, t => t, () => {
        this.scene.remove(m); m.geometry.dispose(); m.material.dispose();
      });
    }
  },

  spawnFloatText(x, y, text, color = '#fff') {
    const div = document.createElement('div');
    div.className = 'float-text';
    div.innerText = text;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.color = color;
    div.style.textShadow = `0 0 10px ${color}`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1500);
  },

  // Simple tween system (replaces tween.js dependency)
  addTween(obj, target, duration, easingFn, onComplete) {
    const start = {};
    const keys = Object.keys(target);
    keys.forEach(k => start[k] = obj[k]);
    this.tweens.push({ obj, start, target, duration, elapsed: 0, easingFn, onComplete, keys });
  },

  animateScale(mesh, target, duration) {
    this.addTween(mesh.scale, target, duration, t => {
      // elastic out
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    });
  },

  updateTweens(dt) {
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.elapsed += dt * 1000;
      let t = Math.min(tw.elapsed / tw.duration, 1);
      const e = tw.easingFn ? tw.easingFn(t) : t;
      tw.keys.forEach(k => {
        tw.obj[k] = tw.start[k] + (tw.target[k] - tw.start[k]) * e;
      });
      if (t >= 1) {
        if (tw.onComplete) tw.onComplete();
        this.tweens.splice(i, 1);
      }
    }
  },

  animate() {
    requestAnimationFrame(() => this.animate());
    this.timer.update();
    const dt = this.timer.getDelta();
    const time = this.timer.getElapsed();

    this.updateTweens(dt);
    this.controls.update();
    this.updateDrone(time);

    // Entities
    for (let a of this.entities) {
      if (a.mesh.position.distanceTo(a.target) < 1) {
        if (this.buildings.length > 0) {
          const b = this.buildings[Math.floor(Math.random() * this.buildings.length)];
          a.target.set(b.mesh.position.x + (Math.random() - 0.5) * 8, 0.6, b.mesh.position.z + (Math.random() - 0.5) * 8);
        } else {
          a.target.set((Math.random() - 0.5) * 60, 0.6, (Math.random() - 0.5) * 60);
        }
      }
      const dir = new THREE.Vector3().subVectors(a.target, a.mesh.position).normalize();
      a.mesh.position.add(dir.multiplyScalar(a.speed));
      a.mesh.rotation.x += 0.05;
      a.mesh.rotation.y += 0.03;
    }

    CognitionSystem.updateXenobots();

    // Building animations
    for (let b of this.buildings) {
      b.mesh.rotation.y += 0.002 * b.level;
      const s = 1 + Math.sin(time * 2 + b.mesh.position.x) * 0.02;
      // subtle breathing
      b.mesh.children.forEach(c => {
        if (c.isLineSegments) c.material.opacity = 0.3 + Math.sin(time * 3 + b.mesh.position.z) * 0.3;
      });
    }

    // Resource production every ~2 seconds
    if (Math.floor(time * 0.5) !== Math.floor((time - dt) * 0.5)) {
      Game.produceResources();
    }

    this.composer.render();
  }
};

/* ======================================================
   GAME LOGIC
   ====================================================== */
const Game = {
  energy: 150, materials: 0, credits: 0,
  spinning: false, auto: false, turbo: false,
  buildingsBuilt: 0, level: 1, xp: 0, xpNeeded: 100,
  comboMultiplier: 1, spinsSinceWin: 0, machineCollapsed: false,
  milestones: {},
  techBonuses: { energyPerTick: 0, materialsPerTick: 0, cellularMult: 1, swarmMult: 1, freeXenobots: false, spinCostHalf: false },

  init() {
    TarotCards.init();
    TechTree.init();
    this.createReels();
    this.updateHUD();
    this.populatePayoutInfo();
    CognitionSystem.update();
    document.addEventListener('click', e => {
      if (!e.target.closest('#build-info') && !e.target.closest('#viewport')) {
        document.getElementById('build-info').classList.remove('visible');
        if (Sim.selectedBuilding) { Sim.selectedBuilding.mesh.material.emissiveIntensity = 0.4; Sim.selectedBuilding = null; }
      }
    });
  },

  populatePayoutInfo() {
    const c = document.getElementById('payout-info');
    TarotCards.cards.filter(c => c.rarity === 'legendary' || c.rarity === 'mythic').slice(0, 6).forEach(card => {
      const item = document.createElement('div');
      item.className = 'payout-item';
      item.innerHTML = `<span>${card.emojis.join('')}</span><span>${card.name}</span>`;
      c.appendChild(item);
    });
  },

  createReels() {
    const c = document.getElementById('reels-container');
    c.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const s = document.createElement('div');
      s.className = 'reel-strip';
      s.id = `reel-${i}`;
      s.innerHTML = `<div class="symbol">${TarotCards.getRandomSymbol()}</div>`;
      c.appendChild(s);
    }
  },

  get spinCost() { return this.techBonuses.spinCostHalf ? 8 : 15; },

  async spin() {
    if (this.spinning) return;
    const cost = this.spinCost;
    if (this.energy < cost) {
      this.auto = false;
      document.getElementById('btn-auto').classList.remove('active');
      UI.showDialog('⚠️', 'INSUFFICIENT ENERGY', `Need ${cost} Energy!`);
      return;
    }
    this.spinning = true;
    this.energy -= cost;
    this.spinsSinceWin++;
    this.updateHUD();
    SFX.spin();

    const results = [];
    const dur = this.turbo ? 80 : 150;
    for (let i = 0; i < 5; i++) {
      const el = document.getElementById(`reel-${i}`);
      if (!el) continue;
      el.style.transform = 'translateY(30px)';
      el.style.opacity = '0.5';
      await new Promise(r => setTimeout(r, dur));
      const sym = TarotCards.getRandomSymbol();
      results.push(sym);
      el.children[0].innerText = sym;
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
    }
    await this.evaluateResults(results);
    this.spinning = false;
    this.updateHUD();
    if (this.auto) setTimeout(() => this.spin(), this.turbo ? 300 : 700);
  },

  async evaluateResults(results) {
    document.querySelectorAll('.symbol').forEach(s => s.classList.remove('win'));
    const match = TarotCards.checkCombination(results);
    if (!match) {
      this.comboMultiplier = 1;
      if (this.spinsSinceWin > 10) { this.energy += 5; UI.showToast('PITY BONUS', '+5 Energy'); }
      document.getElementById('combo-display').innerText = 'NO COMBO';
      return;
    }
    document.querySelectorAll('.symbol').forEach(s => s.classList.add('win'));
    this.spinsSinceWin = 0;
    document.getElementById('combo-display').innerText = `✨ ${match.name} ✨`;
    await this.applyEffect(match);
    this.comboMultiplier = Math.min(3, this.comboMultiplier + 0.1);
    this.updateHUD();
  },

  async applyEffect(match) {
    const m = this.comboMultiplier;
    const eff = match.effect;

    if (eff.includes('Cellular Intel')) { const a = Math.floor(parseInt(eff.match(/\d+/)[0]) * m); CognitionSystem.cellular += a; UI.showToast('🧬 ' + match.name, `+${a} Cellular`); SFX.win(); this.addXP(150); }
    else if (eff.includes('Swarm Intel')) { const a = Math.floor(parseInt(eff.match(/\d+/)[0]) * m); CognitionSystem.swarm += a; UI.showToast('🌊 ' + match.name, `+${a} Swarm`); SFX.win(); this.addXP(150); }
    else if (eff.includes('Network Boost')) { this.energy += Math.floor(200 * m); CognitionSystem.tissue += 100; UI.showMilestone('⚡', 'BIOELECTRIC SURGE', 'Network amplified!'); SFX.jackpot(); this.addXP(120); }
    else if (eff.includes('All Intel Types')) { const a = Math.floor(100 * m); CognitionSystem.cellular += a; CognitionSystem.tissue += a; CognitionSystem.organ += a; CognitionSystem.swarm += a; UI.showMilestone('🔮', 'PROTO-COGNITION', 'All intelligence boosted!'); SFX.jackpot(); this.addXP(200); }
    else if (eff.includes('Trigger Morphogenesis')) { CognitionSystem.triggerMorphogenesis(); }
    else if (eff.includes('Create 3 Xenobots')) { for (let i = 0; i < 3; i++) setTimeout(() => CognitionSystem.spawnXenobot(), i * 300); UI.showMilestone('🧪', 'SYNTHETIC LIFE', '3 Xenobots!'); SFX.jackpot(); this.addXP(180); }
    else if (eff.includes('All Systems Level Up')) { Sim.buildings.forEach(b => { b.level++; b.value = Math.floor(b.value * 1.3); }); UI.showMilestone('💫', 'EMERGENT MIND', 'All structures evolved!'); SFX.jackpot(); this.addXP(250); }
    else if (eff.includes('Tissue Networks')) { CognitionSystem.tissue += Math.floor(150 * m); UI.showToast('🔬 ' + match.name, 'Tissue strengthened'); SFX.win(); this.addXP(80); }
    else if (eff.includes('Auto-Connect')) { CognitionSystem.bioelectricView = true; CognitionSystem.createBioelectricNetwork(); document.getElementById('bioelectric-btn').classList.add('active'); UI.showMilestone('🌀', 'SELF-ORGANIZATION', 'Network auto-formed!'); SFX.bioelectric(); this.addXP(100); }
    else if (eff.includes('Organ Systems')) { CognitionSystem.organ += Math.floor(100 * m); UI.showToast('🎯 ' + match.name, 'Organ intelligence up'); SFX.win(); this.addXP(90); }
    else if (eff.includes('All Cognition')) { const a = Math.floor(200 * m); CognitionSystem.cellular += a; CognitionSystem.tissue += a; CognitionSystem.organ += a; CognitionSystem.swarm += a; UI.showMilestone('🧬', 'SCALE-FREE MIND', 'All cognition amplified!'); SFX.jackpot(); this.addXP(300); }
    else if (eff.includes('Triple Production')) { Sim.buildings.forEach(b => b.value *= 3); UI.showMilestone('🔬', 'LIFE AS IT CAN BE', 'Production tripled!'); SFX.jackpot(); this.addXP(300); }
    else if (eff.includes('Instant Evolution')) { this.level++; CognitionSystem.cellular += 200; CognitionSystem.tissue += 200; CognitionSystem.organ += 200; CognitionSystem.swarm += 200; UI.showMilestone('⚡', 'EMBODIED INTELLIGENCE', 'Instant evolution!'); SFX.jackpot(); this.addXP(500); }
    else if (eff === 'All resources maxed') { this.energy = 999; this.materials = 999; this.credits = 999; UI.showMilestone('🌟', 'THE UNIVERSE', 'All maximized!'); SFX.jackpot(); this.addXP(500); }
    else if (eff === 'quad_bonus') { this.energy += Math.floor(100 * m); this.materials += Math.floor(50 * m); this.credits += Math.floor(75 * m); UI.showToast('🎰 FOUR OF A KIND', 'Major bonus!'); SFX.win(); this.addXP(80); }
    else if (eff === 'triple_bonus') { this.energy += Math.floor(50 * m); this.materials += Math.floor(25 * m); this.credits += Math.floor(40 * m); UI.showToast('🎰 THREE OF A KIND', 'Good combo!'); SFX.play(500, 'sine', 0.3, 0.1); this.addXP(40); }
    else if (eff === 'double_pair') { this.energy += Math.floor(30 * m); this.materials += Math.floor(15 * m); UI.showToast('🎰 TWO PAIRS', 'Nice!'); SFX.play(400, 'sine', 0.2, 0.08); this.addXP(20); }
    else if (eff === 'pair_bonus') { this.energy += Math.floor(15 * m); this.materials += Math.floor(10 * m); UI.showToast('🎰 PAIR', 'Small bonus'); SFX.play(300, 'sine', 0.15, 0.06); this.addXP(10); }
    else {
      const nums = eff.match(/\d+/g);
      if (nums) {
        if (eff.includes('Energy')) { const a = Math.floor(parseInt(nums[0]) * m); this.energy += a; UI.showToast(match.name, `+${a} Energy`); }
        else if (eff.includes('Materials')) { const a = Math.floor(parseInt(nums[0]) * m); this.materials += a; UI.showToast(match.name, `+${a} Materials`); }
        else if (eff.includes('Credits')) { const a = Math.floor(parseInt(nums[0]) * m); this.credits += a; UI.showToast(match.name, `+${a} Credits`); }
        this.addXP(20);
      }
      SFX.play(450, 'sine', 0.25, 0.08);
    }
    CognitionSystem.update();
  },

  produceResources() {
    // Tech bonuses
    this.energy += this.techBonuses.energyPerTick;
    this.materials += this.techBonuses.materialsPerTick;

    for (let b of Sim.buildings) {
      let bonus = 1;
      CognitionSystem.xenobots.forEach(x => { if (x.mesh.position.distanceTo(b.mesh.position) < 15) bonus += x.resourceBonus; });
      const val = Math.floor(b.value * bonus);
      if (b.production === 'energy') this.energy += val;
      else if (b.production === 'materials') this.materials += val;
      else if (b.production === 'credits') this.credits += val;
      else if (b.production === 'population' && Sim.entities.length < 120) {
        for (let i = 0; i < Math.min(val, 2); i++) Sim.spawnAgent();
      }
    }
    this.updateHUD();
  },

  addXP(amount) {
    this.xp += amount;
    if (this.xp >= this.xpNeeded) this.levelUp();
    this.updateXPBar();
  },

  levelUp() {
    this.level++;
    this.xp = 0;
    this.xpNeeded = Math.floor(this.xpNeeded * 1.5);
    SFX.levelUp();
    UI.showMilestone('⬆️', `ARCHITECT LEVEL ${this.level}`, 'Your mastery deepens!');
    this.energy += 50; this.materials += 20; this.credits += 30;
    this.updateXPBar();
  },

  updateXPBar() {
    document.getElementById('xp-bar').style.width = (this.xp / this.xpNeeded) * 100 + '%';
    document.getElementById('level-num').innerText = this.level;
    document.getElementById('xp-text').innerText = `${this.xp} / ${this.xpNeeded} XP`;
  },

  updateHUD() {
    document.getElementById('ui-energy').innerText = this.energy;
    document.getElementById('ui-materials').innerText = this.materials;
    document.getElementById('ui-credits').innerText = this.credits;
    document.getElementById('ui-pop').innerText = Sim.entities.length;
    document.getElementById('ui-builds').innerText = this.buildingsBuilt;
    const spinBtn = document.getElementById('btn-spin');
    spinBtn.disabled = this.energy < this.spinCost;
    spinBtn.innerText = `SPIN (${this.spinCost} E)`;

    if (this.buildingsBuilt === 10 && !this.milestones.b10) { this.milestones.b10 = true; UI.showMilestone('🏗️', 'TISSUE FORMATION', '10 structures!'); this.addXP(100); }
    if (Sim.entities.length >= 50 && !this.milestones.p50) { this.milestones.p50 = true; UI.showMilestone('🧬', 'CELL COLLECTIVE', '50 agents!'); this.addXP(150); }
    if (CognitionSystem.cellular >= 500 && !this.milestones.cog) { this.milestones.cog = true; UI.showMilestone('🧠', 'COGNITIVE EMERGENCE', 'High cellular intelligence!'); this.addXP(200); }
  }
};

/* ======================================================
   GLOBAL WINDOW FUNCTIONS
   ====================================================== */
window.initSim = async function () {
  document.getElementById('overlay').style.display = 'none';
  SFX.init();
  await Sim.init();
  Game.init();
};

window.spin = () => Game.spin();
window.toggleAuto = () => { Game.auto = !Game.auto; document.getElementById('btn-auto').classList.toggle('active'); if (Game.auto && !Game.spinning) Game.spin(); };
window.toggleTurbo = () => { Game.turbo = !Game.turbo; Sim.droneSpeed = Game.turbo ? 3 : 1; document.getElementById('btn-turbo').classList.toggle('active'); UI.showToast('TURBO', Game.turbo ? 'ON ⚡' : 'OFF'); };
window.toggleMachineCollapse = () => { Game.machineCollapsed = !Game.machineCollapsed; document.querySelector('.machine-frame').classList.toggle('collapsed'); document.querySelector('.machine-collapse-btn').innerText = Game.machineCollapsed ? '▲' : '▼'; };
window.upgradeSelected = () => { if (Sim.selectedBuilding) Sim.upgradeBuilding(Sim.selectedBuilding); };
window.toggleBioelectricView = () => CognitionSystem.toggleBioelectric();
window.triggerMorphogenesis = () => CognitionSystem.triggerMorphogenesis();
window.spawnXenobot = () => CognitionSystem.spawnXenobot();
window.camAdjust = dir => {
  if (dir === 'in') Sim.controls.dollyIn(1.3);
  else if (dir === 'out') Sim.controls.dollyOut(1.3);
  else { Sim.camera.position.set(60, 55, 60); Sim.controls.target.set(0, 5, 0); }
  Sim.controls.update();
  EduLog.log('OrbitControls.dolly()', `Camera ${dir} — OrbitControls zoom`);
};
window.toggleTechPanel = () => togglePanel('tech-panel');
window.researchTech = id => TechTree.research(id);

window.togglePanel = function(id) {
  const panel = document.getElementById(id);
  if (!panel) return;
  panel.classList.toggle('panel-collapsed');
  const btn = panel.querySelector('.panel-toggle');
  if (btn) {
    const collapsed = panel.classList.contains('panel-collapsed');
    btn.style.transform = collapsed ? 'rotate(180deg)' : '';
    btn.title = collapsed ? 'Expand' : 'Collapse';
  }
};
</script>
</body>
</html>







: CORRECT - modern pattern (always use latest version):
html
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.1/examples/jsm/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
</script>
**Use WebGPURenderer** when you need: - Custom shaders/materials using TSL (Three.js Shading Language) - Compute shaders - Advanced node-based materials
js
import * as THREE from 'three/webgpu';
const renderer = new THREE.WebGPURenderer();
await renderer.init();
### 3. TSL (Three.js Shading Language) When using WebGPURenderer, use TSL instead of raw GLSL for custom materials:
js
import { texture, uv, color } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = texture( myTexture ).mul( color( 0xff0000 ) );
### 4. NodeMaterial Classes (for WebGPU/TSL) When using TSL, use node-based materials: - MeshBasicNodeMaterial - MeshStandardNodeMaterial - MeshPhysicalNodeMaterial - LineBasicNodeMaterial - SpriteNodeMaterial ## Complete Code Examples ### Basic Scene with WebGLRenderer
html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Three.js Basic Scene</title>
  <style>
    body { margin: 0; }
  </style>
</head>
<body>
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.1/examples/jsm/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

// Controls
const controls = new OrbitControls( camera, renderer.domElement );

// Lighting
const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 5, 5, 5 );
scene.add( directionalLight );

// Mesh
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Handle resize
window.addEventListener( 'resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
} );

// Animation loop
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
</script>
</body>
</html>
### Basic Scene with WebGPURenderer and TSL
html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Three.js WebGPU Scene</title>
  <style>
    body { margin: 0; }
  </style>
</head>
<body>
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.webgpu.js",
    "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.tsl.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.1/examples/jsm/"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
import { color, positionLocal, sin, time } from 'three/tsl';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

await renderer.init();

// Controls
const controls = new OrbitControls( camera, renderer.domElement );

// Lighting
const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 5, 5, 5 );
scene.add( directionalLight );

// Custom TSL material
const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = color( 0x00ff00 ).mul( sin( time ).mul( 0.5 ).add( 0.5 ) );
material.positionNode = positionLocal.add( sin( time.add( positionLocal.y ) ).mul( 0.1 ) );

// Mesh
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Handle resize
window.addEventListener( 'resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
} );

// Animation loop
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
</script>
</body>
</html>
### Loading a GLTF Model
js
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(
  'model.glb',
  ( gltf ) => {
    scene.add( gltf.scene );
  },
  ( progress ) => {
    console.log( ( progress.loaded / progress.total * 100 ) + '% loaded' );
  },
  ( error ) => {
    console.error( 'Error loading model:', error );
  }
);
#### New With TSL the code would look like this:
js
import { texture, uv } from 'three/tsl';

const detail = texture( detailMap, uv().mul( 10 ) );

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = texture( colorMap ).mul( detail );



import * as THREE from 'three/webgpu';
import { pass } from 'three/tsl';

// Create the render pipeline
const renderPipeline = new THREE.RenderPipeline( renderer );

// Create a scene pass
const scenePass = pass( scene, camera );

// Set the output
renderPipeline.outputNode = scenePass;

// In the animation loop
function animate() {

	renderPipeline.render();

}
### Multiple Render Targets (MRT) MRT allows capturing multiple outputs from a single render pass. Instead of rendering the scene multiple times to get different data (color, normals, depth, velocity), MRT captures all of them in one draw call—significantly improving performance. #### Setting up MRT Use setMRT() with the mrt() function to define which outputs to capture:
js
import { pass, mrt, output, normalView, velocity, directionToColor } from 'three/tsl';

const scenePass = pass( scene, camera );

scenePass.setMRT( mrt( {
	output: output,                          // Final color output
	normal: directionToColor( normalView ),  // View-space normals encoded as colors
	velocity: velocity                       // Motion vectors for temporal effects
} ) );
Each MRT entry accepts any TSL node, allowing you to customize outputs using formulas, encoders, or material accessors. For example, directionToColor( normalView ) encodes view-space normals into RGB values. You can use any TSL function to transform, combine, or encode data before writing to the render target. Within a TSL function Fn( ( { material, object } ) => { ... } ), you have complete access to the current material and object being rendered, enabling full customization of outputs. #### Accessing MRT Buffers Each MRT output becomes available as a texture node via getTextureNode():
js
// Access individual buffers as texture nodes
const colorTexture = scenePass.getTextureNode( 'output' );
const normalTexture = scenePass.getTextureNode( 'normal' );
const velocityTexture = scenePass.getTextureNode( 'velocity' );

// Depth is always available, even without MRT
const depthTexture = scenePass.getTextureNode( 'depth' );
These texture nodes can be sampled, transformed, and passed to post-processing effects or other passes. #### Optimizing MRT Textures You can access the textures to optimize memory usage and bandwidth. Using smaller data types reduces GPU memory transfers, which is critical for performance on bandwidth-limited devices:
js
// Use 8-bit format for encoded normals, default is 16-bit
const normalTexture = scenePass.getTexture( 'normal' );
normalTexture.type = THREE.UnsignedByteType;
#### Dynamic Pipeline Updates The pipeline can be updated at runtime:
js
if ( showNormals ) {

	renderPipeline.outputNode = prePass;

} else {

	renderPipeline.outputNode = traaPass;

}

renderPipeline.needsUpdate = true;


js
import { grayscale, pass } from 'three/tsl';
import { gaussianBlur } from 'three/addons/tsl/display/GaussianBlurNode.js';

// Post-processing
const scenePass = pass( scene, camera );
const output = scenePass.getTextureNode(); // default parameter is 'output'

renderPipeline.outputNode = grayscale( gaussianBlur( output, 4 ) );
### Render Pass Functions for creating and managing render passes. | Name | Description | | -- | -- | | pass( scene, camera, options = {} ) | Creates a pass node for rendering a scene. | | mrt( outputNodes ) | Creates a Multiple Render Targets (MRT) node. | Example:
js
import { pass, mrt, output, emissive } from 'three/tsl';

const scenePass = pass( scene, camera );

// Setup MRT
scenePass.setMRT( mrt( {
	output: output,
	emissive: emissive
} ) );

const outputNode = scenePass.getTextureNode( 'output' );
const emissiveNode = scenePass.getTextureNode( 'emissive' );



js
import { Fn, instancedArray, instanceIndex, deltaTime } from 'three/tsl';

const count = 1000;
const positionArray = instancedArray( count, 'vec3' );

// create a compute function

const computeShader = Fn( () => {

	const position = positionArray.element( instanceIndex );

	position.x.addAssign( deltaTime );

} )().compute( count );

//

renderer.compute( computeShader );


### Core - [ARButton](https://threejs.org/docs/pages/ARButton.html.md) - [AmmoPhysics](https://threejs.org/docs/pages/AmmoPhysics.html.md) - [BasicLightingModel](https://threejs.org/docs/pages/BasicLightingModel.html.md) - [BatchedMesh](https://threejs.org/docs/pages/BatchedMesh.html.md) - [BezierInterpolant](https://threejs.org/docs/pages/BezierInterpolant.html.md) - [BitonicSort_BitonicSort](https://threejs.org/docs/pages/BitonicSort_BitonicSort.html.md) - [BlendMode](https://threejs.org/docs/pages/BlendMode.html.md) - [Bone](https://threejs.org/docs/pages/Bone.html.md) - [BooleanKeyframeTrack](https://threejs.org/docs/pages/BooleanKeyframeTrack.html.md) - [BufferAttribute](https://threejs.org/docs/pages/BufferAttribute.html.md) - [BundleGroup](https://threejs.org/docs/pages/BundleGroup.html.md) - [CCDIKSolver](https://threejs.org/docs/pages/CCDIKSolver.html.md) - [CSM](https://threejs.org/docs/pages/CSM.html.md) - [CSMFrustum](https://threejs.org/docs/pages/CSMFrustum.html.md) - [CSS2DObject](https://threejs.org/docs/pages/CSS2DObject.html.md) - [CSS2DRenderer](https://threejs.org/docs/pages/CSS2DRenderer.html.md) - [CSS3DObject](https://threejs.org/docs/pages/CSS3DObject.html.md) - [CSS3DRenderer](https://threejs.org/docs/pages/CSS3DRenderer.html.md) - [CSS3DSprite](https://threejs.org/docs/pages/CSS3DSprite.html.md) - [Cache](https://threejs.org/docs/pages/Cache.html.md) - [CanvasTarget](https://threejs.org/docs/pages/CanvasTarget.html.md) - [Capsule](https://threejs.org/docs/pages/Capsule.html.md) - [CinquefoilKnot](https://threejs.org/docs/pages/CinquefoilKnot.html.md) - [ClippingGroup](https://threejs.org/docs/pages/ClippingGroup.html.md) - [Clock](https://threejs.org/docs/pages/Clock.html.md) - [ColladaComposer](https://threejs.org/docs/pages/ColladaComposer.html.md) - [ColladaParser](https://threejs.org/docs/pages/ColladaParser.html.md) - [ColorConverter](https://threejs.org/docs/pages/ColorConverter.html.md) - [ColorEnvironment](https://threejs.org/docs/pages/ColorEnvironment.html.md) - [ColorKeyframeTrack](https://threejs.org/docs/pages/ColorKeyframeTrack.html.md) - [ConvexHull](https://threejs.org/docs/pages/ConvexHull.html.md) - [ConvexObjectBreaker](https://threejs.org/docs/pages/ConvexObjectBreaker.html.md) - [CubeRenderTarget](https://threejs.org/docs/pages/CubeRenderTarget.html.md) - [CubicInterpolant](https://threejs.org/docs/pages/CubicInterpolant.html.md) - [Cylindrical](https://threejs.org/docs/pages/Cylindrical.html.md) - [DRACOExporter](https://threejs.org/docs/pages/DRACOExporter.html.md) - [DataUtils](https://threejs.org/docs/pages/DataUtils.html.md) - [DebugEnvironment](https://threejs.org/docs/pages/DebugEnvironment.html.md) - [DecoratedTorusKnot4a](https://threejs.org/docs/pages/DecoratedTorusKnot4a.html.md) - [DecoratedTorusKnot4b](https://threejs.org/docs/pages/DecoratedTorusKnot4b.html.md) - [DecoratedTorusKnot5a](https://threejs.org/docs/pages/DecoratedTorusKnot5a.html.md) - [DecoratedTorusKnot5c](https://threejs.org/docs/pages/DecoratedTorusKnot5c.html.md) - [DirectionalLightShadow](https://threejs.org/docs/pages/DirectionalLightShadow.html.md) - [DiscreteInterpolant](https://threejs.org/docs/pages/DiscreteInterpolant.html.md) - [Earcut](https://threejs.org/docs/pages/Earcut.html.md) - [EdgeSplitModifier](https://threejs.org/docs/pages/EdgeSplitModifier.html.md) - [EffectComposer](https://threejs.org/docs/pages/EffectComposer.html.md) - [EventDispatcher](https://threejs.org/docs/pages/EventDispatcher.html.md) - [FigureEightPolynomialKnot](https://threejs.org/docs/pages/FigureEightPolynomialKnot.html.md) - [Float16BufferAttribute](https://threejs.org/docs/pages/Float16BufferAttribute.html.md) - [Float32BufferAttribute](https://threejs.org/docs/pages/Float32BufferAttribute.html.md) - [Flow](https://threejs.org/docs/pages/Flow.html.md) - [Fog](https://threejs.org/docs/pages/Fog.html.md) - [FogExp2](https://threejs.org/docs/pages/FogExp2.html.md) - [Font](https://threejs.org/docs/pages/Font.html.md) - [FullScreenQuad](https://threejs.org/docs/pages/FullScreenQuad.html.md) - [GLBufferAttribute](https://threejs.org/docs/pages/GLBufferAttribute.html.md) - [GLSLNodeBuilder](https://threejs.org/docs/pages/GLSLNodeBuilder.html.md) - [GLSLNodeFunction](https://threejs.org/docs/pages/GLSLNodeFunction.html.md) - [GLSLNodeParser](https://threejs.org/docs/pages/GLSLNodeParser.html.md) - [GLTFExporter](https://threejs.org/docs/pages/GLTFExporter.html.md) - [GPUComputationRenderer](https://threejs.org/docs/pages/GPUComputationRenderer.html.md) - [GrannyKnot](https://threejs.org/docs/pages/GrannyKnot.html.md) - [GroundedSkybox](https://threejs.org/docs/pages/GroundedSkybox.html.md) - [Group](https://threejs.org/docs/pages/Group.html.md) - [Gyroscope](https://threejs.org/docs/pages/Gyroscope.html.md) - [HTMLMesh](https://threejs.org/docs/pages/HTMLMesh.html.md) - [ImageUtils](https://threejs.org/docs/pages/ImageUtils.html.md) - [ImprovedNoise](https://threejs.org/docs/pages/ImprovedNoise.html.md) - [IndirectStorageBufferAttribute](https://threejs.org/docs/pages/IndirectStorageBufferAttribute.html.md) - [Info](https://threejs.org/docs/pages/Info.html.md) - [InspectorBase](https://threejs.org/docs/pages/InspectorBase.html.md) - [InstancedBufferAttribute](https://threejs.org/docs/pages/InstancedBufferAttribute.html.md) - [InstancedFlow](https://threejs.org/docs/pages/InstancedFlow.html.md) - [InstancedInterleavedBuffer](https://threejs.org/docs/pages/InstancedInterleavedBuffer.html.md) - [InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html.md) - [Int16BufferAttribute](https://threejs.org/docs/pages/Int16BufferAttribute.html.md) - [Int32BufferAttribute](https://threejs.org/docs/pages/Int32BufferAttribute.html.md) - [Int8BufferAttribute](https://threejs.org/docs/pages/Int8BufferAttribute.html.md) - [InteractiveGroup](https://threejs.org/docs/pages/InteractiveGroup.html.md) - [InterleavedBuffer](https://threejs.org/docs/pages/InterleavedBuffer.html.md) - [InterleavedBufferAttribute](https://threejs.org/docs/pages/InterleavedBufferAttribute.html.md) - [Interpolant](https://threejs.org/docs/pages/Interpolant.html.md) - [JoltPhysics](https://threejs.org/docs/pages/JoltPhysics.html.md) - [KTX2Exporter](https://threejs.org/docs/pages/KTX2Exporter.html.md) - [KeyframeTrack](https://threejs.org/docs/pages/KeyframeTrack.html.md) - [LDrawUtils](https://threejs.org/docs/pages/LDrawUtils.html.md) - [LOD](https://threejs.org/docs/pages/LOD.html.md) - [Layers](https://threejs.org/docs/pages/Layers.html.md) - [Lensflare](https://threejs.org/docs/pages/Lensflare.html.md) - [LensflareElement](https://threejs.org/docs/pages/LensflareElement.html.md) - [LensflareMesh](https://threejs.org/docs/pages/LensflareMesh.html.md) - [LightProbe](https://threejs.org/docs/pages/LightProbe.html.md) - [LightProbeGenerator](https://threejs.org/docs/pages/LightProbeGenerator.html.md) - [LightShadow](https://threejs.org/docs/pages/LightShadow.html.md) - [LightingModel](https://threejs.org/docs/pages/LightingModel.html.md) - [Line](https://threejs.org/docs/pages/Line.html.md) - [Line2](https://threejs.org/docs/pages/Line2.html.md) - [Line3](https://threejs.org/docs/pages/Line3.html.md) - [LineLoop](https://threejs.org/docs/pages/LineLoop.html.md) - [LineSegments](https://threejs.org/docs/pages/LineSegments.html.md) - [LineSegments2](https://threejs.org/docs/pages/LineSegments2.html.md) - [LinearInterpolant](https://threejs.org/docs/pages/LinearInterpolant.html.md) - [LoaderUtils](https://threejs.org/docs/pages/LoaderUtils.html.md) - [LoadingManager](https://threejs.org/docs/pages/LoadingManager.html.md) - [Lut](https://threejs.org/docs/pages/Lut.html.md) - [MD2Character](https://threejs.org/docs/pages/MD2Character.html.md) - [MD2CharacterComplex](https://threejs.org/docs/pages/MD2CharacterComplex.html.md) - [MarchingCubes](https://threejs.org/docs/pages/MarchingCubes.html.md) - [MathUtils](https://threejs.org/docs/pages/MathUtils.html.md) - [Mesh](https://threejs.org/docs/pages/Mesh.html.md) - [MeshSurfaceSampler](https://threejs.org/docs/pages/MeshSurfaceSampler.html.md) - [MorphAnimMesh](https://threejs.org/docs/pages/MorphAnimMesh.html.md) - [MorphBlendMesh](https://threejs.org/docs/pages/MorphBlendMesh.html.md) - [NURBSSurface](https://threejs.org/docs/pages/NURBSSurface.html.md) - [NURBSVolume](https://threejs.org/docs/pages/NURBSVolume.html.md) - [NodeAttribute](https://threejs.org/docs/pages/NodeAttribute.html.md) - [NodeBuilder](https://threejs.org/docs/pages/NodeBuilder.html.md) - [NodeCache](https://threejs.org/docs/pages/NodeCache.html.md) - [NodeCode](https://threejs.org/docs/pages/NodeCode.html.md) - [NodeError](https://threejs.org/docs/pages/NodeError.html.md) - [NodeFrame](https://threejs.org/docs/pages/NodeFrame.html.md) - [NodeFunction](https://threejs.org/docs/pages/NodeFunction.html.md) - [NodeFunctionInput](https://threejs.org/docs/pages/NodeFunctionInput.html.md) - [NodeMaterialObserver](https://threejs.org/docs/pages/NodeMaterialObserver.html.md) - [NodeParser](https://threejs.org/docs/pages/NodeParser.html.md) - [NodeUniform](https://threejs.org/docs/pages/NodeUniform.html.md) - [NodeVar](https://threejs.org/docs/pages/NodeVar.html.md) - [NodeVarying](https://threejs.org/docs/pages/NodeVarying.html.md) - [NumberKeyframeTrack](https://threejs.org/docs/pages/NumberKeyframeTrack.html.md) - [OBB](https://threejs.org/docs/pages/OBB.html.md) - [OBJExporter](https://threejs.org/docs/pages/OBJExporter.html.md) - [Object3D](https://threejs.org/docs/pages/Object3D.html.md) - [Octree](https://threejs.org/docs/pages/Octree.html.md) - [OculusHandModel](https://threejs.org/docs/pages/OculusHandModel.html.md) - [OculusHandPointerModel](https://threejs.org/docs/pages/OculusHandPointerModel.html.md) - [PLYExporter](https://threejs.org/docs/pages/PLYExporter.html.md) - [PMREMGenerator](https://threejs.org/docs/pages/PMREMGenerator.html.md) - [Path](https://threejs.org/docs/pages/Path.html.md) - [PhongLightingModel](https://threejs.org/docs/pages/PhongLightingModel.html.md) - [PhysicalLightingModel](https://threejs.org/docs/pages/PhysicalLightingModel.html.md) - [PointLightShadow](https://threejs.org/docs/pages/PointLightShadow.html.md) - [Points](https://threejs.org/docs/pages/Points.html.md) - [PostProcessing](https://threejs.org/docs/pages/PostProcessing.html.md) - [ProgressiveLightMap](https://threejs.org/docs/pages/ProgressiveLightMap.html.md) - [Projector](https://threejs.org/docs/pages/Projector.html.md) - [PropertyBinding](https://threejs.org/docs/pages/PropertyBinding.html.md) - [PropertyMixer](https://threejs.org/docs/pages/PropertyMixer.html.md) - [QuadMesh](https://threejs.org/docs/pages/QuadMesh.html.md) - [RapierPhysics](https://threejs.org/docs/pages/RapierPhysics.html.md) - [RectAreaLightTexturesLib](https://threejs.org/docs/pages/RectAreaLightTexturesLib.html.md) - [RectAreaLightUniformsLib](https://threejs.org/docs/pages/RectAreaLightUniformsLib.html.md) - [Reflector](https://threejs.org/docs/pages/Reflector.html.md) - [Refractor](https://threejs.org/docs/pages/Refractor.html.md) - [RenderPipeline](https://threejs.org/docs/pages/RenderPipeline.html.md) - [RenderTarget](https://threejs.org/docs/pages/RenderTarget.html.md) - [RenderTarget3D](https://threejs.org/docs/pages/RenderTarget3D.html.md) - [Renderer](https://threejs.org/docs/pages/Renderer.html.md) - [RoomEnvironment](https://threejs.org/docs/pages/RoomEnvironment.html.md) - [SSSLightingModel](https://threejs.org/docs/pages/SSSLightingModel.html.md) - [STLExporter](https://threejs.org/docs/pages/STLExporter.html.md) - [SVGObject](https://threejs.org/docs/pages/SVGObject.html.md) - [SVGRenderer](https://threejs.org/docs/pages/SVGRenderer.html.md) - [Scene](https://threejs.org/docs/pages/Scene.html.md) - [SceneOptimizer](https://threejs.org/docs/pages/SceneOptimizer.html.md) - [SelectionBox](https://threejs.org/docs/pages/SelectionBox.html.md) - [ShadowMapViewer](https://threejs.org/docs/pages/ShadowMapViewer.html.md) - [ShadowMaskModel](https://threejs.org/docs/pages/ShadowMaskModel.html.md) - [ShadowMesh](https://threejs.org/docs/pages/ShadowMesh.html.md) - [Shape](https://threejs.org/docs/pages/Shape.html.md) - [ShapePath](https://threejs.org/docs/pages/ShapePath.html.md) - [ShapeUtils](https://threejs.org/docs/pages/ShapeUtils.html.md) - [SimplexNoise](https://threejs.org/docs/pages/SimplexNoise.html.md) - [SimplifyModifier](https://threejs.org/docs/pages/SimplifyModifier.html.md) - [Skeleton](https://threejs.org/docs/pages/Skeleton.html.md) - [SkinnedMesh](https://threejs.org/docs/pages/SkinnedMesh.html.md) - [Sky](https://threejs.org/docs/pages/Sky.html.md) - [SkyMesh](https://threejs.org/docs/pages/SkyMesh.html.md) - [Source](https://threejs.org/docs/pages/Source.html.md) - [Spherical](https://threejs.org/docs/pages/Spherical.html.md) - [SphericalHarmonics3](https://threejs.org/docs/pages/SphericalHarmonics3.html.md) - [SpotLightShadow](https://threejs.org/docs/pages/SpotLightShadow.html.md) - [Sprite](https://threejs.org/docs/pages/Sprite.html.md) - [StackTrace](https://threejs.org/docs/pages/StackTrace.html.md) - [StorageBufferAttribute](https://threejs.org/docs/pages/StorageBufferAttribute.html.md) - [StorageInstancedBufferAttribute](https://threejs.org/docs/pages/StorageInstancedBufferAttribute.html.md) - [StringKeyframeTrack](https://threejs.org/docs/pages/StringKeyframeTrack.html.md) - [TSL](https://threejs.org/docs/pages/TSL.html.md) - [Tab](https://threejs.org/docs/pages/Tab.html.md) - [TessellateModifier](https://threejs.org/docs/pages/TessellateModifier.html.md) - [TextureUtils](https://threejs.org/docs/pages/TextureUtils.html.md) - [TiledLighting](https://threejs.org/docs/pages/TiledLighting.html.md) - [Timer](https://threejs.org/docs/pages/Timer.html.md) - [TimestampQueryPool](https://threejs.org/docs/pages/TimestampQueryPool.html.md) - [ToonLightingModel](https://threejs.org/docs/pages/ToonLightingModel.html.md) - [TorusKnot](https://threejs.org/docs/pages/TorusKnot.html.md) - [Transpiler](https://threejs.org/docs/pages/Transpiler.html.md) - [TrefoilKnot](https://threejs.org/docs/pages/TrefoilKnot.html.md) - [TrefoilPolynomialKnot](https://threejs.org/docs/pages/TrefoilPolynomialKnot.html.md) - [TubePainter](https://threejs.org/docs/pages/TubePainter.html.md) - [USDComposer](https://threejs.org/docs/pages/USDComposer.html.md) - [USDZExporter](https://threejs.org/docs/pages/USDZExporter.html.md) - [Uint16BufferAttribute](https://threejs.org/docs/pages/Uint16BufferAttribute.html.md) - [Uint32BufferAttribute](https://threejs.org/docs/pages/Uint32BufferAttribute.html.md) - [Uint8BufferAttribute](https://threejs.org/docs/pages/Uint8BufferAttribute.html.md) - [Uint8ClampedBufferAttribute](https://threejs.org/docs/pages/Uint8ClampedBufferAttribute.html.md) - [Uniform](https://threejs.org/docs/pages/Uniform.html.md) - [UniformsGroup](https://threejs.org/docs/pages/UniformsGroup.html.md) - [VRButton](https://threejs.org/docs/pages/VRButton.html.md) - [Volume](https://threejs.org/docs/pages/Volume.html.md) - [VolumeSlice](https://threejs.org/docs/pages/VolumeSlice.html.md) - [VolumetricLightingModel](https://threejs.org/docs/pages/VolumetricLightingModel.html.md) - [WGSLNodeBuilder](https://threejs.org/docs/pages/WGSLNodeBuilder.html.md) - [WGSLNodeFunction](https://threejs.org/docs/pages/WGSLNodeFunction.html.md) - [WGSLNodeParser](https://threejs.org/docs/pages/WGSLNodeParser.html.md) - [Water](https://threejs.org/docs/pages/Water.html.md) - [WaterMesh](https://threejs.org/docs/pages/WaterMesh.html.md) - [WebGL](https://threejs.org/docs/pages/WebGL.html.md) - [WebGL3DRenderTarget](https://threejs.org/docs/pages/WebGL3DRenderTarget.html.md) - [WebGLArrayRenderTarget](https://threejs.org/docs/pages/WebGLArrayRenderTarget.html.md) - [WebGLCubeRenderTarget](https://threejs.org/docs/pages/WebGLCubeRenderTarget.html.md) - [WebGLRenderTarget](https://threejs.org/docs/pages/WebGLRenderTarget.html.md) - [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html.md) - [WebGLTimestampQueryPool](https://threejs.org/docs/pages/WebGLTimestampQueryPool.html.md) - [WebGPU](https://threejs.org/docs/pages/WebGPU.html.md) - [WebGPURenderer](https://threejs.org/docs/pages/WebGPURenderer.html.md) - [WebGPUTimestampQueryPool](https://threejs.org/docs/pages/WebGPUTimestampQueryPool.html.md) - [Wireframe](https://threejs.org/docs/pages/Wireframe.html.md) - [WireframeGeometry2](https://threejs.org/docs/pages/WireframeGeometry2.html.md) - [WorkerPool](https://threejs.org/docs/pages/WorkerPool.html.md) ### Cameras - [ArrayCamera](https://threejs.org/docs/pages/ArrayCamera.html.md) - [Camera](https://threejs.org/docs/pages/Camera.html.md) - [CubeCamera](https://threejs.org/docs/pages/CubeCamera.html.md) - [OrthographicCamera](https://threejs.org/docs/pages/OrthographicCamera.html.md) - [PerspectiveCamera](https://threejs.org/docs/pages/PerspectiveCamera.html.md) - [StereoCamera](https://threejs.org/docs/pages/StereoCamera.html.md) ### Lights - [AmbientLight](https://threejs.org/docs/pages/AmbientLight.html.md) - [DirectionalLight](https://threejs.org/docs/pages/DirectionalLight.html.md) - [HemisphereLight](https://threejs.org/docs/pages/HemisphereLight.html.md) - [IESSpotLight](https://threejs.org/docs/pages/IESSpotLight.html.md) - [Light](https://threejs.org/docs/pages/Light.html.md) - [PointLight](https://threejs.org/docs/pages/PointLight.html.md) - [ProjectorLight](https://threejs.org/docs/pages/ProjectorLight.html.md) - [RectAreaLight](https://threejs.org/docs/pages/RectAreaLight.html.md) - [SpotLight](https://threejs.org/docs/pages/SpotLight.html.md) - [XREstimatedLight](https://threejs.org/docs/pages/XREstimatedLight.html.md) ### Materials - [LDrawConditionalLineMaterial](https://threejs.org/docs/pages/LDrawConditionalLineMaterial.html.md) - [Line2NodeMaterial](https://threejs.org/docs/pages/Line2NodeMaterial.html.md) - [LineBasicMaterial](https://threejs.org/docs/pages/LineBasicMaterial.html.md) - [LineBasicNodeMaterial](https://threejs.org/docs/pages/LineBasicNodeMaterial.html.md) - [LineDashedMaterial](https://threejs.org/docs/pages/LineDashedMaterial.html.md) - [LineDashedNodeMaterial](https://threejs.org/docs/pages/LineDashedNodeMaterial.html.md) - [LineMaterial](https://threejs.org/docs/pages/LineMaterial.html.md) - [Material](https://threejs.org/docs/pages/Material.html.md) - [MeshBasicMaterial](https://threejs.org/docs/pages/MeshBasicMaterial.html.md) - [MeshBasicNodeMaterial](https://threejs.org/docs/pages/MeshBasicNodeMaterial.html.md) - [MeshDepthMaterial](https://threejs.org/docs/pages/MeshDepthMaterial.html.md) - [MeshDistanceMaterial](https://threejs.org/docs/pages/MeshDistanceMaterial.html.md) - [MeshLambertMaterial](https://threejs.org/docs/pages/MeshLambertMaterial.html.md) - [MeshLambertNodeMaterial](https://threejs.org/docs/pages/MeshLambertNodeMaterial.html.md) - [MeshMatcapMaterial](https://threejs.org/docs/pages/MeshMatcapMaterial.html.md) - [MeshMatcapNodeMaterial](https://threejs.org/docs/pages/MeshMatcapNodeMaterial.html.md) - [MeshNormalMaterial](https://threejs.org/docs/pages/MeshNormalMaterial.html.md) - [MeshNormalNodeMaterial](https://threejs.org/docs/pages/MeshNormalNodeMaterial.html.md) - [MeshPhongMaterial](https://threejs.org/docs/pages/MeshPhongMaterial.html.md) - [MeshPhongNodeMaterial](https://threejs.org/docs/pages/MeshPhongNodeMaterial.html.md) - [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html.md) - [MeshPhysicalNodeMaterial](https://threejs.org/docs/pages/MeshPhysicalNodeMaterial.html.md) - [MeshSSSNodeMaterial](https://threejs.org/docs/pages/MeshSSSNodeMaterial.html.md) - [MeshStandardMaterial](https://threejs.org/docs/pages/MeshStandardMaterial.html.md) - [MeshStandardNodeMaterial](https://threejs.org/docs/pages/MeshStandardNodeMaterial.html.md) - [MeshToonMaterial](https://threejs.org/docs/pages/MeshToonMaterial.html.md) - [MeshToonNodeMaterial](https://threejs.org/docs/pages/MeshToonNodeMaterial.html.md) - [NodeMaterial](https://threejs.org/docs/pages/NodeMaterial.html.md) - [PointsMaterial](https://threejs.org/docs/pages/PointsMaterial.html.md) - [PointsNodeMaterial](https://threejs.org/docs/pages/PointsNodeMaterial.html.md) - [RawShaderMaterial](https://threejs.org/docs/pages/RawShaderMaterial.html.md) - [ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html.md) - [ShadowMaterial](https://threejs.org/docs/pages/ShadowMaterial.html.md) - [ShadowNodeMaterial](https://threejs.org/docs/pages/ShadowNodeMaterial.html.md) - [SpriteMaterial](https://threejs.org/docs/pages/SpriteMaterial.html.md) - [SpriteNodeMaterial](https://threejs.org/docs/pages/SpriteNodeMaterial.html.md) - [VolumeNodeMaterial](https://threejs.org/docs/pages/VolumeNodeMaterial.html.md) - [WoodNodeMaterial](https://threejs.org/docs/pages/WoodNodeMaterial.html.md) ### Geometries - [BoxGeometry](https://threejs.org/docs/pages/BoxGeometry.html.md) - [BoxLineGeometry](https://threejs.org/docs/pages/BoxLineGeometry.html.md) - [BufferGeometry](https://threejs.org/docs/pages/BufferGeometry.html.md) - [CapsuleGeometry](https://threejs.org/docs/pages/CapsuleGeometry.html.md) - [CircleGeometry](https://threejs.org/docs/pages/CircleGeometry.html.md) - [ConeGeometry](https://threejs.org/docs/pages/ConeGeometry.html.md) - [ConvexGeometry](https://threejs.org/docs/pages/ConvexGeometry.html.md) - [CylinderGeometry](https://threejs.org/docs/pages/CylinderGeometry.html.md) - [DecalGeometry](https://threejs.org/docs/pages/DecalGeometry.html.md) - [DodecahedronGeometry](https://threejs.org/docs/pages/DodecahedronGeometry.html.md) - [EdgesGeometry](https://threejs.org/docs/pages/EdgesGeometry.html.md) - [ExtrudeGeometry](https://threejs.org/docs/pages/ExtrudeGeometry.html.md) - [IcosahedronGeometry](https://threejs.org/docs/pages/IcosahedronGeometry.html.md) - [InstancedBufferGeometry](https://threejs.org/docs/pages/InstancedBufferGeometry.html.md) - [LatheGeometry](https://threejs.org/docs/pages/LatheGeometry.html.md) - [LineGeometry](https://threejs.org/docs/pages/LineGeometry.html.md) - [LineSegmentsGeometry](https://threejs.org/docs/pages/LineSegmentsGeometry.html.md) - [OctahedronGeometry](https://threejs.org/docs/pages/OctahedronGeometry.html.md) - [ParametricGeometry](https://threejs.org/docs/pages/ParametricGeometry.html.md) - [PlaneGeometry](https://threejs.org/docs/pages/PlaneGeometry.html.md) - [PolyhedronGeometry](https://threejs.org/docs/pages/PolyhedronGeometry.html.md) - [RingGeometry](https://threejs.org/docs/pages/RingGeometry.html.md) - [RollerCoasterGeometry](https://threejs.org/docs/pages/RollerCoasterGeometry.html.md) - [RollerCoasterLiftersGeometry](https://threejs.org/docs/pages/RollerCoasterLiftersGeometry.html.md) - [RollerCoasterShadowGeometry](https://threejs.org/docs/pages/RollerCoasterShadowGeometry.html.md) - [RoundedBoxGeometry](https://threejs.org/docs/pages/RoundedBoxGeometry.html.md) - [ShapeGeometry](https://threejs.org/docs/pages/ShapeGeometry.html.md) - [SkyGeometry](https://threejs.org/docs/pages/SkyGeometry.html.md) - [SphereGeometry](https://threejs.org/docs/pages/SphereGeometry.html.md) - [TeapotGeometry](https://threejs.org/docs/pages/TeapotGeometry.html.md) - [TetrahedronGeometry](https://threejs.org/docs/pages/TetrahedronGeometry.html.md) - [TextGeometry](https://threejs.org/docs/pages/TextGeometry.html.md) - [TorusGeometry](https://threejs.org/docs/pages/TorusGeometry.html.md) - [TorusKnotGeometry](https://threejs.org/docs/pages/TorusKnotGeometry.html.md) - [TreesGeometry](https://threejs.org/docs/pages/TreesGeometry.html.md) - [TubeGeometry](https://threejs.org/docs/pages/TubeGeometry.html.md) - [WireframeGeometry](https://threejs.org/docs/pages/WireframeGeometry.html.md) ### Textures - [CanvasTexture](https://threejs.org/docs/pages/CanvasTexture.html.md) - [CompressedArrayTexture](https://threejs.org/docs/pages/CompressedArrayTexture.html.md) - [CompressedCubeTexture](https://threejs.org/docs/pages/CompressedCubeTexture.html.md) - [CompressedTexture](https://threejs.org/docs/pages/CompressedTexture.html.md) - [CubeDepthTexture](https://threejs.org/docs/pages/CubeDepthTexture.html.md) - [CubeTexture](https://threejs.org/docs/pages/CubeTexture.html.md) - [Data3DTexture](https://threejs.org/docs/pages/Data3DTexture.html.md) - [DataArrayTexture](https://threejs.org/docs/pages/DataArrayTexture.html.md) - [DataTexture](https://threejs.org/docs/pages/DataTexture.html.md) - [DepthTexture](https://threejs.org/docs/pages/DepthTexture.html.md) - [ExternalTexture](https://threejs.org/docs/pages/ExternalTexture.html.md) - [FlakesTexture](https://threejs.org/docs/pages/FlakesTexture.html.md) - [FramebufferTexture](https://threejs.org/docs/pages/FramebufferTexture.html.md) - [Storage3DTexture](https://threejs.org/docs/pages/Storage3DTexture.html.md) - [StorageArrayTexture](https://threejs.org/docs/pages/StorageArrayTexture.html.md) - [StorageTexture](https://threejs.org/docs/pages/StorageTexture.html.md) - [Texture](https://threejs.org/docs/pages/Texture.html.md) - [VideoFrameTexture](https://threejs.org/docs/pages/VideoFrameTexture.html.md) - [VideoTexture](https://threejs.org/docs/pages/VideoTexture.html.md) ### Loaders - [AMFLoader](https://threejs.org/docs/pages/AMFLoader.html.md) - [AnimationLoader](https://threejs.org/docs/pages/AnimationLoader.html.md) - [AudioLoader](https://threejs.org/docs/pages/AudioLoader.html.md) - [BVHLoader](https://threejs.org/docs/pages/BVHLoader.html.md) - [BufferGeometryLoader](https://threejs.org/docs/pages/BufferGeometryLoader.html.md) - [ColladaLoader](https://threejs.org/docs/pages/ColladaLoader.html.md) - [CompressedTextureLoader](https://threejs.org/docs/pages/CompressedTextureLoader.html.md) - [CubeTextureLoader](https://threejs.org/docs/pages/CubeTextureLoader.html.md) - [DDSLoader](https://threejs.org/docs/pages/DDSLoader.html.md) - [DRACOLoader](https://threejs.org/docs/pages/DRACOLoader.html.md) - [DataTextureLoader](https://threejs.org/docs/pages/DataTextureLoader.html.md) - [EXRLoader](https://threejs.org/docs/pages/EXRLoader.html.md) - [FBXLoader](https://threejs.org/docs/pages/FBXLoader.html.md) - [FileLoader](https://threejs.org/docs/pages/FileLoader.html.md) - [FontLoader](https://threejs.org/docs/pages/FontLoader.html.md) - [GCodeLoader](https://threejs.org/docs/pages/GCodeLoader.html.md) - [GLTFLoader](https://threejs.org/docs/pages/GLTFLoader.html.md) - [HDRCubeTextureLoader](https://threejs.org/docs/pages/HDRCubeTextureLoader.html.md) - [HDRLoader](https://threejs.org/docs/pages/HDRLoader.html.md) - [IESLoader](https://threejs.org/docs/pages/IESLoader.html.md) - [ImageBitmapLoader](https://threejs.org/docs/pages/ImageBitmapLoader.html.md) - [ImageLoader](https://threejs.org/docs/pages/ImageLoader.html.md) - [KMZLoader](https://threejs.org/docs/pages/KMZLoader.html.md) - [KTX2Loader](https://threejs.org/docs/pages/KTX2Loader.html.md) - [KTXLoader](https://threejs.org/docs/pages/KTXLoader.html.md) - [LDrawLoader](https://threejs.org/docs/pages/LDrawLoader.html.md) - [LUT3dlLoader](https://threejs.org/docs/pages/LUT3dlLoader.html.md) - [LUTCubeLoader](https://threejs.org/docs/pages/LUTCubeLoader.html.md) - [LUTImageLoader](https://threejs.org/docs/pages/LUTImageLoader.html.md) - [LWOLoader](https://threejs.org/docs/pages/LWOLoader.html.md) - [Loader](https://threejs.org/docs/pages/Loader.html.md) - [LottieLoader](https://threejs.org/docs/pages/LottieLoader.html.md) - [MD2Loader](https://threejs.org/docs/pages/MD2Loader.html.md) - [MDDLoader](https://threejs.org/docs/pages/MDDLoader.html.md) - [MTLLoader](https://threejs.org/docs/pages/MTLLoader.html.md) - [MaterialLoader](https://threejs.org/docs/pages/MaterialLoader.html.md) - [MaterialXLoader](https://threejs.org/docs/pages/MaterialXLoader.html.md) - [NRRDLoader](https://threejs.org/docs/pages/NRRDLoader.html.md) - [NodeLoader](https://threejs.org/docs/pages/NodeLoader.html.md) - [NodeMaterialLoader](https://threejs.org/docs/pages/NodeMaterialLoader.html.md) - [NodeObjectLoader](https://threejs.org/docs/pages/NodeObjectLoader.html.md) - [OBJLoader](https://threejs.org/docs/pages/OBJLoader.html.md) - [ObjectLoader](https://threejs.org/docs/pages/ObjectLoader.html.md) - [PCDLoader](https://threejs.org/docs/pages/PCDLoader.html.md) - [PDBLoader](https://threejs.org/docs/pages/PDBLoader.html.md) - [PLYLoader](https://threejs.org/docs/pages/PLYLoader.html.md) - [PVRLoader](https://threejs.org/docs/pages/PVRLoader.html.md) - [Rhino3dmLoader](https://threejs.org/docs/pages/Rhino3dmLoader.html.md) - [STLLoader](https://threejs.org/docs/pages/STLLoader.html.md) - [SVGLoader](https://threejs.org/docs/pages/SVGLoader.html.md) - [TDSLoader](https://threejs.org/docs/pages/TDSLoader.html.md) - [TGALoader](https://threejs.org/docs/pages/TGALoader.html.md) - [TIFFLoader](https://threejs.org/docs/pages/TIFFLoader.html.md) - [TTFLoader](https://threejs.org/docs/pages/TTFLoader.html.md) - [TextureLoader](https://threejs.org/docs/pages/TextureLoader.html.md) - [ThreeMFLoader](https://threejs.org/docs/pages/ThreeMFLoader.html.md) - [USDLoader](https://threejs.org/docs/pages/USDLoader.html.md) - [UltraHDRLoader](https://threejs.org/docs/pages/UltraHDRLoader.html.md) - [VOXLoader](https://threejs.org/docs/pages/VOXLoader.html.md) - [VRMLLoader](https://threejs.org/docs/pages/VRMLLoader.html.md) - [VTKLoader](https://threejs.org/docs/pages/VTKLoader.html.md) - [XYZLoader](https://threejs.org/docs/pages/XYZLoader.html.md) ### Controls - [ArcballControls](https://threejs.org/docs/pages/ArcballControls.html.md) - [Controls](https://threejs.org/docs/pages/Controls.html.md) - [DragControls](https://threejs.org/docs/pages/DragControls.html.md) - [FirstPersonControls](https://threejs.org/docs/pages/FirstPersonControls.html.md) - [FlyControls](https://threejs.org/docs/pages/FlyControls.html.md) - [MapControls](https://threejs.org/docs/pages/MapControls.html.md) - [OrbitControls](https://threejs.org/docs/pages/OrbitControls.html.md) - [PointerLockControls](https://threejs.org/docs/pages/PointerLockControls.html.md) - [TrackballControls](https://threejs.org/docs/pages/TrackballControls.html.md) - [TransformControls](https://threejs.org/docs/pages/TransformControls.html.md) ### Helpers - [AnimationPathHelper](https://threejs.org/docs/pages/AnimationPathHelper.html.md) - [ArrowHelper](https://threejs.org/docs/pages/ArrowHelper.html.md) - [AxesHelper](https://threejs.org/docs/pages/AxesHelper.html.md) - [Box3Helper](https://threejs.org/docs/pages/Box3Helper.html.md) - [BoxHelper](https://threejs.org/docs/pages/BoxHelper.html.md) - [CCDIKHelper](https://threejs.org/docs/pages/CCDIKHelper.html.md) - [CSMHelper](https://threejs.org/docs/pages/CSMHelper.html.md) - [CameraHelper](https://threejs.org/docs/pages/CameraHelper.html.md) - [DirectionalLightHelper](https://threejs.org/docs/pages/DirectionalLightHelper.html.md) - [GridHelper](https://threejs.org/docs/pages/GridHelper.html.md) - [HemisphereLightHelper](https://threejs.org/docs/pages/HemisphereLightHelper.html.md) - [LightProbeHelper](https://threejs.org/docs/pages/LightProbeHelper.html.md) - [OctreeHelper](https://threejs.org/docs/pages/OctreeHelper.html.md) - [PlaneHelper](https://threejs.org/docs/pages/PlaneHelper.html.md) - [PointLightHelper](https://threejs.org/docs/pages/PointLightHelper.html.md) - [PolarGridHelper](https://threejs.org/docs/pages/PolarGridHelper.html.md) - [PositionalAudioHelper](https://threejs.org/docs/pages/PositionalAudioHelper.html.md) - [RapierHelper](https://threejs.org/docs/pages/RapierHelper.html.md) - [RectAreaLightHelper](https://threejs.org/docs/pages/RectAreaLightHelper.html.md) - [SelectionHelper](https://threejs.org/docs/pages/SelectionHelper.html.md) - [SkeletonHelper](https://threejs.org/docs/pages/SkeletonHelper.html.md) - [SpotLightHelper](https://threejs.org/docs/pages/SpotLightHelper.html.md) - [TextureHelper](https://threejs.org/docs/pages/TextureHelper.html.md) - [TileShadowNodeHelper](https://threejs.org/docs/pages/TileShadowNodeHelper.html.md) - [VertexNormalsHelper](https://threejs.org/docs/pages/VertexNormalsHelper.html.md) - [VertexTangentsHelper](https://threejs.org/docs/pages/VertexTangentsHelper.html.md) - [ViewHelper](https://threejs.org/docs/pages/ViewHelper.html.md) ### Animation - [AnimationAction](https://threejs.org/docs/pages/AnimationAction.html.md) - [AnimationClip](https://threejs.org/docs/pages/AnimationClip.html.md) - [AnimationClipCreator](https://threejs.org/docs/pages/AnimationClipCreator.html.md) - [AnimationMixer](https://threejs.org/docs/pages/AnimationMixer.html.md) - [AnimationObjectGroup](https://threejs.org/docs/pages/AnimationObjectGroup.html.md) - [AnimationUtils](https://threejs.org/docs/pages/AnimationUtils.html.md) ### Audio - [Audio](https://threejs.org/docs/pages/Audio.html.md) - [AudioAnalyser](https://threejs.org/docs/pages/AudioAnalyser.html.md) - [AudioContext](https://threejs.org/docs/pages/AudioContext.html.md) - [AudioListener](https://threejs.org/docs/pages/AudioListener.html.md) - [PositionalAudio](https://threejs.org/docs/pages/PositionalAudio.html.md) ### Math - [Box2](https://threejs.org/docs/pages/Box2.html.md) - [Box3](https://threejs.org/docs/pages/Box3.html.md) - [Color](https://threejs.org/docs/pages/Color.html.md) - [Euler](https://threejs.org/docs/pages/Euler.html.md) - [Frustum](https://threejs.org/docs/pages/Frustum.html.md) - [FrustumArray](https://threejs.org/docs/pages/FrustumArray.html.md) - [Matrix2](https://threejs.org/docs/pages/Matrix2.html.md) - [Matrix3](https://threejs.org/docs/pages/Matrix3.html.md) - [Matrix4](https://threejs.org/docs/pages/Matrix4.html.md) - [Plane](https://threejs.org/docs/pages/Plane.html.md) - [Quaternion](https://threejs.org/docs/pages/Quaternion.html.md) - [QuaternionKeyframeTrack](https://threejs.org/docs/pages/QuaternionKeyframeTrack.html.md) - [QuaternionLinearInterpolant](https://threejs.org/docs/pages/QuaternionLinearInterpolant.html.md) - [Ray](https://threejs.org/docs/pages/Ray.html.md) - [Raycaster](https://threejs.org/docs/pages/Raycaster.html.md) - [Sphere](https://threejs.org/docs/pages/Sphere.html.md) - [Triangle](https://threejs.org/docs/pages/Triangle.html.md) - [Vector2](https://threejs.org/docs/pages/Vector2.html.md) - [Vector3](https://threejs.org/docs/pages/Vector3.html.md) - [Vector4](https://threejs.org/docs/pages/Vector4.html.md) - [VectorKeyframeTrack](https://threejs.org/docs/pages/VectorKeyframeTrack.html.md) ### Curves - [ArcCurve](https://threejs.org/docs/pages/ArcCurve.html.md) - [CatmullRomCurve3](https://threejs.org/docs/pages/CatmullRomCurve3.html.md) - [CubicBezierCurve](https://threejs.org/docs/pages/CubicBezierCurve.html.md) - [CubicBezierCurve3](https://threejs.org/docs/pages/CubicBezierCurve3.html.md) - [Curve](https://threejs.org/docs/pages/Curve.html.md) - [CurvePath](https://threejs.org/docs/pages/CurvePath.html.md) - [EllipseCurve](https://threejs.org/docs/pages/EllipseCurve.html.md) - [HeartCurve](https://threejs.org/docs/pages/HeartCurve.html.md) - [HelixCurve](https://threejs.org/docs/pages/HelixCurve.html.md) - [KnotCurve](https://threejs.org/docs/pages/KnotCurve.html.md) - [LineCurve](https://threejs.org/docs/pages/LineCurve.html.md) - [LineCurve3](https://threejs.org/docs/pages/LineCurve3.html.md) - [NURBSCurve](https://threejs.org/docs/pages/NURBSCurve.html.md) - [QuadraticBezierCurve](https://threejs.org/docs/pages/QuadraticBezierCurve.html.md) - [QuadraticBezierCurve3](https://threejs.org/docs/pages/QuadraticBezierCurve3.html.md) - [SplineCurve](https://threejs.org/docs/pages/SplineCurve.html.md) - [VivianiCurve](https://threejs.org/docs/pages/VivianiCurve.html.md) ### Effects - [AnaglyphEffect](https://threejs.org/docs/pages/AnaglyphEffect.html.md) - [AsciiEffect](https://threejs.org/docs/pages/AsciiEffect.html.md) - [OutlineEffect](https://threejs.org/docs/pages/OutlineEffect.html.md) - [ParallaxBarrierEffect](https://threejs.org/docs/pages/ParallaxBarrierEffect.html.md) - [StereoEffect](https://threejs.org/docs/pages/StereoEffect.html.md) ### Post-Processing - [AfterimagePass](https://threejs.org/docs/pages/AfterimagePass.html.md) - [AnaglyphPassNode](https://threejs.org/docs/pages/AnaglyphPassNode.html.md) - [BloomPass](https://threejs.org/docs/pages/BloomPass.html.md) - [BokehPass](https://threejs.org/docs/pages/BokehPass.html.md) - [ClearMaskPass](https://threejs.org/docs/pages/ClearMaskPass.html.md) - [ClearPass](https://threejs.org/docs/pages/ClearPass.html.md) - [CubeTexturePass](https://threejs.org/docs/pages/CubeTexturePass.html.md) - [DotScreenPass](https://threejs.org/docs/pages/DotScreenPass.html.md) - [FXAAPass](https://threejs.org/docs/pages/FXAAPass.html.md) - [FilmPass](https://threejs.org/docs/pages/FilmPass.html.md) - [GTAOPass](https://threejs.org/docs/pages/GTAOPass.html.md) - [GlitchPass](https://threejs.org/docs/pages/GlitchPass.html.md) - [HalftonePass](https://threejs.org/docs/pages/HalftonePass.html.md) - [LUTPass](https://threejs.org/docs/pages/LUTPass.html.md) - [MaskPass](https://threejs.org/docs/pages/MaskPass.html.md) - [OutlinePass](https://threejs.org/docs/pages/OutlinePass.html.md) - [OutputPass](https://threejs.org/docs/pages/OutputPass.html.md) - [ParallaxBarrierPassNode](https://threejs.org/docs/pages/ParallaxBarrierPassNode.html.md) - [Pass](https://threejs.org/docs/pages/Pass.html.md) - [PassNode](https://threejs.org/docs/pages/PassNode.html.md) - [PixelationPassNode](https://threejs.org/docs/pages/PixelationPassNode.html.md) - [ReflectorForSSRPass](https://threejs.org/docs/pages/ReflectorForSSRPass.html.md) - [RenderPass](https://threejs.org/docs/pages/RenderPass.html.md) - [RenderPixelatedPass](https://threejs.org/docs/pages/RenderPixelatedPass.html.md) - [RenderTransitionPass](https://threejs.org/docs/pages/RenderTransitionPass.html.md) - [RetroPassNode](https://threejs.org/docs/pages/RetroPassNode.html.md) - [SAOPass](https://threejs.org/docs/pages/SAOPass.html.md) - [SMAAPass](https://threejs.org/docs/pages/SMAAPass.html.md) - [SSAAPassNode](https://threejs.org/docs/pages/SSAAPassNode.html.md) - [SSAARenderPass](https://threejs.org/docs/pages/SSAARenderPass.html.md) - [SSAOPass](https://threejs.org/docs/pages/SSAOPass.html.md) - [SSRPass](https://threejs.org/docs/pages/SSRPass.html.md) - [SavePass](https://threejs.org/docs/pages/SavePass.html.md) - [ShaderPass](https://threejs.org/docs/pages/ShaderPass.html.md) - [StereoCompositePassNode](https://threejs.org/docs/pages/StereoCompositePassNode.html.md) - [StereoPassNode](https://threejs.org/docs/pages/StereoPassNode.html.md) - [TAARenderPass](https://threejs.org/docs/pages/TAARenderPass.html.md) - [TexturePass](https://threejs.org/docs/pages/TexturePass.html.md) - [ToonOutlinePassNode](https://threejs.org/docs/pages/ToonOutlinePassNode.html.md) - [UnrealBloomPass](https://threejs.org/docs/pages/UnrealBloomPass.html.md) ### Nodes (TSL) - [AONode](https://threejs.org/docs/pages/AONode.html.md) - [AfterImageNode](https://threejs.org/docs/pages/AfterImageNode.html.md) - [AmbientLightNode](https://threejs.org/docs/pages/AmbientLightNode.html.md) - [AnalyticLightNode](https://threejs.org/docs/pages/AnalyticLightNode.html.md) - [AnamorphicNode](https://threejs.org/docs/pages/AnamorphicNode.html.md) - [ArrayElementNode](https://threejs.org/docs/pages/ArrayElementNode.html.md) - [ArrayNode](https://threejs.org/docs/pages/ArrayNode.html.md) - [AssignNode](https://threejs.org/docs/pages/AssignNode.html.md) - [AtomicFunctionNode](https://threejs.org/docs/pages/AtomicFunctionNode.html.md) - [AttributeNode](https://threejs.org/docs/pages/AttributeNode.html.md) - [BarrierNode](https://threejs.org/docs/pages/BarrierNode.html.md) - [BasicEnvironmentNode](https://threejs.org/docs/pages/BasicEnvironmentNode.html.md) - [BasicLightMapNode](https://threejs.org/docs/pages/BasicLightMapNode.html.md) - [BatchNode](https://threejs.org/docs/pages/BatchNode.html.md) - [BilateralBlurNode](https://threejs.org/docs/pages/BilateralBlurNode.html.md) - [BitcastNode](https://threejs.org/docs/pages/BitcastNode.html.md) - [BitcountNode](https://threejs.org/docs/pages/BitcountNode.html.md) - [BloomNode](https://threejs.org/docs/pages/BloomNode.html.md) - [BufferAttributeNode](https://threejs.org/docs/pages/BufferAttributeNode.html.md) - [BufferNode](https://threejs.org/docs/pages/BufferNode.html.md) - [BuiltinNode](https://threejs.org/docs/pages/BuiltinNode.html.md) - [BumpMapNode](https://threejs.org/docs/pages/BumpMapNode.html.md) - [BypassNode](https://threejs.org/docs/pages/BypassNode.html.md) - [CSMShadowNode](https://threejs.org/docs/pages/CSMShadowNode.html.md) - [ChromaticAberrationNode](https://threejs.org/docs/pages/ChromaticAberrationNode.html.md) - [ClippingNode](https://threejs.org/docs/pages/ClippingNode.html.md) - [CodeNode](https://threejs.org/docs/pages/CodeNode.html.md) - [ColorSpaceNode](https://threejs.org/docs/pages/ColorSpaceNode.html.md) - [ComputeBuiltinNode](https://threejs.org/docs/pages/ComputeBuiltinNode.html.md) - [ComputeNode](https://threejs.org/docs/pages/ComputeNode.html.md) - [ConditionalNode](https://threejs.org/docs/pages/ConditionalNode.html.md) - [ConstNode](https://threejs.org/docs/pages/ConstNode.html.md) - [ContextNode](https://threejs.org/docs/pages/ContextNode.html.md) - [ConvertNode](https://threejs.org/docs/pages/ConvertNode.html.md) - [CubeMapNode](https://threejs.org/docs/pages/CubeMapNode.html.md) - [CubeTextureNode](https://threejs.org/docs/pages/CubeTextureNode.html.md) - [DenoiseNode](https://threejs.org/docs/pages/DenoiseNode.html.md) - [DepthOfFieldNode](https://threejs.org/docs/pages/DepthOfFieldNode.html.md) - [DirectionalLightNode](https://threejs.org/docs/pages/DirectionalLightNode.html.md) - [DotScreenNode](https://threejs.org/docs/pages/DotScreenNode.html.md) - [EnvironmentNode](https://threejs.org/docs/pages/EnvironmentNode.html.md) - [EventNode](https://threejs.org/docs/pages/EventNode.html.md) - [ExpressionNode](https://threejs.org/docs/pages/ExpressionNode.html.md) - [FXAANode](https://threejs.org/docs/pages/FXAANode.html.md) - [FilmNode](https://threejs.org/docs/pages/FilmNode.html.md) - [FlipNode](https://threejs.org/docs/pages/FlipNode.html.md) - [FrontFacingNode](https://threejs.org/docs/pages/FrontFacingNode.html.md) - [FunctionCallNode](https://threejs.org/docs/pages/FunctionCallNode.html.md) - [FunctionNode](https://threejs.org/docs/pages/FunctionNode.html.md) - [FunctionOverloadingNode](https://threejs.org/docs/pages/FunctionOverloadingNode.html.md) - [GTAONode](https://threejs.org/docs/pages/GTAONode.html.md) - [GaussianBlurNode](https://threejs.org/docs/pages/GaussianBlurNode.html.md) - [GodraysNode](https://threejs.org/docs/pages/GodraysNode.html.md) - [HemisphereLightNode](https://threejs.org/docs/pages/HemisphereLightNode.html.md) - [IESSpotLightNode](https://threejs.org/docs/pages/IESSpotLightNode.html.md) - [IndexNode](https://threejs.org/docs/pages/IndexNode.html.md) - [InputNode](https://threejs.org/docs/pages/InputNode.html.md) - [InspectorNode](https://threejs.org/docs/pages/InspectorNode.html.md) - [InstanceNode](https://threejs.org/docs/pages/InstanceNode.html.md) - [InstancedMeshNode](https://threejs.org/docs/pages/InstancedMeshNode.html.md) - [IrradianceNode](https://threejs.org/docs/pages/IrradianceNode.html.md) - [IsolateNode](https://threejs.org/docs/pages/IsolateNode.html.md) - [JoinNode](https://threejs.org/docs/pages/JoinNode.html.md) - [LensflareNode](https://threejs.org/docs/pages/LensflareNode.html.md) - [LightProbeNode](https://threejs.org/docs/pages/LightProbeNode.html.md) - [LightingContextNode](https://threejs.org/docs/pages/LightingContextNode.html.md) - [LightingNode](https://threejs.org/docs/pages/LightingNode.html.md) - [LightsNode](https://threejs.org/docs/pages/LightsNode.html.md) - [LoopNode](https://threejs.org/docs/pages/LoopNode.html.md) - [Lut3DNode](https://threejs.org/docs/pages/Lut3DNode.html.md) - [MRTNode](https://threejs.org/docs/pages/MRTNode.html.md) - [MaterialNode](https://threejs.org/docs/pages/MaterialNode.html.md) - [MaterialReferenceNode](https://threejs.org/docs/pages/MaterialReferenceNode.html.md) - [MathNode](https://threejs.org/docs/pages/MathNode.html.md) - [MaxMipLevelNode](https://threejs.org/docs/pages/MaxMipLevelNode.html.md) - [MemberNode](https://threejs.org/docs/pages/MemberNode.html.md) - [ModelNode](https://threejs.org/docs/pages/ModelNode.html.md) - [MorphNode](https://threejs.org/docs/pages/MorphNode.html.md) - [Node](https://threejs.org/docs/pages/Node.html.md) - [NormalMapNode](https://threejs.org/docs/pages/NormalMapNode.html.md) - [Object3DNode](https://threejs.org/docs/pages/Object3DNode.html.md) - [OperatorNode](https://threejs.org/docs/pages/OperatorNode.html.md) - [OutlineNode](https://threejs.org/docs/pages/OutlineNode.html.md) - [OutputStructNode](https://threejs.org/docs/pages/OutputStructNode.html.md) - [PMREMNode](https://threejs.org/docs/pages/PMREMNode.html.md) - [PackFloatNode](https://threejs.org/docs/pages/PackFloatNode.html.md) - [ParameterNode](https://threejs.org/docs/pages/ParameterNode.html.md) - [PassMultipleTextureNode](https://threejs.org/docs/pages/PassMultipleTextureNode.html.md) - [PassTextureNode](https://threejs.org/docs/pages/PassTextureNode.html.md) - [PixelationNode](https://threejs.org/docs/pages/PixelationNode.html.md) - [PointLightNode](https://threejs.org/docs/pages/PointLightNode.html.md) - [PointShadowNode](https://threejs.org/docs/pages/PointShadowNode.html.md) - [PointUVNode](https://threejs.org/docs/pages/PointUVNode.html.md) - [ProjectorLightNode](https://threejs.org/docs/pages/ProjectorLightNode.html.md) - [PropertyNode](https://threejs.org/docs/pages/PropertyNode.html.md) - [RGBShiftNode](https://threejs.org/docs/pages/RGBShiftNode.html.md) - [RTTNode](https://threejs.org/docs/pages/RTTNode.html.md) - [RangeNode](https://threejs.org/docs/pages/RangeNode.html.md) - [RectAreaLightNode](https://threejs.org/docs/pages/RectAreaLightNode.html.md) - [ReferenceBaseNode](https://threejs.org/docs/pages/ReferenceBaseNode.html.md) - [ReferenceElementNode](https://threejs.org/docs/pages/ReferenceElementNode.html.md) - [ReferenceNode](https://threejs.org/docs/pages/ReferenceNode.html.md) - [ReflectorNode](https://threejs.org/docs/pages/ReflectorNode.html.md) - [RemapNode](https://threejs.org/docs/pages/RemapNode.html.md) - [RenderOutputNode](https://threejs.org/docs/pages/RenderOutputNode.html.md) - [RendererReferenceNode](https://threejs.org/docs/pages/RendererReferenceNode.html.md) - [RotateNode](https://threejs.org/docs/pages/RotateNode.html.md) - [SMAANode](https://threejs.org/docs/pages/SMAANode.html.md) - [SSGINode](https://threejs.org/docs/pages/SSGINode.html.md) - [SSRNode](https://threejs.org/docs/pages/SSRNode.html.md) - [SSSNode](https://threejs.org/docs/pages/SSSNode.html.md) - [SampleNode](https://threejs.org/docs/pages/SampleNode.html.md) - [ScreenNode](https://threejs.org/docs/pages/ScreenNode.html.md) - [SetNode](https://threejs.org/docs/pages/SetNode.html.md) - [ShadowBaseNode](https://threejs.org/docs/pages/ShadowBaseNode.html.md) - [ShadowNode](https://threejs.org/docs/pages/ShadowNode.html.md) - [SkinningNode](https://threejs.org/docs/pages/SkinningNode.html.md) - [SobelOperatorNode](https://threejs.org/docs/pages/SobelOperatorNode.html.md) - [SplitNode](https://threejs.org/docs/pages/SplitNode.html.md) - [SpotLightNode](https://threejs.org/docs/pages/SpotLightNode.html.md) - [StackNode](https://threejs.org/docs/pages/StackNode.html.md) - [StorageArrayElementNode](https://threejs.org/docs/pages/StorageArrayElementNode.html.md) - [StorageBufferNode](https://threejs.org/docs/pages/StorageBufferNode.html.md) - [StorageTextureNode](https://threejs.org/docs/pages/StorageTextureNode.html.md) - [StructNode](https://threejs.org/docs/pages/StructNode.html.md) - [StructTypeNode](https://threejs.org/docs/pages/StructTypeNode.html.md) - [SubBuildNode](https://threejs.org/docs/pages/SubBuildNode.html.md) - [SubgroupFunctionNode](https://threejs.org/docs/pages/SubgroupFunctionNode.html.md) - [TRAANode](https://threejs.org/docs/pages/TRAANode.html.md) - [TempNode](https://threejs.org/docs/pages/TempNode.html.md) - [Texture3DNode](https://threejs.org/docs/pages/Texture3DNode.html.md) - [TextureNode](https://threejs.org/docs/pages/TextureNode.html.md) - [TextureSizeNode](https://threejs.org/docs/pages/TextureSizeNode.html.md) - [TileShadowNode](https://threejs.org/docs/pages/TileShadowNode.html.md) - [TiledLightsNode](https://threejs.org/docs/pages/TiledLightsNode.html.md) - [ToneMappingNode](https://threejs.org/docs/pages/ToneMappingNode.html.md) - [TransitionNode](https://threejs.org/docs/pages/TransitionNode.html.md) - [UniformArrayElementNode](https://threejs.org/docs/pages/UniformArrayElementNode.html.md) - [UniformArrayNode](https://threejs.org/docs/pages/UniformArrayNode.html.md) - [UniformGroupNode](https://threejs.org/docs/pages/UniformGroupNode.html.md) - [UniformNode](https://threejs.org/docs/pages/UniformNode.html.md) - [UnpackFloatNode](https://threejs.org/docs/pages/UnpackFloatNode.html.md) - [UserDataNode](https://threejs.org/docs/pages/UserDataNode.html.md) - [VarNode](https://threejs.org/docs/pages/VarNode.html.md) - [VaryingNode](https://threejs.org/docs/pages/VaryingNode.html.md) - [VelocityNode](https://threejs.org/docs/pages/VelocityNode.html.md) - [VertexColorNode](https://threejs.org/docs/pages/VertexColorNode.html.md) - [ViewportDepthNode](https://threejs.org/docs/pages/ViewportDepthNode.html.md) - [ViewportDepthTextureNode](https://threejs.org/docs/pages/ViewportDepthTextureNode.html.md) - [ViewportSharedTextureNode](https://threejs.org/docs/pages/ViewportSharedTextureNode.html.md) - [ViewportTextureNode](https://threejs.org/docs/pages/ViewportTextureNode.html.md) - [WorkgroupInfoElementNode](https://threejs.org/docs/pages/WorkgroupInfoElementNode.html.md) - [WorkgroupInfoNode](https://threejs.org/docs/pages/WorkgroupInfoNode.html.md) ### WebXR - [EXRExporter](https://threejs.org/docs/pages/EXRExporter.html.md) - [WebXRDepthSensing](https://threejs.org/docs/pages/WebXRDepthSensing.html.md) - [WebXRManager](https://threejs.org/docs/pages/WebXRManager.html.md) - [XRButton](https://threejs.org/docs/pages/XRButton.html.md) - [XRControllerModel](https://threejs.org/docs/pages/XRControllerModel.html.md) - [XRControllerModelFactory](https://threejs.org/docs/pages/XRControllerModelFactory.html.md) - [XRHandMeshModel](https://threejs.org/docs/pages/XRHandMeshModel.html.md) - [XRHandModel](https://threejs.org/docs/pages/XRHandModel.html.md) - [XRHandModelFactory](https://threejs.org/docs/pages/XRHandModelFactory.html.md) - [XRHandPrimitiveModel](https://threejs.org/docs/pages/XRHandPrimitiveModel.html.md) - [XRManager](https://threejs.org/docs/pages/XRManager.html.md) - [XRPlanes](https://threejs.org/docs/pages/XRPlanes.html.md) ### Shader Modules - [module-ACESFilmicToneMappingShader](https://threejs.org/docs/pages/module-ACESFilmicToneMappingShader.html.md) - [module-AfterimageShader](https://threejs.org/docs/pages/module-AfterimageShader.html.md) - [module-BasicShader](https://threejs.org/docs/pages/module-BasicShader.html.md) - [module-Bayer](https://threejs.org/docs/pages/module-Bayer.html.md) - [module-BleachBypassShader](https://threejs.org/docs/pages/module-BleachBypassShader.html.md) - [module-BlendShader](https://threejs.org/docs/pages/module-BlendShader.html.md) - [module-BokehShader](https://threejs.org/docs/pages/module-BokehShader.html.md) - [module-BokehShader2](https://threejs.org/docs/pages/module-BokehShader2.html.md) - [module-BrightnessContrastShader](https://threejs.org/docs/pages/module-BrightnessContrastShader.html.md) - [module-BufferGeometryUtils](https://threejs.org/docs/pages/module-BufferGeometryUtils.html.md) - [module-CSMShader](https://threejs.org/docs/pages/module-CSMShader.html.md) - [module-CameraUtils](https://threejs.org/docs/pages/module-CameraUtils.html.md) - [module-ColorCorrectionShader](https://threejs.org/docs/pages/module-ColorCorrectionShader.html.md) - [module-ColorSpaces](https://threejs.org/docs/pages/module-ColorSpaces.html.md) - [module-ColorifyShader](https://threejs.org/docs/pages/module-ColorifyShader.html.md) - [module-ConvolutionShader](https://threejs.org/docs/pages/module-ConvolutionShader.html.md) - [module-CopyShader](https://threejs.org/docs/pages/module-CopyShader.html.md) - [module-DOFMipMapShader](https://threejs.org/docs/pages/module-DOFMipMapShader.html.md) - [module-DepthLimitedBlurShader](https://threejs.org/docs/pages/module-DepthLimitedBlurShader.html.md) - [module-DigitalGlitch](https://threejs.org/docs/pages/module-DigitalGlitch.html.md) - [module-DotScreenShader](https://threejs.org/docs/pages/module-DotScreenShader.html.md) - [module-ExposureShader](https://threejs.org/docs/pages/module-ExposureShader.html.md) - [module-FXAAShader](https://threejs.org/docs/pages/module-FXAAShader.html.md) - [module-FilmShader](https://threejs.org/docs/pages/module-FilmShader.html.md) - [module-FocusShader](https://threejs.org/docs/pages/module-FocusShader.html.md) - [module-FreiChenShader](https://threejs.org/docs/pages/module-FreiChenShader.html.md) - [module-GTAOShader](https://threejs.org/docs/pages/module-GTAOShader.html.md) - [module-GammaCorrectionShader](https://threejs.org/docs/pages/module-GammaCorrectionShader.html.md) - [module-GeometryCompressionUtils](https://threejs.org/docs/pages/module-GeometryCompressionUtils.html.md) - [module-GeometryUtils](https://threejs.org/docs/pages/module-GeometryUtils.html.md) - [module-HalftoneShader](https://threejs.org/docs/pages/module-HalftoneShader.html.md) - [module-HorizontalBlurShader](https://threejs.org/docs/pages/module-HorizontalBlurShader.html.md) - [module-HorizontalTiltShiftShader](https://threejs.org/docs/pages/module-HorizontalTiltShiftShader.html.md) - [module-HueSaturationShader](https://threejs.org/docs/pages/module-HueSaturationShader.html.md) - [module-Interpolations](https://threejs.org/docs/pages/module-Interpolations.html.md) - [module-KaleidoShader](https://threejs.org/docs/pages/module-KaleidoShader.html.md) - [module-LuminosityHighPassShader](https://threejs.org/docs/pages/module-LuminosityHighPassShader.html.md) - [module-LuminosityShader](https://threejs.org/docs/pages/module-LuminosityShader.html.md) - [module-MirrorShader](https://threejs.org/docs/pages/module-MirrorShader.html.md) - [module-NURBSUtils](https://threejs.org/docs/pages/module-NURBSUtils.html.md) - [module-NormalMapShader](https://threejs.org/docs/pages/module-NormalMapShader.html.md) - [module-OutputShader](https://threejs.org/docs/pages/module-OutputShader.html.md) - [module-ParametricFunctions](https://threejs.org/docs/pages/module-ParametricFunctions.html.md) - [module-PoissonDenoiseShader](https://threejs.org/docs/pages/module-PoissonDenoiseShader.html.md) - [module-RGBShiftShader](https://threejs.org/docs/pages/module-RGBShiftShader.html.md) - [module-Raymarching](https://threejs.org/docs/pages/module-Raymarching.html.md) - [module-SAOShader](https://threejs.org/docs/pages/module-SAOShader.html.md) - [module-SMAAShader](https://threejs.org/docs/pages/module-SMAAShader.html.md) - [module-SSAOShader](https://threejs.org/docs/pages/module-SSAOShader.html.md) - [module-SSRShader](https://threejs.org/docs/pages/module-SSRShader.html.md) - [module-SceneUtils](https://threejs.org/docs/pages/module-SceneUtils.html.md) - [module-SepiaShader](https://threejs.org/docs/pages/module-SepiaShader.html.md) - [module-SkeletonUtils](https://threejs.org/docs/pages/module-SkeletonUtils.html.md) - [module-SobelOperatorShader](https://threejs.org/docs/pages/module-SobelOperatorShader.html.md) - [module-SortUtils](https://threejs.org/docs/pages/module-SortUtils.html.md) - [module-SubsurfaceScatteringShader](https://threejs.org/docs/pages/module-SubsurfaceScatteringShader.html.md) - [module-Text2D](https://threejs.org/docs/pages/module-Text2D.html.md) - [module-TriangleBlurShader](https://threejs.org/docs/pages/module-TriangleBlurShader.html.md) - [module-UVsDebug](https://threejs.org/docs/pages/module-UVsDebug.html.md) - [module-UniformsUtils](https://threejs.org/docs/pages/module-UniformsUtils.html.md) - [module-UnpackDepthRGBAShader](https://threejs.org/docs/pages/module-UnpackDepthRGBAShader.html.md) - [module-VelocityShader](https://threejs.org/docs/pages/module-VelocityShader.html.md) - [module-VerticalBlurShader](https://threejs.org/docs/pages/module-VerticalBlurShader.html.md) - [module-VerticalTiltShiftShader](https://threejs.org/docs/pages/module-VerticalTiltShiftShader.html.md) - [module-VignetteShader](https://threejs.org/docs/pages/module-VignetteShader.html.md) - [module-VolumeShader](https://threejs.org/docs/pages/module-VolumeShader.html.md) - [module-WaterRefractionShader](https://threejs.org/docs/pages/module-WaterRefractionShader.html.md) - [module-WebGLTextureUtils](https://threejs.org/docs/pages/module-WebGLTextureUtils.html.md) - [module-WebGPUTextureUtils](https://threejs.org/docs/pages/module-WebGPUTextureUtils.html.md) --- 
