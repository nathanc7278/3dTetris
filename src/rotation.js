
import * as THREE from 'three';


export function rotateI (index, currentBlock) {
    if (index == 1) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
        currentBlock.position.x += 0.5;
        currentBlock.position.y -= 0.5;
    } else if (index == 2) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2.0);
        currentBlock.position.y += 0.5;
        currentBlock.position.z -= 0.5;
    } else if (index == 0) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2.0);
        currentBlock.position.z += 0.5;
        currentBlock.position.x -= 0.5;
    }
}

export function rotateS (index, currentBlock) {
    if (index == 1) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
        currentBlock.position.x += 0.5;
        currentBlock.position.y -= 0.5;
    } else if (index == 2) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2.0);
        currentBlock.position.y += 0.5;
        currentBlock.position.z -= 0.5;
    } else if (index == 0) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2.0);
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 2.0);
        currentBlock.position.z += 0.5;
        currentBlock.position.x -= 0.5;
    }
}