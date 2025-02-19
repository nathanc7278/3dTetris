import * as THREE from 'three';

export function handleDownArrow(currentBlock, blockCoords, grid) {
    for (let i = 0; i < blockCoords.length; i++) {
        if ((blockCoords[i][2] + 1  > 9) || 
            (grid[blockCoords[i][0]][blockCoords[i][1]][blockCoords[i][2] + 1] !== 0)) {
                return;
        } 
    }   
    for (let i = 0; i < blockCoords.length; i++) {
        blockCoords[i][2] = blockCoords[i][2] + 1;
    }
    currentBlock.translateZ(1); 
}

export function handleUpArrow(currentBlock, blockCoords, grid) {
    for (let i = 0; i < blockCoords.length; i++) {
        if ((blockCoords[i][2] + 1 < 0) || 
            (grid[blockCoords[i][0]][blockCoords[i][1]][blockCoords[i][2] - 1] !== 0)) {
                return;
        } 
    }   
    for (let i = 0; i < blockCoords.length; i++) {
        blockCoords[i][2] = blockCoords[i][2] - 1;
    }
    currentBlock.translateZ(-1); 

}

export function handleRightArrow(currentBlock, blockCoords, grid) {
    for (let i = 0; i < blockCoords.length; i++) {
        if ((blockCoords[i][0] + 1 > 9) ||
            (grid[blockCoords[i][0] + 1][blockCoords[i][1]][blockCoords[i][2]] !== 0)) {
                return;
        } 
    }   
    for (let i = 0; i < blockCoords.length; i++) {
        blockCoords[i][0] = blockCoords[i][0] + 1;
    }
    currentBlock.translateX(1);
}

export function handleLeftArrow(currentBlock, blockCoords, grid) {
    for (let i = 0; i < blockCoords.length; i++) {
        if ((blockCoords[i][0] - 1 < 0) ||
            (grid[blockCoords[i][0] - 1][blockCoords[i][1]][blockCoords[i][2]] !== 0)) {
                return;
        } 
    }   
    for (let i = 0; i < blockCoords.length; i++) {
        blockCoords[i][0] = blockCoords[i][0] - 1;
    }
    currentBlock.translateX(-1); 
}

export function handleSpace(currentBlock, blockCoords, grid) {
    for (let i = 0; i < blockCoords.length; i++) {
        if ((blockCoords[i][1] - 1 < 0) ||
            (grid[blockCoords[i][0]][blockCoords[i][1] - 1][blockCoords[i][2]] !== 0)) {
                return;
        } 
    }   
    for (let i = 0; i < blockCoords.length; i++) {
        blockCoords[i][1] = blockCoords[i][1] - 1;
    }
    currentBlock.translateY(-1); 
}
