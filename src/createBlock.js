import * as THREE from 'three';
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js"

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

export function createS(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0xff0000});

    geometry2.translate(1, 1, 0);
    let S1 = new THREE.Mesh( geometry1, material );
    let S2 = new THREE.Mesh( geometry2, material );
    console.log(S1.geometry);
    console.log(S2.geometry);
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([S1.geometry, S2.geometry], false);
    console.log(mergeGeometry)
    let merged = new THREE.Mesh(mergeGeometry, material);
    scene.add(merged);

    merged.translateY(19.5);    
    merged.translateZ(4.5);
    merged.translateX(5);
    let blockCoords = [[4, 19, 4],
                    [5, 19, 4],
                    [5, 20, 4],
                    [6, 20, 4]];    
    return { merged, blockCoords };
}
export function createZ(scene) {
    const geometry1 = new THREE.BoxGeometry(2, 1, 1);
    const geometry2 = new THREE.BoxGeometry(2, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0xff0000});

    geometry2.translate(-1, 1, 0);
    let Z1 = new THREE.Mesh( geometry1, material );
    let Z2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([Z1.geometry, Z2.geometry], false);
    let merged = new THREE.Mesh(mergeGeometry, material);
    scene.add(merged);

    merged.translateY(19.5);    
    merged.translateZ(4.5);
    merged.translateX(5);
    let blockCoords = [[6, 19, 4],
                    [5, 19, 4],
                    [5, 20, 4],
                    [4, 20, 4]];    
    return { merged, blockCoords };
}

export function createT(scene){
    const geometry1 = new THREE.BoxGeometry(3, 1, 1);
    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial ({color: 0xff00ff});

    geometry2.translate(0,1,0)

    let T1 = new THREE.Mesh( geometry1, material );
    let T2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([T1.geometry, T2.geometry], false);
    let merged = new THREE.Mesh(mergeGeometry, material);
    scene.add(merged);

    merged.translateY(19.5);    
    merged.translateZ(4.5);
    merged.translateX(5.5);
    let blockCoords = [[6, 19, 4],
                    [5, 19, 4],
                    [5, 20, 4],
                    [4, 19, 4]];    
    return { merged, blockCoords };
}
export function createL(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial ({color: 0xff00ff});

    geometry2.translate(1, 1, 0)

    let L1 = new THREE.Mesh( geometry1, material );
    let L2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([L1.geometry, L2.geometry], false);
    let merged = new THREE.Mesh(mergeGeometry, material);
    scene.add(merged);

    merged.translateY(19.5);    
    merged.translateZ(4.5);
    merged.translateX(5.5);
    let blockCoords = [[6, 19, 4],
                    [5, 19, 4],
                    [5, 20, 4],
                    [4, 19, 4]];    
    return { merged, blockCoords };
}
export function createJ(scene){
    const geometry1 = new THREE.BoxGeometry(3,1,1);
    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial ({color: 0xff00ff});

    geometry2.translate(0,1,0)

    let J1 = new THREE.Mesh( geometry1, material );
    let J2 = new THREE.Mesh( geometry2, material );
    let mergeGeometry =  BufferGeometryUtils.mergeGeometries([J1.geometry, J2.geometry], false);
    let merged = new THREE.Mesh(mergeGeometry, material);
    scene.add(merged);

    merged.translateY(19.5);    
    merged.translateZ(4.5);
    merged.translateX(5.5);
    let blockCoords = [[6, 19, 4],
                    [5, 19, 4],
                    [5, 20, 4],
                    [4, 19, 4]];    
    return { merged, blockCoords };
}