import * as THREE from 'three';

export function handleDownArrow(currentBlock, blockLocation, grid) {
    for (let i = 0; i < blockLocation.length; i++) {
        if ((grid[blockLocation[i][0]][(blockLocation[i][2] + 1)])!= 0 ||
            (grid[blockLocation[i][0]][(blockLocation[i][2] + 1)]) > 10) {
            return grid;
        }       
    }
    for (let i = 0; i < blockLocation.length; i++) {
        blockLocation[i][2] = blockLocation[i][2] + 1;
    }
    console.log(blockLocation);
    currentBlock.translateZ(1); 
}

export function handleUpArrow(currentBlock, blockLocation, grid) {
    for (let i = 0; i < blockLocation.length; i++) {
        if ((grid[blockLocation[i][0]][(blockLocation[i][2] - 1)]) != 0 ||
            (grid[blockLocation[i][0]][(blockLocation[i][2] - 1)]) < 0) {
            return grid;
        } 
    }
    for (let i = 0; i < blockLocation.length; i++) {
        blockLocation[i][2] = blockLocation[i][2] - 1;
    }
    console.log(blockLocation);
    currentBlock.translateZ(-1); 
}

export function handleRightArrow(currentBlock, blockLocation, grid) {
    for (let i = blockLocation.length - 1; i > 0; i--) {
        if (blockLocation[i][0] + 1 > 9) {
            return;
        } 
        if ((grid[blockLocation[i][0] + 1][(blockLocation[i][2])]) != 0) {
            return grid;
        } 
    }
    for (let i = 0; i < blockLocation.length; i++) {
        blockLocation[i][0] = blockLocation[i][0] + 1;
    }
    console.log(blockLocation);
    currentBlock.translateX(1); 
}

export function handleLeftArrow(currentBlock, blockLocation, grid) {
    for (let i = 0; i < blockLocation.length; i++) {
        if (blockLocation[i][0] - 1 < 0) {
            return;
        } 
        if ((grid[blockLocation[i][0] - 1][(blockLocation[i][2])]) != 0) {
            return grid;
        }
    }
    for (let i = 0; i < blockLocation.length; i++) {
        blockLocation[i][0] = blockLocation[i][0] - 1;
    }
    console.log(blockLocation);
    currentBlock.translateX(-1); 
}
