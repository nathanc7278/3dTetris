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
        <p>Arrow Up: Move Up</p>
        <p>Arrow Down: Move Down</p>
        <p>Arrow Left: Move Left</p>
        <p>Arrow Right: Move Right</p>
        <p>Space: Drop</p>
        <button id="closeInstructions">Close</button>
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

export function setupBoard(scene) { // board will be 10 by 10 by 20
    let lightSource = new THREE.PointLight(0xffffff, 1, 0, 1);
    lightSource.position.set(15, 30, 15);
    lightSource.power = 10**3;
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
    scene.add(lightSource);
    const createLine = (color, start, end) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const material = new THREE.LineBasicMaterial({ 
            color: color,
            transparent: true,
            opacity: 0.5 
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
    let grid = Array(10).fill(0).map(()=> Array(20).fill(0).map(()=>Array(10).fill(0)));

    return grid;
}
