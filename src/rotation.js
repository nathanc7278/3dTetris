
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

export function rotateZ (index, currentBlock) {
    if (index == 1) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), - Math.PI / 2.0);
        currentBlock.position.x -= 0.5;
        currentBlock.position.y -= 0.5;
    } else if (index == 2) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2.0);
        currentBlock.position.y += 0.5;
        currentBlock.position.z += 0.5;
    } else if (index == 0) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), +Math.PI / 2.0);
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), +Math.PI / 2.0);
        currentBlock.position.z -= 0.5;
        currentBlock.position.x += 0.5;
    }
}

export function rotateT (index, currentBlock) {
    if (index == 1) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
    } else if (index == 2) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
    } else if (index == 3) { 
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
    } else if (index == 4) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -Math.PI / 2.0);
    } else if (index == 5) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI);
    } else if (index == 6) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
    } else if (index == 7) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2.0);
    } else if (index == 8) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2.0);
    } else if(index == 9) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2.0);
    }
        else if (index == 0) {
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2.0);
        currentBlock.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2.0);
    }
}
export function rotateL (index, currentBlock) {
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
export function rotateJ (index, currentBlock) {
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
export function rotateO (index, currentBlock) {
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