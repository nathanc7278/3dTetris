import * as THREE from 'three';

export function createL(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});
    let l = new THREE.Mesh( geometry, material );
    scene.add(l);
    l.translateY(0.5);
    l.translateZ(4.5);
    l.translateX(5);
    let blockLocation = [[3, 0, 4],
                    [4, 0, 4],
                    [5, 0, 4],
                    [6, 0, 4]]                       
    return { l, blockLocation };
} 