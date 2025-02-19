import * as THREE from 'three';

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});
    let l = new THREE.Mesh( geometry, material );
    scene.add(l);
    l.translateY(20.5);
    l.translateZ(4.5);
    l.translateX(5);
    let lBoundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());  
    lBoundingBox.setFromObject(l);                   
    return { l, lBoundingBox };
} 

export function createO(scene) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});
    let l = new THREE.Mesh( geometry, material );
    scene.add(l);
    l.translateY(20.5);
    l.translateZ(4.5);
    l.translateX(5);
    let lBoundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());  
    lBoundingBox.setFromObject(l);                   
    return { l, lBoundingBox };
} 
