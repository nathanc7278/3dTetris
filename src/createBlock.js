import * as THREE from 'three';
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js"

export function highlightPlane(scene, block){
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
        emissive: 0xffff00,
        emissiveIntensity: 1
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2; // Rotate to face the x-z plane
    plane.position.set(block.position.x, 0, block.position.z);
    scene.add(plane);
    return plane;
}

export function updateHighlightPlane(plane, block){
    plane.position.set(block.position.x, 0, block.position.z);
}

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0x00ffff, flatShading: true, AmbientLight: 0});

    let currentBlock = new THREE.Mesh( geometry, material );
    scene.add(currentBlock);
    currentBlock.translateY(19.5);
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5);
    let blockCoords = [[3, 19, 4],
                    [4, 19, 4],
                    [5, 19, 4],
                    [6, 19, 4]];                
    let orientation = [];
    orientation.push(blockCoords);
    blockCoords = [[4, 19, 4],
                    [4, 18, 4],
                    [4, 17, 4],
                    [4, 16, 4]];
    orientation.push(blockCoords);
    blockCoords = [[4, 19, 3],
                    [4, 19, 4],
                    [4, 19, 5],
                    [4, 19, 6]];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
} 

export function createS(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0xff0000, flatShading: true});

    geometry2.translate(1, 1, 0);
    let S1 = new THREE.Mesh( geometry1, material );
    let S2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([S1.geometry, S2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    scene.add(currentBlock);

    currentBlock.translateY(18.5);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5);
    let blockCoords = [[4, 18, 4],
                    [5, 18, 4],
                    [5, 19, 4],
                    [6, 19, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createZ(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0xa1fc03, flatShading: true});

    geometry2.translate(-1, 1, 0);
    let Z1 = new THREE.Mesh( geometry1, material );
    let Z2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([Z1.geometry, Z2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    scene.add(currentBlock);

    currentBlock.translateY(18.5);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5);
    let blockCoords = [[5, 18, 4],
                    [4, 18, 4],
                    [4, 19, 4],
                    [3, 19, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createT(scene){
    const geometry1 = new THREE.BoxGeometry(3, 1, 1);
    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0xff00ff, flatShading: true});

    geometry2.translate(0,1,0)

    let T1 = new THREE.Mesh( geometry1, material );
    let T2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([T1.geometry, T2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    scene.add(currentBlock);

    currentBlock.translateY(18.5);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5.5);
    let blockCoords = [[6, 18, 4],
                    [5, 18, 4],
                    [5, 19, 4],
                    [4, 18, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createL(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial ({color: 0x32CD32, flatShading: true});

    geometry2.translate(1, 1, 0)

    let L1 = new THREE.Mesh( geometry1, material );
    let L2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([L1.geometry, L2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    scene.add(currentBlock);

    currentBlock.translateY(18.5);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5.5);
    let blockCoords = [[4, 18, 4],
                    [5, 18, 4],
                    [6, 18, 4],
                    [6, 19, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createJ(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial ({color: 0x0000ff, flatShading: true});

    geometry2.translate(-1,1,0)

    let J1 = new THREE.Mesh( geometry1, material );
    let J2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([J1.geometry, J2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    scene.add(currentBlock);

    currentBlock.translateY(18.5);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5.5);
    let blockCoords = [[4, 18, 4],
                    [5, 18, 4],
                    [6, 18, 4],
                    [4, 19, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createO(scene){
    const geometry1 = new THREE.BoxGeometry(2,2,1);
    const material = new THREE.MeshPhongMaterial ({color: 0xFFA500, flatShading: true});

    let currentBlock = new THREE.Mesh( geometry1, material );
    scene.add(currentBlock);

    currentBlock.translateY(19);    
    currentBlock.translateZ(4.5);
    currentBlock.translateX(5);
    let blockCoords = [[4, 18, 4],
                    [5, 18, 4],
                    [4, 19, 4],
                    [5, 19, 4]];    
    let orientation = [];
    orientation.push(blockCoords);
    return [currentBlock, orientation];
}

export function createMagicBlock(scene) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        void main() {
            vec3 color = vec3(0.5 + 0.5 * cos(time + vUv.xyx + vec3(0, 2, 4)));
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        emissive: 0xcccccc,
        emissiveIntensity: 1,
        flatShading: true
    });

    let magicBlock = new THREE.Mesh(geometry, material);
    scene.add(magicBlock);

    magicBlock.translateY(19);
    magicBlock.translateZ(4.5);
    magicBlock.translateX(5);
    let blockCoords = [[4, 18, 4],
                       [5, 18, 4],
                       [4, 19, 4],
                       [5, 19, 4]];

    // Update the time uniform in the render loop
    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.time.value += 0.05;
    }
    animate();

    return [magicBlock, blockCoords];
}