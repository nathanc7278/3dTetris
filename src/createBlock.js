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
    plane.rotation.x = -Math.PI / 2; 
    plane.position.set(block.position.x, 0, block.position.z);
    scene.add(plane);
    return plane;
}

export function updateHighlightPlane(plane, block){
    plane.position.set(block.position.x, 0, block.position.z);
}

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    // Load the texture
    const texture = new THREE.TextureLoader().load('assets/textures/tetris_texture.jpg'); // Specify the texture path here
    const material = new THREE.MeshPhongMaterial({
        color: 0xffff,  
        shininess: 100,   
        flatShading: false
    });

    let currentBlock = new THREE.Mesh( geometry, material );
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);
    
    let temp = [[0, 0, 0],
                [1, 0, 0],
                [2, 0, 0],
                [3, 0, 0]];                
    let orientation = [];
    orientation.push(temp);
    temp = [[2, -2, 0],
            [2, -1, 0],
            [2, 0, 0],
            [2, 1, 0]];
    orientation.push(temp);
    temp = [[2, 0, -2],
            [2, 0, -1],
            [2, 0, 0],
            [2, 0, 1]];
    orientation.push(temp);
    currentBlock.position.x=(2);
    currentBlock.position.y=(19.5);
    currentBlock.position.z=0.5;
    let blockCoords = [0, 19, 0];
    let typeBlock = "I";
    return [currentBlock, blockCoords, orientation, typeBlock];
} 

export function createS(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0xff0000, shininess: 100, flatShading: false});

    geometry2.translate(1, 1, 0);
    let S1 = new THREE.Mesh( geometry1, material );
    let S2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([S1.geometry, S2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);

    let temp = [[0, 0, 0],
                [1, 0, 0],
                [1, 1, 0],
                [2, 1, 0]];
    let orientation = [];
    orientation.push(temp);
    temp = [[1, 0, -1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 1, 1]];
    orientation.push(temp);
    temp = [[1, 1, -1],
            [1, 0, -1],
            [1, 0, 0],
            [1, -1, 0]];
    orientation.push(temp);
    temp = [[1, 1, -1],
            [1, 0, -1],
            [2, 0, -1],
            [2, -1, -1]];
    orientation.push(temp);
    temp = [[1, 0, 0],
            [1, 0, -1],
            [2, 0, -1],
            [2, 0, -2]];
    orientation.push(temp);
    currentBlock.translateY(18.5);
    currentBlock.translateZ(0.5);
    currentBlock.translateX(1);
    let blockCoords = [0, 18, 0];
    let typeBlock = "S";
    return [currentBlock, blockCoords, orientation, typeBlock];
}

export function createZ(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0x00ff00, shininess: 100, flatShading: false});

    geometry2.translate(-1, 1, 0);
    let Z1 = new THREE.Mesh( geometry1, material );
    let Z2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([Z1.geometry, Z2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);

    let temp = [[0, 1, 0],
                [1, 1, 0],
                [1, 0, 0],
                [2, 0, 0]];
    let orientation = [];
    orientation.push(temp);
    temp = [[1, 1, -1],
            [1, 1, 0],
            [1, 0, 0],
            [1, 0, 1]];
    orientation.push(temp);
    temp = [[1, 1, -1],
            [1, 0, -1],
            [1, 0, 0],
            [1, -1, 0]];
    orientation.push(temp);
    temp = [[1, 1, 0],
            [1, 0, 0],
            [0, 0, 0],
            [0, -1, 0]];
    orientation.push(temp);
    temp = [[0, 0, 1],
            [0, 0, 0],
            [1, 0, 0],
            [1, 0, -1]];
    orientation.push(temp);
    currentBlock.translateY(18.5);
    currentBlock.translateZ(0.5);
    currentBlock.translateX(2);
    let blockCoords = [0, 18, 0];
    let typeBlock = "Z";
    return [currentBlock, blockCoords, orientation, typeBlock];
}

export function createT(scene){
    const geometry1 = new THREE.BoxGeometry(3, 1, 1);
    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial ({color: 0x800080, shininess: 100, flatShading: false});

    geometry2.translate(0,1,0)

    let T1 = new THREE.Mesh( geometry1, material );
    let T2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([T1.geometry, T2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);

    let temp = [[0, 0, 0],  
                [1, 0, 0],
                [2, 0, 0],
                [1, 1, 0]];              
    let orientation = [];
    orientation.push(temp);
    temp = [[1, -1, 0],
            [1, 0, 0],
            [1, 1, 0],
            [0, 0, 0]];
    orientation.push(temp);
    
    temp = [[0, 0, 0],  
            [1, 0, 0],
            [2, 0, 0],
            [1, -1, 0]];   
    orientation.push(temp);
    temp = [[1, -1, 0],  
            [1, 0, 0],
            [1, 1, 0],
            [2, 0, 0]];   
    orientation.push(temp);
    temp = [[1, -1, 0],  
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 1]];  
    orientation.push(temp);
    temp = [[1, -1, 0],  
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, -1]];  
    orientation.push(temp);
    temp = [[0, 0, 0],  
            [1, 0, 0],
            [2, 0, 0],
            [1, 0, -1]];  
    orientation.push(temp);
    temp = [[1, 0, -1],  
            [1, 0, 0],
            [1, 0, 1],
            [0, 0, 0]];  
    orientation.push(temp);
    temp = [[1, 0, -1],  
            [1, 0, 0],
            [2, 0, 0],
            [1, 0, 1]];  
    orientation.push(temp);
    temp = [[1, 0, -1],  
            [1, 0, 0],
            [1, 0, 1],
            [2, 0, 0]];  
    orientation.push(temp);
    currentBlock.translateY(18.5);
    currentBlock.translateZ(0.5);
    currentBlock.translateX(1.5);
    let blockCoords = [0, 18, 0];
    let typeBlock = "T";
    return [currentBlock, blockCoords, orientation, typeBlock];
}

export function createL(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial ({color: 0xff7f00, shininess: 100, flatShading: false});

    geometry2.translate(1, 1, 0)

    let L1 = new THREE.Mesh( geometry1, material );
    let L2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([L1.geometry, L2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);
    let temp = [[0, 0, 0],
                [1, 0, 0],
                [2, 0, 0],
                [2, 1, 0]];                
    let orientation = [];
    orientation.push(temp);
    temp = [[1, 0, -1],
            [1, 0, 0],
            [1, 0, 1],
            [1, 1, 1]];
    orientation.push(temp);
    temp = [[1, 1, 0],
            [1, 0, 0],
            [1, -1, 0],
            [1, -1, 1]];
    orientation.push(temp);
    temp = [[1, 1, 0],
            [1, 0, 0],
            [1, -1, 0],
            [2, -1, 0]];
    orientation.push(temp);
    temp = [[0, 0, 0],
            [0, -1, 0],
            [1, 0, 0],
            [2, 0, 0]];
    orientation.push(temp);
    temp = [[1, -1, 0],
            [1, 0, 0],
            [1, 0, 1],
            [1, 0, 2]];
    orientation.push(temp);
    currentBlock.translateY(18.5);
    currentBlock.translateZ(0.5);
    currentBlock.translateX(1.5);
    let blockCoords = [0, 18, 0];
    let typeBlock = "L";
    return [currentBlock, blockCoords, orientation, typeBlock];
}

export function createJ(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshPhongMaterial ({color: 0x0000ff, shininess: 100, flatShading: false});

    geometry2.translate(-1,1,0)

    let J1 = new THREE.Mesh( geometry1, material );
    let J2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([J1.geometry, J2.geometry], false);
    let currentBlock = new THREE.Mesh(mergeGeometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);
    let temp = [[0, 1, 0],
                [0, 0, 0],
                [1, 0, 0],
                [2, 0, 0]];                
    let orientation = [];
    orientation.push(temp);
    temp = [[1, 1, -1],
            [1, 0, -1],
            [1, 0, 0],
            [1, 0, 1]];
    orientation.push(temp);
    temp = [[1, -1, -1],
            [1, -1, 0],
            [1, 0, 0],
            [1, 1, 0]];
    orientation.push(temp);
    temp = [[0, -1, 0],
            [1, -1, 0],
            [1, 0, 0],
            [1, 1, 0]];
    orientation.push(temp);
    temp = [[0, -1, 0],
            [0, 0, 0],
            [1, 0, 0],
            [2, 0, 0]];
    orientation.push(temp);
    temp = [[1, 0, -1],
            [1, 0, 0],
            [1, 0, 1],
            [1, -1, 1]];
    orientation.push(temp);
    currentBlock.translateY(18.5);
    currentBlock.translateZ(0.5);
    currentBlock.translateX(1.5);
    let blockCoords = [0, 18, 0];
    let typeBlock = "J";
    return [currentBlock, blockCoords, orientation, typeBlock];
}

export function createO(scene){
    const geometry1 = new THREE.BoxGeometry(2,2,1);
    const material = new THREE.MeshPhongMaterial ({color: 0xFFFF00, shininess: 100, flatShading: false});

    let currentBlock = new THREE.Mesh( geometry1, material );
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);
    let temp = [[0, 0, 0],
                [1, 0, 0],
                [0, 1, 0],
                [1, 1, 0]];                
    let orientation = [];
    orientation.push(temp);
    temp = [[1, 0, -1],
            [1, 0, 0],
            [1, 1, 0],
            [1, 1, -1]];
    orientation.push(temp);
    temp = [[0, 0, -1],
            [0, 0, 0],
            [1, 0, -1],
            [1, 0, 0]];
    orientation.push(temp);
    currentBlock.position.y += 19;
    currentBlock.position.x += 1;
    currentBlock.position.z += 0.5;
    let blockCoords = [0, 18, 0];
    let typeBlock = "O";
    return [currentBlock, blockCoords, orientation, typeBlock];
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
        shininess: 100,
        transparent: true, 
        alphaTest: 0.5,
        emissive: 0xcccccc,
        emissiveIntensity: 1,
        flatShading: false
    });

    let currentBlock = new THREE.Mesh(geometry, material);
    currentBlock.castShadow = true;
    currentBlock.receiveShadow = true;
    scene.add(currentBlock);
    let temp = [[0, 0, 0],
                 [0, 1, 0],
                 [1, 0, 0],
                 [1, 1, 0],
                 [0, 0, 1],
                 [0, 1, 1],
                 [1, 0, 1],
                 [1, 1, 1]];                
    let orientation = [];
    orientation.push(temp);
    currentBlock.position.y += 19;
    currentBlock.position.x += 1;
    currentBlock.position.z += 1;
    let blockCoords = [0, 18, 0];
    let typeBlock = "M";

    // Update the time uniform in the render loop
    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.time.value += 0.05;
    }
    animate();

    return [currentBlock, blockCoords, orientation, typeBlock];
}