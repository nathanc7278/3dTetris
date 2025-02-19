import * as THREE from 'three';

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});

    let I = new THREE.Mesh( geometry, material );
    scene.add(I);
    I.translateY(19.5);
    I.translateZ(4.5);
    I.translateX(5);
    let blockCoords = [[3, 19, 4],
                    [4, 19, 4],
                    [5, 19, 4],
                    [6, 19, 4]];                
    return { I, blockCoords };
} 



