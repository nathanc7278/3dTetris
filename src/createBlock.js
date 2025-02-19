import * as THREE from 'three';

export function createI(scene) {
    const geometry = new THREE.BoxGeometry(4, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0x0000ff});
<<<<<<< HEAD
    let I = new THREE.Mesh( geometry, material );
    scene.add(I);
    I.translateY(20.5);
    I.translateZ(4.5);
    I.translateX(5);
    let IBoundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());  
    IBoundingBox.setFromObject(I);                   
    return { I, IBoundingBox };
} 

=======
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
>>>>>>> 992b97260d943cbd029d735e372ab20dc4974792
