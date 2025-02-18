import * as THREE from 'three';

export function handleDownArrow(currentBlock, BB) {
    let array = checkCollisionBorder(BB);
    if (!array[0]) {
        currentBlock.translateZ(1); 
    }
}

export function handleUpArrow(currentBlock, BB) {
    let array = checkCollisionBorder(BB);
    if (!array[3]) {
        currentBlock.translateZ(-1); 
    } 
}

export function handleRightArrow(currentBlock, BB) {
    let array = checkCollisionBorder(BB);
    if (!array[1]) {
        currentBlock.translateX(1);
    }
}

export function handleLeftArrow(currentBlock, BB) {
    let array = checkCollisionBorder(BB);
    if (!array[2]) {
        currentBlock.translateX(-1); 
    }
}


function checkCollisionBorder(BB) {
    let atFront = 0;        
    let atRight = 0;        
    let atLeft = 0;         
    let atBack = 0;         
    if (BB.max.z === 10) {
        atFront = 1;
    }
    if (BB.max.x === 10) {
        atRight = 1;
    }
    if (BB.min.x === 0) {
        atLeft = 1;
    }
    if (BB.min.z === 0) {
        atBack = 1;
    }
    const array = new Array(atFront, atRight, atLeft, atBack);
    console.log(array)
    return array;
}