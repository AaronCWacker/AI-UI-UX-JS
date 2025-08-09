// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true // Make canvas background transparent
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// --- OBJECTS ---

// Central Torus Knot (the glowing frame)
const geometry = new THREE.TorusKnotGeometry(18, 1, 300, 20, 2, 3);
const material = new THREE.MeshStandardMaterial({
    color: 0x00ffff, // Cyan color
    metalness: 0.9,
    roughness: 0.2,
    emissive: 0x005555 // Gives it a subtle inner glow
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// --- LIGHTS ---

const pointLight = new THREE.PointLight(0xffffff, 1.5); // A bright white light
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0x00ffff, 0.3); // Ambient cyan light
scene.add(pointLight, ambientLight);

// --- HELPERS (Optional: for development) ---
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// --- STARFIELD ---

function addStar() {
    const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z);
    scene.add(star);
}

Array(400).fill().forEach(addStar); // Add 400 stars

// --- MOUSE CONTROLS ---

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    // Normalize mouse position (-1 to 1)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});


// --- ANIMATION LOOP ---

function animate() {
    requestAnimationFrame(animate);

    // Object rotation
    torusKnot.rotation.x += 0.001;
    torusKnot.rotation.y += 0.0005;
    torusKnot.rotation.z += 0.001;

    // Camera parallax effect based on mouse movement
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 5 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);


    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate(); // Start the animation
