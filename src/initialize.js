import * as THREE from 'three';

export function instructions(){
    // Create instruction popup
    const instructions = document.createElement('div');
    instructions.style.position = 'fixed';
    instructions.style.top = '10px';
    instructions.style.right = '10px';
    instructions.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    instructions.style.color = 'white';
    instructions.style.padding = '10px';
    instructions.style.display = 'none';
    instructions.innerHTML = `
        <h3>Game Instructions</h3>
        <ul>
            <li>Use the arrow keys to move the block along the horizontal plane</li>
            <li>Use the space bar to drop the block faster</li>
            <li>Use the shift key to hard drop a block</li>
            <li>Complete a plane to clear it</li>
            <li>Game over if the blocks reach the top</li>
        </ul>
    `;
    document.body.appendChild(instructions);
    
    const toggleInstructions = document.createElement('button');
    toggleInstructions.style.position = 'fixed';
    toggleInstructions.style.top = '10px';
    toggleInstructions.style.left = '10px';
    toggleInstructions.innerText = 'Instructions';
    document.body.appendChild(toggleInstructions);
    
    toggleInstructions.addEventListener('click', () => {
        instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
    });
}

export function initialScore() {
    const score = document.createElement('div');
    score.style.position = 'fixed';
    score.style.top = '30px';
    score.style.left = '10px';
    score.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    score.style.color = 'white';
    score.style.padding = '10px';
    score.style.display = 'block';
    score.innerHTML = `
        <h3>Score</h3>
        <p id="score">0</p>
    `;
    document.body.appendChild(score);
    return score;
}

export function setupBoard(scene) {
    let lightSource = new THREE.PointLight(0xffffff, 1000, 0, 1);
    lightSource.position.set(15, 30, 15);
    lightSource.power = 10**3;
    lightSource.castShadow = true;  // makes light casts shadows
    const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add(ambientLight);
    scene.add(lightSource);

    const createLine = (color, start, end) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const material = new THREE.LineBasicMaterial({ 
            color: color,
            transparent: false,
            opacity: 1.0
        });
        return new THREE.Line(geometry, material);
    };

    for (let i = 0; i <= 10; i++) {
        const gridLineX = createLine(0xffffff, new THREE.Vector3(i, 0, 0), new THREE.Vector3(i, 0, 10));
        const gridLineZ = createLine(0xffffff, new THREE.Vector3(0, 0, i), new THREE.Vector3(10, 0, i));
        const gridLineLeftY2 = createLine(0xffffff, new THREE.Vector3(0, 0, i), new THREE.Vector3(0, 20, i));
        const gridLineRightY2 = createLine(0xffffff, new THREE.Vector3(i, 0, 0), new THREE.Vector3(i, 20, 0));
        scene.add(gridLineZ);
        scene.add(gridLineX);
        scene.add(gridLineLeftY2);
        scene.add(gridLineRightY2);
    }
    for (let i = 0; i <= 20; i++) {
        const gridLineLeftY1 = createLine(0xffffff, new THREE.Vector3(0, i, 0), new THREE.Vector3(0, i, 10));
        const gridLineRightY1 = createLine(0xffffff, new THREE.Vector3(0, i, 0), new THREE.Vector3(10, i, 0))
        scene.add(gridLineLeftY1);
        scene.add(gridLineRightY1);
    }
    const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0x909090, // Dark gray to enhance shadow visibility
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.8
});

// Left border (x=0)
const leftPlaneGeometry = new THREE.PlaneGeometry(20, 10);
const leftPlane = new THREE.Mesh(leftPlaneGeometry, wallMaterial);
leftPlane.rotation.z = Math.PI / 2;
leftPlane.translateX(10);
leftPlane.translateY(-5);
leftPlane.name = 'leftBorder';
leftPlane.receiveShadow = true;
scene.add(leftPlane);

// Right border (x=10)
const rightPlane = leftPlane.clone();
rightPlane.translateY(5);
rightPlane.rotation.y = Math.PI / 2;
rightPlane.translateY(5);
rightPlane.name = 'rightBorder';
rightPlane.receiveShadow = true;
scene.add(rightPlane);

const bottomPlaneGeometry = new THREE.PlaneGeometry(10, 10);
const bottomPlane = new THREE.Mesh(bottomPlaneGeometry, wallMaterial);
bottomPlane.rotation.x = Math.PI / 2;
bottomPlane.translateY(5);
bottomPlane.translateX(5);
bottomPlane.name = 'bottomBorder';
bottomPlane.receiveShadow = true;
scene.add(bottomPlane);

    let grid = Array(10).fill(0).map(()=> Array(20).fill(0).map(()=>Array(10).fill(0)));

    return grid;
}

