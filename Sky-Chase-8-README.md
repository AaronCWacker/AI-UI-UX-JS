# ✈️ Sky Chase 8.1 — Minnesota Flight

Single-file Three.js co-op arcade dogfights, made for Aaron's All.AI collection.

## 8.1 realism upgrade

- Embedded **32 × 32 km Lake Minnetonka / west-metro geography**, adapted from the actual raster and coordinate pipelines in `Minnesota-Constellation-9.html` and `Constellation-Festival-Earth-v4.html`.
- All 30 Terrarium elevation tiles (zoom 12) and 110 satellite tiles (zoom 13) were retrieved during the build. The app carries a sampled 257×257 elevation grid (125 m mesh spacing) and a 1280×1280 regional imagery texture (25 m/pixel); original tile resolution is higher than this compact embedded display.
- Elevations span 208.7–339.9 m above the source datum, with 1× vertical relief. World altitude uses an offset of 280 m. AGL clearance follows the rendered mesh triangles. This is a game, not navigation data.
- Metropolitan Council Lake Minnetonka polygons are dissolved to remove duplicate overlapping features; island holes are preserved. Lake surface uses an approximate constant elevation of 283.3 m, with the coarse lake bed depressed to prevent surface flicker. Shoreline simplification and the terrain grid limit close-range precision.
- Mound, Orono, Wayzata, Excelsior and Eden Prairie labels; imagery-backed radar; reflective lake shader; soft cloud banks; continuous contrails.
- Trees are decorative instances placed using a green-pixel heuristic, not surveyed individual trees.
- The aircraft selector switches your airframe and synchronizes its identity to wingmates. Inspect camera provides an orbiting close view. The new Minnesota protocol namespace keeps older ocean-world clients out of this room.

| Airframe | Modeled nominal length | Nominal wingspan | Distinct features |
|---|---:|---:|---|
| F-22 Raptor | 18.9 m | 13.6 m | Diamond wings, canted tails, twin rectangular exhausts |
| F-35A Lightning II | 15.7 m | 10.7 m | Compact body, side intakes, single circular nozzle |
| Su-57 | approximately 20.1 m | approximately 14.1 m | Wide engine spacing, long chines, swept wings, twin circular nozzles |

These are original procedural visual approximations based on public references, not CAD scans or certified engineering models. Decorative panel lines, internal cockpit details and flight handling are interpretive. The three aircraft form an advanced-fighter showcase; they are not an objectively ranked global top three. Cruise, turn and boost settings are arcade tuning, not published flight envelopes.

The starter area is southwest of central Lake Minnetonka, not the entire state. Terrain and shoreline data are bundled, so opening this build never needs to fetch map tiles. Three.js and PeerJS still need their CDN dependencies.

Reference sources:
- USAF F-22 fact sheet: https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104506/f-22-raptor/
- USAF F-35A fact sheet: https://www.af.mil/About-Us/Fact-Sheets/Display/Article/478441/f-35a-lightning-ii/
- UAC Su-57 public aircraft page: https://www.uacrussia.ru/en/aircraft/lineup/military/su-57/
- Terrain attribution: https://github.com/tilezen/joerd/blob/master/docs/attribution.md
- Esri imagery: https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer
- Lake geometry: https://arcgis.metc.state.mn.us/arcgis/rest/services/LPH/SurfaceWater/MapServer/4


Play: https://allaiinc.org/Sky-Chase-8.html?room=WAKE

Full HTML + JavaScript: https://allaiinc.org/Sky-Chase-8-source.txt

## Play

Open the HTML in a modern WebGL browser, or serve this folder with `python -m http.server 8000`.
Three.js 0.170.0 and PeerJS 1.5.4 load from jsDelivr. No npm or build step.

- W/S climb/dive, A/D turn, Q/E roll, Space cannon, Shift boost, F missile.
- C changes chase / cockpit / top / side / flyby / inspect camera. P toggles AI pilot.
- Drag the sky to steer; right-drag orbits the chase camera. Touch stick + buttons on tablets/phones.
- Cyan jets are cooperative human wingmates; amber jets are enemies. Gates repair shields.
- Enemy waves increase every six takedowns. Ejection returns you after three seconds.

## WAKE multiplayer

`?room=WAKE` is the default, with eight discovery slots in a game-specific PeerJS namespace.
Inspired by the deterministic discovery slots in `Predator-Multiplayer-6.html`.
Every peer owns its jet and the lexicographically first active pilot simulates enemies.
Snapshots run at about 12.5 Hz, interpolated between updates; state packets are deduplicated
across WebRTC and same-origin BroadcastChannel transports. Departed pilots expire and another
active pilot takes over enemies. No account or game server is needed, but public PeerJS signaling
and working WebRTC connectivity are required. Restrictive NATs may require a separately configured
TURN server. This is a friendly-room prototype, not an authenticated or anti-cheat service.

## Music and recording

Load an MP3 under Music and press play. Audio stays in your browser.
The 60-second button captures a composited 1280×720 (or 720×1280) video at 30 fps, with
the soundtrack, flight effects, score overlay, and radar. The render loop never exceeds 50 fps.
MP4 is preferred using MediaRecorder capability detection. If unsupported, the app records
WebM and uses the correct extension. No microphone or screen-sharing permission is needed.
Returning to a hidden tab stops and saves the clip. Download Clip retrieves the latest take
until the page is closed. Recordings are not uploaded automatically.

Browser MP4 codecs vary. X needs compatible H.264/AAC: use the script’s `--convert` option (requires ffmpeg), or convert a recording explicitly:

```bash
ffmpeg -i clip.webm -c:v libx264 -pix_fmt yuv420p -r 30 -c:a aac -movflags +faststart clip.mp4
```

## X video post + linked reply

Share opens a two-step composer. Attach the clip in the first post, then paste that published
post URL to open a reply addressed to the correct post. It does not claim to auto-attach a video.

For actual automation, use `Sky-Chase-8-post-x.py` on your computer:

```bash
pip install requests
python Sky-Chase-8-post-x.py clip.mp4
# Set X_USER_ACCESS_TOKEN using your local secret-management method, then:
python Sky-Chase-8-post-x.py clip.mp4 --convert --publish
```

The script uses X's v2 initialize / append / finalize / status media API, publishes the video
post, then uses the returned post ID for the multiplayer + code reply. It requires a user OAuth 2
token with the needed posting/media scopes and X API access. The script keeps progress beside
the video so reruns can avoid duplicate completed posts. An uncertain POST response halts for
manual inspection rather than retrying blindly. Credentials never belong in the public HTML.

API references:
- https://docs.x.com/x-api/media/quickstart/media-upload-chunked
- https://docs.x.com/x-api/posts/create-post
- https://peerjs.com/docs/

## Hosting

Copy the HTML and its identical source-text companion to your static hosting root. Copy the
Python script and README if you want them downloadable. The app uses absolute allaiinc.org
sharing links. Change BASE and SOURCE constants if hosting under another domain or filename.
