

I want to create a Document Farm game which uses info gathering tools and agents with the user to allow user to inform the app about the state of directories and subdirectories and allows the user to create a representational 3d scene matching the info along with text display so the user can instance the file as a unique actor in their 3D farming game.  This gives the user a metaphor and planning structure as a game around their files where sometimes meaning is in content like audio, video, images, pdfs, and our ability to keep records on the files as an arranged population and content of files when needed is also improtant.  for now we need a way of getting data in or out in bulk.  I believe we want to do that with a chat and so html js those two only for now until we have a version working.  Now two assets I have match my needs for the interface around files and visualization for a squarified treemap (half the screen ) and the other is a threeJS scene interactive world with buildings.    Here are my two html file URLs:  https://allaiinc.org/Infinite_World_Builder.html   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Infinite World Builder</title>
    <style>
        body { 
            margin: 0; 
            overflow: hidden; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #333;
        }
        canvas { 
            display: block; 
        }
        #ui-container {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 10;
            background: rgba(0,0,0,0.6);
            padding: 10px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: white;
            max-width: 250px;
        }
        .ui-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
        .ui-row label {
            white-space: nowrap;
        }
        button, select, input[type="number"] {
            background-color: #555;
            color: white;
            border: 1px solid #777;
            padding: 8px;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
        }
        button:hover {
            background-color: #666;
        }
        select, input[type="number"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.4-5.4-13z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 10px top 50%;
            background-size: .65em auto;
            padding-right: 2em;
        }
    </style>
</head>
<body>
    <!-- UI Elements for User Interaction -->
    <div id="ui-container">
        <div class="ui-row">
            <button id="newWorldButton">New World</button>
        </div>
        <div class="ui-row">
            <button id="loadWorldButton">Load World</button>
            <input type="file" id="loadWorldInput" accept=".json" style="display: none;">
        </div>
        <div class="ui-row">
            <button id="saveWorldButton">Save World</button>
        </div>
        <hr style="border-color: #555; width:100%;">
        <div class="ui-row">
            <label for="objectSelect">Object:</label>
            <select id="objectSelect"></select>
        </div>
        <div class="ui-row">
            <label for="scaleInput">Scale:</label>
            <input type="number" id="scaleInput" value="1.0" step="0.1" min="0.1">
        </div>
        <div class="ui-row">
            <label for="rotationInput">Rotation (Y):</label>
            <input type="number" id="rotationInput" value="0" step="15" min="0" max="345">
        </div>
    </div>

    <!-- Import map for Three.js -->
    <script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.module.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/"
        }
    }
    </script>

    <!-- Main Application Logic -->
    <script type="module">
        import * as THREE from 'three';

        // --- Core Scene Variables ---
        let scene, camera, renderer, playerMesh;
        let raycaster, mouse;
        const keysPressed = {};
        const playerSpeed = 0.15;
        
        // --- World State Management ---
        let worldObjects = []; // This is the single source of truth for all placed objects
        const groundMeshes = {}; // Store ground mesh references by grid key

        // --- World Configuration ---
        const PLOT_WIDTH = 50.0;
        const PLOT_DEPTH = 50.0;

        // --- Materials ---
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x55aa55, roughness: 0.9, metalness: 0.1, side: THREE.DoubleSide
        });

        // --- Object Creation Map ---
        const objectFactory = {};

        // --- UI Elements ---
        const newWorldButton = document.getElementById('newWorldButton');
        const saveWorldButton = document.getElementById('saveWorldButton');
        const loadWorldButton = document.getElementById('loadWorldButton');
        const loadWorldInput = document.getElementById('loadWorldInput');
        const objectSelect = document.getElementById('objectSelect');
        const scaleInput = document.getElementById('scaleInput');
        const rotationInput = document.getElementById('rotationInput');

        /**
         * Initializes the entire application.
         */
        function init() {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xabcdef);
            
            const aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 4000);
            camera.position.set(0, 15, 20);
            camera.lookAt(0, 0, 0);
            scene.add(camera);

            setupLighting();
            setupPlayer();
            populateObjectFactory();
            populateObjectSelector();

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            document.body.appendChild(renderer.domElement);

            addEventListeners();
            
            resetWorld(); // Start with a fresh world
            
            console.log("Three.js Initialized. World ready.");
            animate();
        }

        /**
         * Sets up lights for the scene.
         */
        function setupLighting() {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(50, 150, 100);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 4096;
            directionalLight.shadow.mapSize.height = 4096;
            directionalLight.shadow.camera.near = 0.5;
            directionalLight.shadow.camera.far = 500;
            directionalLight.shadow.camera.left = -150;
            directionalLight.shadow.camera.right = 150;
            directionalLight.shadow.camera.top = 150;
            directionalLight.shadow.camera.bottom = -150;
            directionalLight.shadow.bias = -0.001;
            scene.add(directionalLight);
        }

        /**
         * Creates the player representation in the scene.
         */
        function setupPlayer() {
            const playerGeo = new THREE.CapsuleGeometry(0.4, 0.8, 4, 8);
            const playerMat = new THREE.MeshStandardMaterial({ color: 0x0000ff, roughness: 0.6 });
            playerMesh = new THREE.Mesh(playerGeo, playerMat);
            playerMesh.castShadow = true;
            playerMesh.receiveShadow = true;
            scene.add(playerMesh);
        }

        /**
         * Clears the world and resets the state to a default.
         */
        function resetWorld() {
            console.log("Creating a new world.");
            // Clear existing objects
            worldObjects.forEach(objData => {
                const object = scene.getObjectByProperty('uuid', objData.uuid);
                if (object) {
                    scene.remove(object);
                }
            });
            worldObjects = [];

            // Clear ground planes
            for (const key in groundMeshes) {
                scene.remove(groundMeshes[key]);
                delete groundMeshes[key];
            }

            // Create the initial ground plane at (0,0)
            createGroundPlane(0, 0);

            // Reset player position
            playerMesh.position.set(PLOT_WIDTH / 2, 0.4 + 0.8 / 2, PLOT_DEPTH / 2);
            updateCamera(true); // Force camera snap
        }

        /**
         * Populates the world based on data from a loaded file.
         * @param {object} worldData - The parsed JSON data from a world file.
         */
        function populateWorld(worldData) {
            console.log("Loading world from file...");
            resetWorld(); // Ensure the scene is clean before loading

            if (worldData.objects && Array.isArray(worldData.objects)) {
                worldData.objects.forEach(objData => {
                    // Create and place the object in the scene
                    const newObject = createObject(objData.type);
                    if (newObject) {
                        newObject.position.copy(objData.position);
                        newObject.rotation.set(objData.rotation._x, objData.rotation._y, objData.rotation._z, objData.rotation._order);
                        newObject.scale.copy(objData.scale);
                        newObject.userData.obj_id = objData.obj_id; // Preserve original ID
                        scene.add(newObject);
                        
                        // Add its data to our source of truth, including its new scene UUID
                        const newObjData = { ...objData, uuid: newObject.uuid };
                        worldObjects.push(newObjData);
                    }
                });
            }

            // Generate all necessary ground planes for the loaded objects
            generateGroundForLoadedWorld();

            // Set player position if it exists in the save file
            if (worldData.playerPosition) {
                playerMesh.position.copy(worldData.playerPosition);
            }
            
            updateCamera(true); // Snap camera to new position
            console.log(`Loaded ${worldObjects.length} objects.`);
        }

        /**
         * Creates a ground plane at a specific grid coordinate.
         * @param {number} gridX - The x-coordinate in the grid.
         * @param {number} gridZ - The z-coordinate in the grid.
         */
        function createGroundPlane(gridX, gridZ) {
            const gridKey = `${gridX}_${gridZ}`;
            if (groundMeshes[gridKey]) return; // Don't create if it already exists

            console.log(`Creating ground at ${gridX}, ${gridZ}`);
            const groundGeometry = new THREE.PlaneGeometry(PLOT_WIDTH, PLOT_DEPTH);
            const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
            groundMesh.rotation.x = -Math.PI / 2;
            groundMesh.position.y = -0.05;
            groundMesh.position.x = gridX * PLOT_WIDTH + PLOT_WIDTH / 2.0;
            groundMesh.position.z = gridZ * PLOT_DEPTH + PLOT_DEPTH / 2.0;
            groundMesh.receiveShadow = true;
            groundMesh.userData.gridKey = gridKey;
            scene.add(groundMesh);
            groundMeshes[gridKey] = groundMesh;
        }

        /**
         * After loading a world, this ensures all necessary ground tiles are created.
         */
        function generateGroundForLoadedWorld() {
            const requiredGrids = new Set();
            worldObjects.forEach(objData => {
                const gridX = Math.floor(objData.position.x / PLOT_WIDTH);
                const gridZ = Math.floor(objData.position.z / PLOT_DEPTH);
                requiredGrids.add(`${gridX}_${gridZ}`);
            });
            
            // Also add grid for player
            const playerGridX = Math.floor(playerMesh.position.x / PLOT_WIDTH);
            const playerGridZ = Math.floor(playerMesh.position.z / PLOT_DEPTH);
            requiredGrids.add(`${playerGridX}_${playerGridZ}`);

            requiredGrids.forEach(key => {
                const [gridX, gridZ] = key.split('_').map(Number);
                createGroundPlane(gridX, gridZ);
            });
        }
        
        /**
         * Creates a generic base for any object, assigning a type and unique ID.
         * @param {string} type - The type name of the object.
         * @returns {object} - An object with userData containing type and a new UUID.
         */
        function createObjectBase(type) {
            return { userData: { type: type, obj_id: THREE.MathUtils.generateUUID() } };
        }

        /**
         * Central function to create a 3D object based on its type string.
         * @param {string} type - The type of object to create.
         * @returns {THREE.Object3D|null} The created Three.js object or null if type is unknown.
         */
        function createObject(type) {
            if (objectFactory[type]) {
                return objectFactory[type]();
            }
            console.warn("Unknown object type:", type);
            return null;
        }

        // --- All Object Creation Functions ---
        // (Abridged for brevity, the full list is included below this script block)
        function createSimpleHouse() {
            const base = createObjectBase("Simple House");
            const group = new THREE.Group();
            Object.assign(group, base);
            const mat1 = new THREE.MeshStandardMaterial({color:0xffccaa, roughness:0.8});
            const mat2 = new THREE.MeshStandardMaterial({color:0xaa5533, roughness:0.7});
            const m1 = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,2.5), mat1);
            m1.position.y = 1.5/2;
            m1.castShadow = true; m1.receiveShadow = true;
            group.add(m1);
            const m2 = new THREE.Mesh(new THREE.ConeGeometry(1.8,1,4), mat2);
            m2.position.y = 1.5+1/2;
            m2.rotation.y = Math.PI/4;
            m2.castShadow = true; m2.receiveShadow = true;
            group.add(m2);
            return group;
        }

        function createTree() {
            const base = createObjectBase("Tree");
            const group = new THREE.Group();
            Object.assign(group, base);
            const mat1 = new THREE.MeshStandardMaterial({color:0x8B4513, roughness:0.9});
            const mat2 = new THREE.MeshStandardMaterial({color:0x228B22, roughness:0.8});
            const m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.4,2,8), mat1);
            m1.position.y = 1;
            m1.castShadow = true; m1.receiveShadow = true;
            group.add(m1);
            const m2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2,0), mat2);
            m2.position.y = 2.8;
            m2.castShadow = true; m2.receiveShadow = true;
            group.add(m2);
            return group;
        }

        function createRock() {
            const base = createObjectBase("Rock");
            const mat = new THREE.MeshStandardMaterial({color:0xaaaaaa, roughness:0.8, metalness:0.1});
            const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7,0), mat);
            Object.assign(rock, base);
            rock.position.y = 0.35;
            rock.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
            rock.castShadow = true; rock.receiveShadow = true;
            return rock;
        }

        // --- File and State Management ---

        /**
         * Gathers all world data and triggers a download of the world file.
         */
        function saveWorldToFile() {
            console.log("Saving world to file...");
            const dataToSave = {
                meta: {
                    version: "1.0",
                    plotWidth: PLOT_WIDTH,
                    plotDepth: PLOT_DEPTH,
                    savedAt: new Date().toISOString()
                },
                playerPosition: playerMesh.position.clone(),
                objects: worldObjects.map(objData => {
                    // We only need to store the data, not the live scene object reference
                    const { uuid, ...rest } = objData;
                    return rest;
                })
            };

            const jsonString = JSON.stringify(dataToSave, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `world_${Date.now()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            console.log(`World saved with ${dataToSave.objects.length} objects.`);
        }

        /**
         * Handles the file selection for loading a world.
         * @param {Event} event - The file input change event.
         */
        function handleWorldFileLoad(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const worldData = JSON.parse(e.target.result);
                    populateWorld(worldData);
                } catch (error) {
                    console.error("Error parsing world file:", error);
                    alert("Failed to load world file. It might be corrupted.");
                }
            };
            reader.readAsText(file);
        }

        // --- Event Handlers ---
        
        function addEventListeners() {
            document.addEventListener('mousemove', onMouseMove, false);
            document.addEventListener('click', onDocumentClick, false);
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('keydown', onKeyDown);
            document.addEventListener('keyup', onKeyUp);
            
            newWorldButton.addEventListener('click', () => {
                if (confirm('Are you sure you want to start a new world? Any unsaved changes will be lost.')) {
                    resetWorld();
                }
            });
            saveWorldButton.addEventListener('click', saveWorldToFile);
            loadWorldButton.addEventListener('click', () => loadWorldInput.click());
            loadWorldInput.addEventListener('change', handleWorldFileLoad);
        }

        function onMouseMove(event) {
            // Adjust for UI offset if mouse is over it
            const uiRect = document.getElementById('ui-container').getBoundingClientRect();
            if (event.clientX < uiRect.right && event.clientY < uiRect.bottom) {
                 mouse.x = -99; // Prevent placement when mouse is over UI
                 mouse.y = -99;
                 return;
            }
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function onDocumentClick(event) {
            if (mouse.x === -99) return; // Don't place if mouse was over UI
            
            const selectedObjectType = objectSelect.value;
            if (selectedObjectType === "None") return;

            const groundCandidates = Object.values(groundMeshes);
            if (groundCandidates.length === 0) return;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(groundCandidates);

            if (intersects.length > 0) {
                const intersectPoint = intersects[0].point;
                const newObject = createObject(selectedObjectType);
                
                if (newObject) {
                    newObject.position.copy(intersectPoint);
                    newObject.position.y += 0.01; // Prevent z-fighting
                    
                    const scale = parseFloat(scaleInput.value) || 1.0;
                    const rotationY = THREE.MathUtils.degToRad(parseFloat(rotationInput.value) || 0);

                    newObject.scale.setScalar(scale);
                    newObject.rotation.y = rotationY;
                    
                    scene.add(newObject);

                    // Add the new object's data to our main array
                    const newObjectData = {
                        obj_id: newObject.userData.obj_id,
                        uuid: newObject.uuid, // Keep track of the live object in the scene
                        type: newObject.userData.type,
                        position: newObject.position.clone(),
                        rotation: { _x: newObject.rotation.x, _y: newObject.rotation.y, _z: newObject.rotation.z, _order: newObject.rotation.order },
                        scale: newObject.scale.clone()
                    };
                    worldObjects.push(newObjectData);
                    
                    console.log(`Placed new ${selectedObjectType}. Total objects: ${worldObjects.length}`);
                }
            }
        }

        function onKeyDown(event) { keysPressed[event.code] = true; }
        function onKeyUp(event) { keysPressed[event.code] = false; }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // --- Game Loop and Updates ---

        function updatePlayerMovement() {
            if (!playerMesh) return;
            const moveDirection = new THREE.Vector3(0, 0, 0);
            if (keysPressed['KeyW'] || keysPressed['ArrowUp']) moveDirection.z -= 1;
            if (keysPressed['KeyS'] || keysPressed['ArrowDown']) moveDirection.z += 1;
            if (keysPressed['KeyA'] || keysPressed['ArrowLeft']) moveDirection.x -= 1;
            if (keysPressed['KeyD'] || keysPressed['ArrowRight']) moveDirection.x += 1;
            
            if (moveDirection.lengthSq() > 0) {
                moveDirection.normalize().multiplyScalar(playerSpeed);
                
                const forward = new THREE.Vector3();
                camera.getWorldDirection(forward);
                forward.y = 0;
                forward.normalize();
                
                const right = new THREE.Vector3().crossVectors(camera.up, forward).normalize();
                
                const worldMove = new THREE.Vector3();
                worldMove.add(forward.multiplyScalar(-moveDirection.z));
                worldMove.add(right.multiplyScalar(-moveDirection.x));
                worldMove.normalize().multiplyScalar(playerSpeed);
                
                playerMesh.position.add(worldMove);
                playerMesh.position.y = Math.max(playerMesh.position.y, 0.4 + 0.8/2);
                
                checkAndExpandGround();
            }
        }

        function checkAndExpandGround() {
            if (!playerMesh) return;
            const currentGridX = Math.floor(playerMesh.position.x / PLOT_WIDTH);
            const currentGridZ = Math.floor(playerMesh.position.z / PLOT_DEPTH);

            // Check a 3x3 area around the player
            for (let dx = -1; dx <= 1; dx++) {
                for (let dz = -1; dz <= 1; dz++) {
                    createGroundPlane(currentGridX + dx, currentGridZ + dz);
                }
            }
        }

        function updateCamera(forceSnap = false) {
            if (!playerMesh) return;
            const offset = new THREE.Vector3(0, 15, 20);
            const targetPosition = playerMesh.position.clone().add(offset);
            
            if (forceSnap) {
                camera.position.copy(targetPosition);
            } else {
                camera.position.lerp(targetPosition, 0.08);
            }
            
            camera.lookAt(playerMesh.position);
        }

        function animate() {
            requestAnimationFrame(animate);
            updatePlayerMovement();
            updateCamera();
            renderer.render(scene, camera);
        }
        
        // --- Full Object Factory ---
        function populateObjectFactory() {
            Object.assign(objectFactory, {
                "Simple House": createSimpleHouse, "Cyberpunk Wall Panel": createCyberpunkWallPanel, "Modular Hab Block": createModularHabBlock, "MegaCorp Skyscraper": createMegaCorpSkyscraper,
                "Castle Wall Section": createCastleWallSection, "Wooden Door": createWoodenDoor, "House Roof Section": createHouseRoofSection, "Concrete Bunker Wall": createConcreteBunkerWall,
                "Damaged House Facade": createDamagedHouseFacade, "Tree": createTree, "Rock": createRock, "Pine Tree": createPineTree, "Boulder": createBoulder, "Alien Plant": createAlienPlant,
                "Floating Rock Platform": createFloatingRockPlatform, "Rubble Pile": createRubblePile, "Fence Post": createFencePost, "Rooftop AC Unit": createRooftopACUnit,
                "Holographic Window Display": createHolographicWindowDisplay, "Jersey Barrier": createJerseyBarrier, "Oil Drum": createOilDrum, "Canned Food": createCannedFood,
                "Treasure Chest": createTreasureChest, "Wall Torch": createWallTorch, "Bone Pile": createBonePile, "King Figure": createKingFigure, "Soldier Figure": createSoldierFigure,
                "Mage Figure": createMageFigure, "Zombie Figure": createZombieFigure, "Survivor Figure": createSurvivorFigure, "Dwarf Miner Figure": createDwarfMinerFigure,
                "Undead Knight Figure": createUndeadKnightFigure, "Hero Figure": createHeroFigure, "Wooden Cart": createWoodenCart, "Ballista": createBallista, "Siege Tower": createSiegeTower,
                "Buggy Frame": createBuggyFrame, "Motorbike": createMotorbike, "Hover Bike": createHoverBike, "APC": createAPC, "Sand Boat": createSandBoat, "Makeshift Machete": createMakeshiftMachete,
                "Pistol Body": createPistolBody, "Scope Attachment": createScopeAttachment, "Laser Pistol": createLaserPistol, "Energy Sword": createEnergySword, "Dwarven Axe": createDwarvenAxe,
                "Magic Staff": createMagicStaff, "Candle Flame": createCandleFlame, "Dust Cloud": createDustCloud, "Blood Splat Decal": createBloodSplatDecal,
                "Burning Barrel Fire": createBurningBarrelFire, "Warp Tunnel Effect": createWarpTunnelEffect, "Laser Beam": createLaserBeam, "Gold Sparkle": createGoldSparkle, "Steam Vent": createSteamVent
            });
        }
        
        function populateObjectSelector() {
            const options = ["None", ...Object.keys(objectFactory)];
            options.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                objectSelect.appendChild(option);
            });
        }

        // --- All the create... functions from the original file go here ---
        function createFencePost(){const b=createObjectBase("Fence Post"),a=new THREE.MeshStandardMaterial({color:14596231,roughness:.9}),c=new THREE.Mesh(new THREE.BoxGeometry(.2,1.5,.2),a);return Object.assign(c,b),c.position.y=.75,c.castShadow=!0,c.receiveShadow=!0,c}
        function createCyberpunkWallPanel(){const b=createObjectBase("Cyberpunk Wall Panel"),a=new THREE.MeshStandardMaterial({color:47083,roughness:.5,metalness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(2,3,.2),a);return Object.assign(c,b),c.position.y=1.5,c.castShadow=!0,c.receiveShadow=!0,c}
        function createModularHabBlock(){const b=createObjectBase("Modular Hab Block"),a=new THREE.Group;Object.assign(a,b);const c=new THREE.MeshStandardMaterial({color:6710886,roughness:.7}),d=new THREE.Mesh(new THREE.BoxGeometry(3,2,3),c);return d.position.y=1,d.castShadow=!0,d.receiveShadow=!0,a.add(d),a}
        function createMegaCorpSkyscraper(){const b=createObjectBase("MegaCorp Skyscraper"),a=new THREE.Group;Object.assign(a,b);const c=new THREE.MeshStandardMaterial({color:3355545,roughness:.4,metalness:.9}),d=new THREE.Mesh(new THREE.BoxGeometry(4,10,4),c);return d.position.y=5,d.castShadow=!0,d.receiveShadow=!0,a.add(d),a}
        function createCastleWallSection(){const b=createObjectBase("Castle Wall Section"),a=new THREE.MeshStandardMaterial({color:8421504,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(5,3,1),a);return Object.assign(c,b),c.position.y=1.5,c.castShadow=!0,c.receiveShadow=!0,c}
        function createWoodenDoor(){const b=createObjectBase("Wooden Door"),a=new THREE.MeshStandardMaterial({color:9127187,roughness:.9}),c=new THREE.Mesh(new THREE.BoxGeometry(1,2,.2),a);return Object.assign(c,b),c.position.y=1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createHouseRoofSection(){const b=createObjectBase("House Roof Section"),a=new THREE.MeshStandardMaterial({color:8388608,roughness:.7}),c=new THREE.Mesh(new THREE.ConeGeometry(2,1,4),a);return Object.assign(c,b),c.position.y=1,c.rotation.y=Math.PI/4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createConcreteBunkerWall(){const b=createObjectBase("Concrete Bunker Wall"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.9}),c=new THREE.Mesh(new THREE.BoxGeometry(4,2,1),a);return Object.assign(c,b),c.position.y=1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createDamagedHouseFacade(){const b=createObjectBase("Damaged House Facade"),a=new THREE.MeshStandardMaterial({color:11184810,roughness:.9}),c=new THREE.Mesh(new THREE.BoxGeometry(3,2,.3),a);return Object.assign(c,b),c.position.y=1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createPineTree(){const c=createObjectBase("Pine Tree"),a=new THREE.Group;Object.assign(a,c);const d=new THREE.MeshStandardMaterial({color:9127187,roughness:.9}),b=new THREE.MeshStandardMaterial({color:25600,roughness:.8}),e=new THREE.Mesh(new THREE.CylinderGeometry(.2,.3,1.5,8),d);e.position.y=.75,e.castShadow=!0,e.receiveShadow=!0,a.add(e);const f=new THREE.Mesh(new THREE.ConeGeometry(1,2,8),b);return f.position.y=2,f.castShadow=!0,f.receiveShadow=!0,a.add(f),a}
        function createBoulder(){const b=createObjectBase("Boulder"),a=new THREE.MeshStandardMaterial({color:6710886,roughness:.8}),c=new THREE.Mesh(new THREE.IcosahedronGeometry(1,0),a);return Object.assign(c,b),c.position.y=.5,c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.castShadow=!0,c.receiveShadow=!0,c}
        function createAlienPlant(){const c=createObjectBase("Alien Plant"),a=new THREE.Group;Object.assign(a,c);const b=new THREE.MeshStandardMaterial({color:65280,roughness:.7}),d=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,1,8),b);d.position.y=.5,d.castShadow=!0,d.receiveShadow=!0,a.add(d);const e=new THREE.Mesh(new THREE.SphereGeometry(.3,8,8),b);return e.position.y=1,e.castShadow=!0,e.receiveShadow=!0,a.add(e),a}
        function createFloatingRockPlatform(){const b=createObjectBase("Floating Rock Platform"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(3,.5,3),a);return Object.assign(c,b),c.position.y=2,c.castShadow=!0,c.receiveShadow=!0,c}
        function createRubblePile(){const b=createObjectBase("Rubble Pile"),a=new THREE.Group;Object.assign(a,b);const c=new THREE.MeshStandardMaterial({color:7829367,roughness:.9});for(let d=0;d<5;d++){const e=new THREE.Mesh(new THREE.IcosahedronGeometry(.3,0),c);e.position.set(Math.random()*.5-.25,Math.random()*.3,Math.random()*.5-.25),e.castShadow=!0,e.receiveShadow=!0,a.add(e)}return a}
        function createRooftopACUnit(){const b=createObjectBase("Rooftop AC Unit"),a=new THREE.MeshStandardMaterial({color:6710886,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(1,.8,1),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createHolographicWindowDisplay(){const b=createObjectBase("Holographic Window Display"),a=new THREE.MeshStandardMaterial({color:47083,roughness:.5,transparent:!0,opacity:.7}),c=new THREE.Mesh(new THREE.PlaneGeometry(1,1),a);return Object.assign(c,b),c.position.y=1,c.castShadow=!1,c.receiveShadow=!1,c}
        function createJerseyBarrier(){const b=createObjectBase("Jersey Barrier"),a=new THREE.MeshStandardMaterial({color:8947848,roughness:.9}),c=new THREE.Mesh(new THREE.BoxGeometry(2,.8,.5),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createOilDrum(){const b=createObjectBase("Oil Drum"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.7,metalness:.3}),c=new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,1,12),a);return Object.assign(c,b),c.position.y=.5,c.castShadow=!0,c.receiveShadow=!0,c}
        function createCannedFood(){const b=createObjectBase("Canned Food"),a=new THREE.MeshStandardMaterial({color:11184810,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.2,12),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createTreasureChest(){const b=createObjectBase("Treasure Chest"),a=new THREE.MeshStandardMaterial({color:9127187,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(1,.6,.8),a);return Object.assign(c,b),c.position.y=.3,c.castShadow=!0,c.receiveShadow=!0,c}
        function createWallTorch(){const c=createObjectBase("Wall Torch"),a=new THREE.Group;Object.assign(a,c);const d=new THREE.MeshStandardMaterial({color:14596231,roughness:.9}),b=new THREE.MeshStandardMaterial({color:16729344,roughness:.5}),e=new THREE.Mesh(new THREE.BoxGeometry(.1,.5,.1),d);e.position.y=.25,e.castShadow=!0,e.receiveShadow=!0,a.add(e);const f=new THREE.Mesh(new THREE.SphereGeometry(.1,8,8),b);return f.position.y=.5,f.castShadow=!0,f.receiveShadow=!1,a.add(f),a}
        function createBonePile(){const b=createObjectBase("Bone Pile"),a=new THREE.Group;Object.assign(a,b);const c=new THREE.MeshStandardMaterial({color:14540253,roughness:.9});for(let d=0;d<3;d++){const e=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.3,8),c);e.position.set(Math.random()*.2-.1,Math.random()*.1,Math.random()*.2-.1),e.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),e.castShadow=!0,e.receiveShadow=!0,a.add(e)}return a}
        function createKingFigure(){const b=createObjectBase("King Figure"),a=new THREE.MeshStandardMaterial({color:16766720,roughness:.6}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createSoldierFigure(){const b=createObjectBase("Soldier Figure"),a=new THREE.MeshStandardMaterial({color:2263842,roughness:.7}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createMageFigure(){const b=createObjectBase("Mage Figure"),a=new THREE.MeshStandardMaterial({color:8388736,roughness:.7}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createZombieFigure(){const b=createObjectBase("Zombie Figure"),a=new THREE.MeshStandardMaterial({color:9498256,roughness:.8}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createSurvivorFigure(){const b=createObjectBase("Survivor Figure"),a=new THREE.MeshStandardMaterial({color:4620980,roughness:.7}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createDwarfMinerFigure(){const b=createObjectBase("Dwarf Miner Figure"),a=new THREE.MeshStandardMaterial({color:9127187,roughness:.7}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.5,4,8),a);return Object.assign(c,b),c.position.y=.35,c.castShadow=!0,c.receiveShadow=!0,c}
        function createUndeadKnightFigure(){const b=createObjectBase("Undead Knight Figure"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.8}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createHeroFigure(){const b=createObjectBase("Hero Figure"),a=new THREE.MeshStandardMaterial({color:16711680,roughness:.6}),c=new THREE.Mesh(new THREE.CapsuleGeometry(.2,.6,4,8),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createWoodenCart(){const b=createObjectBase("Wooden Cart"),a=new THREE.MeshStandardMaterial({color:9127187,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(2,.8,1),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createBallista(){const b=createObjectBase("Ballista"),a=new THREE.MeshStandardMaterial({color:14596231,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(1.5,.8,.5),a);return Object.assign(c,b),c.position.y=.4,c.castShadow=!0,c.receiveShadow=!0,c}
        function createSiegeTower(){const b=createObjectBase("Siege Tower"),a=new THREE.MeshStandardMaterial({color:9127187,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(2,4,2),a);return Object.assign(c,b),c.position.y=2,c.castShadow=!0,c.receiveShadow=!0,c}
        function createBuggyFrame(){const b=createObjectBase("Buggy Frame"),a=new THREE.MeshStandardMaterial({color:6710886,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(2,.5,1),a);return Object.assign(c,b),c.position.y=.25,c.castShadow=!0,c.receiveShadow=!0,c}
        function createMotorbike(){const b=createObjectBase("Motorbike"),a=new THREE.MeshStandardMaterial({color:3355443,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(1.5,.6,.4),a);return Object.assign(c,b),c.position.y=.3,c.castShadow=!0,c.receiveShadow=!0,c}
        function createHoverBike(){const b=createObjectBase("Hover Bike"),a=new THREE.MeshStandardMaterial({color:47083,roughness:.5,metalness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(1.5,.4,.4),a);return Object.assign(c,b),c.position.y=.5,c.castShadow=!0,c.receiveShadow=!0,c}
        function createAPC(){const b=createObjectBase("APC"),a=new THREE.MeshStandardMaterial({color:3099951,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(3,1.5,1.5),a);return Object.assign(c,b),c.position.y=.75,c.castShadow=!0,c.receiveShadow=!0,c}
        function createSandBoat(){const b=createObjectBase("Sand Boat"),a=new THREE.MeshStandardMaterial({color:14596231,roughness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(2,.5,1),a);return Object.assign(c,b),c.position.y=.25,c.castShadow=!0,c.receiveShadow=!0,c}
        function createMakeshiftMachete(){const b=createObjectBase("Makeshift Machete"),a=new THREE.MeshStandardMaterial({color:7829367,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(.8,.05,.2),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createPistolBody(){const b=createObjectBase("Pistol Body"),a=new THREE.MeshStandardMaterial({color:3355443,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(.5,.2,.3),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createScopeAttachment(){const b=createObjectBase("Scope Attachment"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.3,8),a);return Object.assign(c,b),c.position.y=.15,c.rotation.z=Math.PI/2,c.castShadow=!0,c.receiveShadow=!0,c}
        function createLaserPistol(){const b=createObjectBase("Laser Pistol"),a=new THREE.MeshStandardMaterial({color:47083,roughness:.5,metalness:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(.5,.2,.3),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createEnergySword(){const b=createObjectBase("Energy Sword"),a=new THREE.MeshStandardMaterial({color:65280,roughness:.5,transparent:!0,opacity:.8}),c=new THREE.Mesh(new THREE.BoxGeometry(.8,.05,.2),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!0,c}
        function createDwarvenAxe(){const b=createObjectBase("Dwarven Axe"),a=new THREE.MeshStandardMaterial({color:5592405,roughness:.7,metalness:.5}),c=new THREE.Mesh(new THREE.BoxGeometry(.5,.3,.1),a);return Object.assign(c,b),c.position.y=.15,c.castShadow=!0,c.receiveShadow=!0,c}
        function createMagicStaff(){const c=createObjectBase("Magic Staff"),a=new THREE.Group;Object.assign(a,c);const d=new THREE.MeshStandardMaterial({color:9127187,roughness:.8}),b=new THREE.MeshStandardMaterial({color:16711935,roughness:.5}),e=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,1.5,8),d);e.position.y=.75,e.castShadow=!0,e.receiveShadow=!0,a.add(e);const f=new THREE.Mesh(new THREE.SphereGeometry(.1,8,8),b);return f.position.y=1.5,f.castShadow=!0,f.receiveShadow=!0,a.add(f),a}
        function createCandleFlame(){const b=createObjectBase("Candle Flame"),a=new THREE.MeshStandardMaterial({color:16729344,roughness:.5,transparent:!0,opacity:.8}),c=new THREE.Mesh(new THREE.SphereGeometry(.1,8,8),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!0,c.receiveShadow=!1,c}
        function createDustCloud(){const b=createObjectBase("Dust Cloud"),a=new THREE.MeshStandardMaterial({color:11184810,roughness:.9,transparent:!0,opacity:.5}),c=new THREE.Mesh(new THREE.SphereGeometry(.5,8,8),a);return Object.assign(c,b),c.position.y=.25,c.castShadow=!1,c.receiveShadow=!1,c}
        function createBloodSplatDecal(){const b=createObjectBase("Blood Splat Decal"),a=new THREE.MeshStandardMaterial({color:9109504,roughness:.9,transparent:!0,opacity:.8}),c=new THREE.Mesh(new THREE.PlaneGeometry(.5,.5),a);return Object.assign(c,b),c.position.y=.01,c.rotation.x=-Math.PI/2,c.castShadow=!1,c.receiveShadow=!0,c}
        function createBurningBarrelFire(){const c=createObjectBase("Burning Barrel Fire"),a=new THREE.Group;Object.assign(a,c);const d=new THREE.MeshStandardMaterial({color:5592405,roughness:.7,metalness:.5}),b=new THREE.MeshStandardMaterial({color:16729344,roughness:.5,transparent:!0,opacity:.8}),e=new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,1,12),d);e.position.y=.5,e.castShadow=!0,e.receiveShadow=!0,a.add(e);const f=new THREE.Mesh(new THREE.SphereGeometry(.3,8,8),b);return f.position.y=1,f.castShadow=!0,f.receiveShadow=!1,a.add(f),a}
        function createWarpTunnelEffect(){const b=createObjectBase("Warp Tunnel Effect"),a=new THREE.MeshStandardMaterial({color:47083,roughness:.5,transparent:!0,opacity:.7}),c=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,2,12),a);return Object.assign(c,b),c.position.y=1,c.castShadow=!1,c.receiveShadow=!1,c}
        function createLaserBeam(){const b=createObjectBase("Laser Beam"),a=new THREE.MeshStandardMaterial({color:16711680,roughness:.5,transparent:!0,opacity:.8}),c=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,1,8),a);return Object.assign(c,b),c.position.y=.5,c.rotation.z=Math.PI/2,c.castShadow=!1,c.receiveShadow=!1,c}
        function createGoldSparkle(){const b=createObjectBase("Gold Sparkle"),a=new THREE.MeshStandardMaterial({color:16766720,roughness:.5,transparent:!0,opacity:.8}),c=new THREE.Mesh(new THREE.SphereGeometry(.1,8,8),a);return Object.assign(c,b),c.position.y=.1,c.castShadow=!1,c.receiveShadow=!1,c}
        function createSteamVent(){const b=createObjectBase("Steam Vent"),a=new THREE.MeshStandardMaterial({color:11184810,roughness:.9,transparent:!0,opacity:.5}),c=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.5,8),a);return Object.assign(c,b),c.position.y=.25,c.castShadow=!1,c.receiveShadow=!1,c}

        // --- Start the application ---
        init();
    </script>
</body>
</html>  and this one for files integration and visualization (just as threeD cubes and shapes rather than the squarified treemap of just 2d.  Show them both on the app for an upload of subdirectories or a path of uploads for the name and file modified and create dates which both should show in short form MMdd HHmm24 and this app html:   https://allaiinc.org/Squarified_Treemap_Explorer.html  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Squarified Treemap - Folder Explorer (Fullscreen + Launcher)</title>

  <style>
    :root{
      --bg: #0f1220;
      --panel: rgba(255,255,255,0.08);
      --panel2: rgba(255,255,255,0.06);
      --line: rgba(255,255,255,0.14);
      --txt: rgba(255,255,255,0.92);
      --muted: rgba(255,255,255,0.70);
      --accent: #61dafb;

      /* Layout vars */
      --topbar-h: 64px;
      --sidebar-w: 320px; /* will be overridden by slider */
    }

    html, body { height: 100%; }
    body {
      margin: 0;
      background: radial-gradient(1200px 800px at 20% 0%, rgba(97,218,251,0.14), transparent 55%),
                  radial-gradient(1000px 800px at 100% 20%, rgba(180,97,251,0.10), transparent 55%),
                  var(--bg);
      color: var(--txt);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    /* App layout */
    #app {
      height: 100%;
      display: grid;
      grid-template-rows: var(--topbar-h) 1fr;
    }

    #topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
      backdrop-filter: blur(10px);
    }

    #title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }
    #title .badge {
      font-weight: 700;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 999px;
      background: rgba(97,218,251,0.16);
      border: 1px solid rgba(97,218,251,0.25);
      color: var(--txt);
    }

    .spacer { flex: 1; }

    .btn {
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.07);
      color: var(--txt);
      border-radius: 10px;
      padding: 8px 10px;
      cursor: pointer;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      user-select: none;
    }
    .btn:hover { background: rgba(255,255,255,0.10); }
    .btn:active { transform: translateY(1px); }

    .hint {
      color: var(--muted);
      font-size: 12px;
      white-space: nowrap;
    }

    #content {
      height: calc(100vh - var(--topbar-h));
      display: grid;
      grid-template-columns: var(--sidebar-w) 1fr;
      min-width: 0;
      min-height: 0;
    }

    #sidebar {
      border-right: 1px solid var(--line);
      background: rgba(0,0,0,0.22);
      min-width: 220px;
      max-width: 48vw;
      overflow: auto;
    }

    #main {
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: 1fr;
      overflow: hidden;
    }

    /* Panels */
    .panel {
      margin: 12px;
      padding: 12px;
      border-radius: 14px;
      background: var(--panel);
      border: 1px solid rgba(255,255,255,0.12);
    }
    .panel h3 {
      margin: 0 0 10px 0;
      font-size: 14px;
      color: var(--txt);
      letter-spacing: 0.2px;
    }
    .panel .sub {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
      margin-bottom: 10px;
    }

    /* Folder pick */
    .folder-picker-label {
      display: inline-flex;
      gap: 10px;
      align-items: center;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(97,218,251,0.16);
      border: 1px solid rgba(97,218,251,0.25);
      cursor: pointer;
      font-weight: 800;
      color: var(--txt);
      user-select: none;
    }
    .folder-picker-label:hover { background: rgba(97,218,251,0.22); }
    #folder-picker { display: none; }

    /* Controls */
    .row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      align-items: center;
      margin: 8px 0;
    }
    .row label { color: var(--muted); font-size: 12px; }
    input[type="range"] { width: 100%; }
    .kv {
      font-variant-numeric: tabular-nums;
      color: var(--txt);
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      padding: 6px 8px;
      font-size: 12px;
      min-width: 72px;
      text-align: center;
    }

    /* Treemap container fullscreen */
    #treemap-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: rgba(255,255,255,0.06);
    }

    /* Treemap nodes */
    .node-group { position: absolute; box-sizing: border-box; overflow: hidden; }
    .internal { border: 1px solid rgba(255,255,255,0.16); }
    .leaf {
      background-clip: padding-box;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.75);
      transition: filter 0.15s ease-in-out, transform 0.1s ease-in-out;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      cursor: pointer;
    }
    .leaf:hover {
      filter: brightness(1.18);
      z-index: 10;
      transform: translateZ(0);
    }

    .node-label {
      display: block;
      padding: 2px 6px;
      color: #fff;
      background: rgba(0,0,0,0.38);
      font-size: 12px;
      font-weight: 800;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
    }
    .node-label:hover { background: rgba(0,0,0,0.55); }

    .leaf-label {
      padding: 4px;
      color: rgba(255,255,255,0.95);
      text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
      text-align: left;
      white-space: normal;
      word-break: break-word;
      pointer-events: none;
      line-height: 1.15;
    }

    /* Tooltip */
    #tooltip {
      position: fixed;
      background: rgba(0,0,0,0.85);
      color: white;
      padding: 8px 12px;
      border-radius: 10px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.12s;
      font-size: 13px;
      z-index: 1001;
      transform: translate(15px, 10px);
      border: 1px solid rgba(255,255,255,0.12);
      max-width: 420px;
    }

    /* Context menu */
    #context-menu {
      position: fixed;
      display: none;
      background: rgba(20, 24, 40, 0.96);
      border: 1px solid rgba(255,255,255,0.16);
      box-shadow: 0 10px 30px rgba(0,0,0,0.45);
      border-radius: 12px;
      padding: 6px 0;
      z-index: 1200;
      min-width: 180px;
      overflow: hidden;
      backdrop-filter: blur(10px);
    }
    #context-menu button {
      display: block;
      width: 100%;
      padding: 10px 14px;
      border: none;
      background: none;
      text-align: left;
      cursor: pointer;
      font-size: 13px;
      color: var(--txt);
      font-weight: 700;
    }
    #context-menu button:hover {
      background: rgba(97,218,251,0.18);
    }
    #context-menu .sep {
      height: 1px;
      background: rgba(255,255,255,0.10);
      margin: 6px 0;
    }

    /* Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.62);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 16px;
    }
    .modal-content {
      width: min(980px, 96vw);
      max-height: 92vh;
      background: rgba(20,24,40,0.96);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }
    .modal-head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
    }
    .modal-head .meta {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .modal-head .meta strong {
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .modal-head .meta span { color: var(--muted); font-size: 12px; }
    .modal-body {
      padding: 14px;
      overflow: auto;
    }
    .modal-body img, .modal-body video {
      max-width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(0,0,0,0.25);
    }
    .modal-body iframe {
      width: 100%;
      height: min(70vh, 680px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      background: rgba(0,0,0,0.20);
    }
    .modal-body audio {
      width: 100%;
    }

    /* Launcher list */
    .launcher-add {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      align-items: center;
    }
    .text {
      width: 100%;
      padding: 10px 10px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.06);
      color: var(--txt);
      outline: none;
    }
    .text::placeholder { color: rgba(255,255,255,0.45); }
    .launcher-list {
      display: grid;
      gap: 8px;
      margin-top: 10px;
    }
    .launch-item {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 8px;
      align-items: center;
      padding: 10px;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
    }
    .launch-item .u {
      min-width: 0;
      display: block;
      color: var(--txt);
      font-weight: 800;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* References (collapsible) */
    details summary {
      cursor: pointer;
      font-weight: 800;
      color: var(--txt);
      user-select: none;
    }
    details .refs {
      margin-top: 10px;
      display: grid;
      gap: 8px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }
    details a { color: rgba(97,218,251,0.95); text-decoration: none; }
    details a:hover { text-decoration: underline; }

    /* Tiny toast */
    #toast {
      position: fixed;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      background: rgba(20,24,40,0.95);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 999px;
      padding: 10px 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      color: var(--txt);
      font-weight: 800;
      font-size: 13px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease;
      z-index: 2500;
    }
    #toast.show { opacity: 1; }
  </style>
</head>

<body>
  <div id="app">
    <header id="topbar">
      <div id="title">🗺️ Squarified Treemap Explorer <span class="badge">Fullscreen + Launcher</span></div>
      <span class="hint">Tip: double-click a file tile to preview • right-click for menu • <b>F</b> fullscreen</span>
      <div class="spacer"></div>
      <button class="btn" id="btn-fullscreen">⛶ Fullscreen</button>
      <button class="btn" id="btn-reset-layout">↺ Reset layout</button>
    </header>

    <div id="content">
      <aside id="sidebar">
        <div class="panel">
          <h3>📁 Folder</h3>
          <div class="sub">Pick a folder (Chrome/Edge). We’ll build the treemap from file sizes.</div>
          <label for="folder-picker" class="folder-picker-label">📂 Choose a Folder</label>
          <input type="file" id="folder-picker" webkitdirectory directory multiple />
        </div>

        <div class="panel">
          <h3>📐 Layout</h3>

          <div class="row">
            <label for="sidebarRange">Sidebar width</label>
            <div class="kv" id="sidebarVal">320px</div>
          </div>
          <input id="sidebarRange" type="range" min="220" max="720" step="10" value="320" />

          <div class="row">
            <label for="fontRange">Leaf label size</label>
            <div class="kv" id="fontVal">11px</div>
          </div>
          <input id="fontRange" type="range" min="9" max="16" step="1" value="11" />

          <div class="row">
            <label for="paddingTopRange">Directory label bar</label>
            <div class="kv" id="padTopVal">20px</div>
          </div>
          <input id="paddingTopRange" type="range" min="16" max="36" step="1" value="20" />

          <div class="row">
            <label for="innerPadRange">Inner padding</label>
            <div class="kv" id="innerPadVal">1</div>
          </div>
          <input id="innerPadRange" type="range" min="0" max="8" step="1" value="1" />
        </div>

        <div class="panel">
          <h3>🚀 Media Launcher (URLs)</h3>
          <div class="sub">Paste a URL (mp4/mp3/png/etc). Click ▶ to open in the built-in viewer.</div>

          <div class="launcher-add">
            <input class="text" id="urlInput" placeholder="https://example.com/video.mp4" />
            <button class="btn" id="btnAddUrl">＋ Add</button>
          </div>

          <div class="launcher-list" id="launcherList"></div>
        </div>

        <div class="panel">
          <details id="refsDetails">
            <summary>📚 References</summary>
            <div class="refs" id="references"></div>
          </details>
        </div>
      </aside>

      <main id="main">
        <div id="treemap-container"></div>
      </main>
    </div>
  </div>

  <div id="tooltip"></div>

  <!-- Custom Context Menu -->
  <div id="context-menu">
    <button id="menu-preview">▶ Preview</button>
    <button id="menu-copy-path">📋 Copy Path</button>
    <div class="sep"></div>
    <button id="menu-delete">🧹 Delete from View</button>
  </div>

  <!-- Delete confirmation -->
  <div id="delete-modal" class="modal-overlay">
    <div class="modal-content" style="width:min(560px,96vw)">
      <div class="modal-head">
        <div class="meta">
          <strong>Remove from treemap?</strong>
          <span>This only removes it from the visualization (won’t delete from disk).</span>
        </div>
        <div class="spacer"></div>
        <button class="btn" id="modal-cancel">✕</button>
      </div>
      <div class="modal-body" style="display:flex; gap:10px; justify-content:flex-end; align-items:center;">
        <button class="btn" id="modal-cancel-2">Cancel</button>
        <button class="btn" id="modal-confirm" style="background:rgba(255,80,80,0.18);border-color:rgba(255,80,80,0.35)">Yes, Remove</button>
      </div>
    </div>
  </div>

  <!-- Media viewer modal -->
  <div id="media-modal" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-head">
        <div class="meta">
          <strong id="media-title">Media</strong>
          <span id="media-subtitle">—</span>
        </div>
        <div class="spacer"></div>
        <button class="btn" id="media-open-newtab">↗ Open</button>
        <button class="btn" id="media-close">✕ Close</button>
      </div>
      <div class="modal-body" id="media-body"></div>
    </div>
  </div>

  <div id="toast"></div>

  <!-- D3 -->
  <script src="https://d3js.org/d3.v7.min.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const folderPicker = document.getElementById('folder-picker');
      const treemapContainer = document.getElementById('treemap-container');
      const tooltip = document.getElementById('tooltip');
      const contextMenu = document.getElementById('context-menu');

      const deleteModal = document.getElementById('delete-modal');

      const mediaModal = document.getElementById('media-modal');
      const mediaTitle = document.getElementById('media-title');
      const mediaSubtitle = document.getElementById('media-subtitle');
      const mediaBody = document.getElementById('media-body');
      const mediaClose = document.getElementById('media-close');
      const mediaOpenNewtab = document.getElementById('media-open-newtab');

      const btnFullscreen = document.getElementById('btn-fullscreen');
      const btnResetLayout = document.getElementById('btn-reset-layout');

      const sidebarRange = document.getElementById('sidebarRange');
      const sidebarVal = document.getElementById('sidebarVal');
      const fontRange = document.getElementById('fontRange');
      const fontVal = document.getElementById('fontVal');
      const paddingTopRange = document.getElementById('paddingTopRange');
      const padTopVal = document.getElementById('padTopVal');
      const innerPadRange = document.getElementById('innerPadRange');
      const innerPadVal = document.getElementById('innerPadVal');

      const urlInput = document.getElementById('urlInput');
      const btnAddUrl = document.getElementById('btnAddUrl');
      const launcherList = document.getElementById('launcherList');

      const referencesContainer = document.getElementById('references');
      const toastEl = document.getElementById('toast');

      let currentFileTree = null;
      let nodeTarget = null; // currently right-clicked leaf
      let nodeToDelete = null;

      let currentModalObjectUrl = null; // blob URL for local file preview
      let lastMediaHref = null;         // for "Open" button

      // ---------------------------
      // References
      // ---------------------------
      const references = [
        { title: "A heuristic extending the Squarified treemapping algorithm", links: [
          { text: "Abstract", url: "https://arxiv.org/abs/1609.00754" },
          { text: "PDF", url: "https://arxiv.org/pdf/1609.00754" },
        ]},
        { title: "Squarified Treemaps", links: [{ text: "PDF", url: "https://vanwijk.win.tue.nl/stm.pdf" }]},
        { title: "Treemaps with Bounded Aspect Ratio", links: [
          { text: "Abstract", url: "https://arxiv.org/abs/1012.1749" },
          { text: "PDF", url: "https://arxiv.org/pdf/1012.1749" },
        ]},
        { title: "Interactive Visualisation of Hierarchical Quantitative Data: an Evaluation", links: [
          { text: "Abstract", url: "https://www.arxiv.org/abs/1908.01277v1" },
          { text: "PDF", url: "https://www.arxiv.org/pdf/1908.01277v1" },
        ]},
        { title: "Treemapping - Wikipedia", links: [{ text: "Article", url: "https://en.wikipedia.org/wiki/Treemapping" }]},
        { title: "A Novel Algorithm for Real-time Procedural Generation of Building Floor Plans", links: [{ text: "HTML", url: "https://ar5iv.labs.arxiv.org/html/1211.5842" }]},
        { title: "Fat Polygonal Partitions with Applications to Visualization and Embeddings", links: [
          { text: "Abstract", url: "https://arxiv.org/abs/1009.1866" },
          { text: "PDF", url: "https://arxiv.org/pdf/1009.1866" },
        ]},
        { title: "Tiling heuristics and evaluation metrics for treemaps with a target node aspect ratio", links: [
          { text: "PDF", url: "https://www.diva-portal.org/smash/get/diva2:1129639/FULLTEXT01.pdf" },
        ]},
      ];

      function renderReferences() {
        referencesContainer.innerHTML = references.map(ref => {
          const links = ref.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.text}</a>`).join(" · ");
          return `<div><b>${escapeHtml(ref.title)}</b><br>${links}</div>`;
        }).join("");
      }
      renderReferences();

      // ---------------------------
      // Helpers: toast + escaping
      // ---------------------------
      function toast(msg, ms=1200){
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        window.clearTimeout(toastEl._t);
        toastEl._t = window.setTimeout(()=>toastEl.classList.remove('show'), ms);
      }
      function escapeHtml(s){
        return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
      }

      // ---------------------------
      // Persisted layout settings
      // ---------------------------
      const LS = {
        sidebar: 'treemap.sidebarW',
        font: 'treemap.fontPx',
        padTop: 'treemap.padTop',
        innerPad: 'treemap.innerPad',
        launcher: 'treemap.launcherUrls'
      };

      function applyLayoutFromStorage() {
        const sw = Number(localStorage.getItem(LS.sidebar) || 320);
        const fp = Number(localStorage.getItem(LS.font) || 11);
        const pt = Number(localStorage.getItem(LS.padTop) || 20);
        const ip = Number(localStorage.getItem(LS.innerPad) || 1);

        sidebarRange.value = clamp(sw, 220, 720);
        fontRange.value = clamp(fp, 9, 16);
        paddingTopRange.value = clamp(pt, 16, 36);
        innerPadRange.value = clamp(ip, 0, 8);

        syncLayoutUI();
      }

      function syncLayoutUI() {
        const sw = Number(sidebarRange.value);
        const fp = Number(fontRange.value);
        const pt = Number(paddingTopRange.value);
        const ip = Number(innerPadRange.value);

        document.documentElement.style.setProperty('--sidebar-w', `${sw}px`);
        sidebarVal.textContent = `${sw}px`;
        fontVal.textContent = `${fp}px`;
        padTopVal.textContent = `${pt}px`;
        innerPadVal.textContent = `${ip}`;

        // Update leaf label size live (no re-render needed)
        const style = document.getElementById('leafLabelStyle') || (() => {
          const s = document.createElement('style');
          s.id = 'leafLabelStyle';
          document.head.appendChild(s);
          return s;
        })();
        style.textContent = `.leaf-label{ font-size:${fp}px !important; }`;
      }

      function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

      function persistLayout() {
        localStorage.setItem(LS.sidebar, String(sidebarRange.value));
        localStorage.setItem(LS.font, String(fontRange.value));
        localStorage.setItem(LS.padTop, String(paddingTopRange.value));
        localStorage.setItem(LS.innerPad, String(innerPadRange.value));
      }

      applyLayoutFromStorage();

      sidebarRange.addEventListener('input', () => { syncLayoutUI(); persistLayout(); });
      fontRange.addEventListener('input', () => { syncLayoutUI(); persistLayout(); });
      paddingTopRange.addEventListener('input', () => { syncLayoutUI(); persistLayout(); rerenderDebounced(); });
      innerPadRange.addEventListener('input', () => { syncLayoutUI(); persistLayout(); rerenderDebounced(); });

      btnResetLayout.addEventListener('click', () => {
        localStorage.removeItem(LS.sidebar);
        localStorage.removeItem(LS.font);
        localStorage.removeItem(LS.padTop);
        localStorage.removeItem(LS.innerPad);
        applyLayoutFromStorage();
        rerenderDebounced();
        toast("Layout reset");
      });

      // ---------------------------
      // Fullscreen
      // ---------------------------
      async function toggleFullscreen() {
        try {
          if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
          } else {
            await document.exitFullscreen();
          }
        } catch (e) {
          console.warn(e);
          toast("Fullscreen not available");
        }
      }
      btnFullscreen.addEventListener('click', toggleFullscreen);
      window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'f' && !e.repeat) toggleFullscreen();
        if (e.key === 'Escape') { contextMenu.style.display = 'none'; }
      });

      // ---------------------------
      // Launcher (URLs)
      // ---------------------------
      let launcherUrls = [];
      function loadLauncher() {
        try {
          launcherUrls = JSON.parse(localStorage.getItem(LS.launcher) || "[]");
          if (!Array.isArray(launcherUrls)) launcherUrls = [];
        } catch { launcherUrls = []; }
        renderLauncher();
      }
      function saveLauncher() {
        localStorage.setItem(LS.launcher, JSON.stringify(launcherUrls.slice(0, 200)));
      }
      function addUrl(u) {
        u = (u || "").trim();
        if (!u) return;
        launcherUrls.unshift(u);
        launcherUrls = Array.from(new Set(launcherUrls)); // de-dupe
        launcherUrls = launcherUrls.slice(0, 50);
        saveLauncher();
        renderLauncher();
      }
      function removeUrl(u) {
        launcherUrls = launcherUrls.filter(x => x !== u);
        saveLauncher();
        renderLauncher();
      }
      function renderLauncher() {
        if (!launcherUrls.length) {
          launcherList.innerHTML = `<div class="sub" style="margin-top:8px;">No URLs yet. Add one above.</div>`;
          return;
        }
        launcherList.innerHTML = launcherUrls.map(u => `
          <div class="launch-item">
            <span class="u" title="${escapeHtml(u)}">${escapeHtml(u)}</span>
            <button class="btn" data-open="${escapeHtml(u)}">▶</button>
            <button class="btn" data-del="${escapeHtml(u)}">🗑️</button>
          </div>
        `).join("");

        launcherList.querySelectorAll('[data-open]').forEach(b => {
          b.addEventListener('click', () => openMedia({ href: b.getAttribute('data-open'), title: "URL media" }));
        });
        launcherList.querySelectorAll('[data-del]').forEach(b => {
          b.addEventListener('click', () => removeUrl(b.getAttribute('data-del')));
        });
      }

      btnAddUrl.addEventListener('click', () => {
        addUrl(urlInput.value);
        urlInput.value = "";
        urlInput.focus();
      });
      urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          btnAddUrl.click();
        }
      });

      loadLauncher();

      // ---------------------------
      // Folder -> Tree
      // ---------------------------
      folderPicker.addEventListener('change', handleFileSelect);

      function handleFileSelect(event) {
        const files = event.target.files;
        if (!files || files.length === 0) {
          treemapContainer.innerHTML = '<div style="padding:16px;color:rgba(255,255,255,0.7);">No files selected or folder is empty.</div>';
          return;
        }
        currentFileTree = buildFileTree(files);
        renderTreemap(currentFileTree);
      }

      function buildFileTree(files) {
        const root = { name: "root", path: "", children: [] };
        for (const file of files) {
          if (!file || file.size === 0) continue;
          const pathParts = file.webkitRelativePath.split('/');
          let currentNode = root;
          let currentPath = "";

          for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];
            currentPath = currentPath ? `${currentPath}/${part}` : part;

            if (i === pathParts.length - 1) {
              currentNode.children.push({
                name: part,
                value: file.size,
                path: currentPath,
                file: file,                // keep file object for preview
                mime: file.type || ""       // helps determine preview
              });
            } else {
              let dirNode = currentNode.children.find(child => child.name === part && child.children);
              if (!dirNode) {
                dirNode = { name: part, children: [], path: currentPath };
                currentNode.children.push(dirNode);
              }
              currentNode = dirNode;
            }
          }
        }
        return root;
      }

      // ---------------------------
      // Treemap rendering
      // ---------------------------
      function renderTreemap(data) {
        treemapContainer.innerHTML = '';

        const width = treemapContainer.clientWidth;
        const height = treemapContainer.clientHeight;
        if (width < 10 || height < 10) return;

        const padTop = Number(paddingTopRange.value);
        const innerPad = Number(innerPadRange.value);

        const root = d3.hierarchy(data)
          .sum(d => d.value || 0)
          .sort((a, b) => (b.value || 0) - (a.value || 0));

        const treemapLayout = d3.treemap()
          .size([width, height])
          .paddingInner(innerPad)
          .paddingOuter(3)
          .paddingTop(padTop)
          .tile(d3.treemapSquarify);

        treemapLayout(root);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const node = d3.select(treemapContainer)
          .selectAll('div')
          .data(root.descendants())
          .join('div')
          .attr('class', d => `node-group ${d.children ? 'internal' : 'leaf'}`)
          .style('left', d => `${d.x0}px`)
          .style('top', d => `${d.y0}px`)
          .style('width', d => `${Math.max(0, d.x1 - d.x0)}px`)
          .style('height', d => `${Math.max(0, d.y1 - d.y0)}px`);

        // Leaves (files)
        const leaves = node.filter(d => !d.children);

        leaves
          .style('background-color', d => {
            let ancestor = d;
            while (ancestor.depth > 1) ancestor = ancestor.parent;
            return color(ancestor.data.name);
          })
          .on('contextmenu', (event, d) => {
            event.preventDefault();
            event.stopPropagation();
            nodeTarget = d;
            nodeToDelete = d;
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.top = `${event.clientY}px`;
          })
          .on('dblclick', (event, d) => {
            event.preventDefault();
            openLeafPreview(d);
          })
          .on('mouseenter', (event, d) => {
            tooltip.style.opacity = 1;
            tooltip.innerHTML = `
              <strong>File:</strong> ${escapeHtml(d.data.name)}<br>
              <strong>Path:</strong> ${escapeHtml(d.data.path)}<br>
              <strong>Size:</strong> ${escapeHtml(formatBytes(d.value || 0))}<br>
              <strong>Type:</strong> ${escapeHtml(d.data.mime || guessMimeFromName(d.data.name) || "unknown")}
            `;
          })
          .on('mousemove', (event) => {
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY}px`;
          })
          .on('mouseleave', () => {
            tooltip.style.opacity = 0;
          });

        leaves.append('div')
          .attr('class', 'leaf-label')
          .text(d => d.data.name);

        // Directories
        const directories = node.filter(d => d.children);

        directories.append('a')
          .attr('class', 'node-label')
          .attr('href', d => `file:///${d.data.path ? d.data.path.replace(/\//g, '\\') : ''}`)
          .on('click', (event, d) => {
            event.preventDefault();
            // browsers won't open local file:// reliably; offer a helpful copy instead
            if (d.data.path) {
              navigator.clipboard?.writeText(d.data.path).then(() => toast("Directory path copied"));
            }
          })
          .text(d => d.data.name);

        directories
          .on('mouseenter', (event, d) => {
            tooltip.style.opacity = 1;
            tooltip.innerHTML = `
              <strong>Directory:</strong> ${escapeHtml(d.data.path || d.data.name)}<br>
              <strong>Total Size:</strong> ${escapeHtml(formatBytes(d.value || 0))}
            `;
          })
          .on('mousemove', (event) => {
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY}px`;
          })
          .on('mouseleave', () => {
            tooltip.style.opacity = 0;
          });
      }

      // ResizeObserver (so slider-resize triggers treemap reflow too)
      let rerenderTimer = null;
      function rerenderDebounced() {
        if (!currentFileTree) return;
        window.clearTimeout(rerenderTimer);
        rerenderTimer = window.setTimeout(() => renderTreemap(currentFileTree), 60);
      }

      const ro = new ResizeObserver(() => rerenderDebounced());
      ro.observe(treemapContainer);

      window.addEventListener('resize', () => rerenderDebounced());

      // ---------------------------
      // Context menu actions
      // ---------------------------
      window.addEventListener('click', () => {
        contextMenu.style.display = 'none';
      });

      document.getElementById('menu-copy-path').addEventListener('click', async () => {
        if (nodeTarget?.data?.path && navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(nodeTarget.data.path);
            toast("Path copied");
          } catch {
            toast("Copy failed");
          }
        }
      });

      document.getElementById('menu-preview').addEventListener('click', () => {
        if (nodeTarget) openLeafPreview(nodeTarget);
      });

      document.getElementById('menu-delete').addEventListener('click', () => {
        if (nodeToDelete) deleteModal.style.display = 'flex';
      });

      // Delete modal buttons
      const closeDeleteModal = () => {
        deleteModal.style.display = 'none';
        nodeToDelete = null;
        nodeTarget = null;
      };

      document.getElementById('modal-cancel').addEventListener('click', closeDeleteModal);
      document.getElementById('modal-cancel-2').addEventListener('click', closeDeleteModal);

      document.getElementById('modal-confirm').addEventListener('click', () => {
        if (nodeToDelete && nodeToDelete.parent) {
          const children = nodeToDelete.parent.data.children;
          const idx = children.findIndex(child => child.path === nodeToDelete.data.path);
          if (idx > -1) children.splice(idx, 1);
          renderTreemap(currentFileTree);
          toast("Removed from view");
        }
        closeDeleteModal();
      });

      // ---------------------------
      // Media preview (URL or File)
      // ---------------------------
      mediaClose.addEventListener('click', closeMediaModal);
      mediaModal.addEventListener('click', (e) => { if (e.target === mediaModal) closeMediaModal(); });

      mediaOpenNewtab.addEventListener('click', () => {
        if (lastMediaHref) window.open(lastMediaHref, '_blank', 'noopener');
      });

      function closeMediaModal(){
        mediaModal.style.display = 'none';
        mediaBody.innerHTML = '';
        mediaTitle.textContent = 'Media';
        mediaSubtitle.textContent = '—';
        lastMediaHref = null;

        if (currentModalObjectUrl) {
          URL.revokeObjectURL(currentModalObjectUrl);
          currentModalObjectUrl = null;
        }
      }

      function openLeafPreview(d){
        const file = d?.data?.file;
        if (!file) {
          toast("No file object available");
          return;
        }
        const href = URL.createObjectURL(file);
        currentModalObjectUrl = href;

        openMedia({
          href,
          title: d.data.name,
          subtitle: d.data.path,
          mime: d.data.mime || file.type || guessMimeFromName(d.data.name)
        });
      }

      function openMedia({ href, title="Media", subtitle="", mime="" }){
        closeMediaModal(); // ensures old blob url is revoked
        // Note: closeMediaModal clears blob url; if we're opening a blob URL,
        // set it after close. We'll just re-set lastMediaHref below.

        lastMediaHref = href;
        mediaTitle.textContent = title;
        mediaSubtitle.textContent = subtitle || href;

        // Determine type
        const kind = classifyMedia(href, mime);

        let html = '';
        if (kind === 'image') {
          html = `<img src="${escapeHtml(href)}" alt="${escapeHtml(title)}" />`;
        } else if (kind === 'audio') {
          html = `<audio controls autoplay src="${escapeHtml(href)}"></audio>`;
        } else if (kind === 'video') {
          html = `<video controls autoplay playsinline src="${escapeHtml(href)}"></video>`;
        } else {
          // Many sites disallow embedding; still useful for direct media URLs / permissive pages
          html = `<iframe src="${escapeHtml(href)}" referrerpolicy="no-referrer" sandbox="allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
                  <div style="margin-top:10px;color:rgba(255,255,255,0.7);font-size:12px;">
                    If the embed is blocked, use <b>Open</b> (top right).
                  </div>`;
        }

        mediaBody.innerHTML = html;
        mediaModal.style.display = 'flex';

        // If href is a blob URL we created for a file, we must not revoke it immediately.
        // We only revoke on close. So we keep currentModalObjectUrl if it matches.
        if (href.startsWith('blob:') && !currentModalObjectUrl) currentModalObjectUrl = href;
      }

      function classifyMedia(href, mime=""){
        const m = (mime || "").toLowerCase();
        if (m.startsWith('image/')) return 'image';
        if (m.startsWith('audio/')) return 'audio';
        if (m.startsWith('video/')) return 'video';

        const u = href.toLowerCase().split('?')[0].split('#')[0];
        const ext = u.includes('.') ? u.slice(u.lastIndexOf('.') + 1) : "";
        const img = new Set(['png','jpg','jpeg','gif','webp','svg','bmp','avif']);
        const aud = new Set(['mp3','wav','ogg','m4a','aac','flac','opus']);
        const vid = new Set(['mp4','webm','ogv','mov','m4v','mkv']);

        if (img.has(ext)) return 'image';
        if (aud.has(ext)) return 'audio';
        if (vid.has(ext)) return 'video';
        return 'page';
      }

      function guessMimeFromName(name=""){
        const n = String(name).toLowerCase();
        if (n.endsWith('.png')||n.endsWith('.jpg')||n.endsWith('.jpeg')||n.endsWith('.gif')||n.endsWith('.webp')||n.endsWith('.svg')||n.endsWith('.avif')) return 'image/*';
        if (n.endsWith('.mp3')||n.endsWith('.wav')||n.endsWith('.ogg')||n.endsWith('.m4a')||n.endsWith('.aac')||n.endsWith('.flac')||n.endsWith('.opus')) return 'audio/*';
        if (n.endsWith('.mp4')||n.endsWith('.webm')||n.endsWith('.mov')||n.endsWith('.m4v')||n.endsWith('.ogv')||n.endsWith('.mkv')) return 'video/*';
        return '';
      }

      // ---------------------------
      // Byte formatting
      // ---------------------------
      function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
      }

      // Initial UI sync
      syncLayoutUI();
    });
  </script>
</body>
</html>
