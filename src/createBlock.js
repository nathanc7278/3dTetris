import * as THREE from 'three';

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});

    let I = new THREE.Mesh( geometry, material );
    scene.add(I);
    I.translateY(20.5);
    I.translateZ(4.5);
    I.translateX(5);
    let IBoundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());  
    IBoundingBox.setFromObject(I);                   
    return { I, IBoundingBox };
} 




