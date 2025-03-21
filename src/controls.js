import * as THREE from 'three';
import { rotateI, rotateS, rotateZ, rotateT, rotateL, rotateJ, rotateO} from './rotation';

export function handleDownArrow(currentBlock, blockCoords, index, orientation, grid) {
    for (let i = 0; i < orientation[index].length; i++) {
        if ((blockCoords[2] + orientation[index][i][2] + 1 > 10) || 
            (grid[blockCoords[0] + orientation[index][i][0]]
                 [blockCoords[1] + orientation[index][i][1]]
                 [blockCoords[2] + orientation[index][i][2] + 1] !== 0)) {
                return;
        } 
    }   
    blockCoords[2] = blockCoords[2] + 1;
    currentBlock.position.z += 1; 
}

export function handleUpArrow(currentBlock, blockCoords, index, orientation, grid) {
    for (let i = 0; i < orientation[index].length; i++) {
        if ((blockCoords[2] + orientation[index][i][2] - 1 < 0) || 
            (grid[blockCoords[0] + orientation[index][i][0]]
                 [blockCoords[1] + orientation[index][i][1]]
                 [blockCoords[2] + orientation[index][i][2] - 1] !== 0)) {
                return;
        } 
    }   
    blockCoords[2] = blockCoords[2] - 1;
    currentBlock.position.z -= 1; 
    
}

export function handleRightArrow(currentBlock, blockCoords, index, orientation, grid) {
    for (let i = 0; i < orientation[index].length; i++) {
        if ((blockCoords[0] + orientation[index][i][0] + 1 > 10) || 
            (grid[blockCoords[0] + orientation[index][i][0] + 1]
                 [blockCoords[1] + orientation[index][i][1]]
                 [blockCoords[2] + orientation[index][i][2]] !== 0)) {
                return;
        } 
    }   
    blockCoords[0] = blockCoords[0] + 1;
    currentBlock.position.x += 1; 
}

export function handleLeftArrow(currentBlock, blockCoords, index, orientation, grid) {
    for (let i = 0; i < orientation[index].length; i++) {
        if ((blockCoords[0] + orientation[index][i][0] - 1 < 0) || 
            (grid[blockCoords[0] + orientation[index][i][0] - 1]
                 [blockCoords[1] + orientation[index][i][1]]
                 [blockCoords[2] + orientation[index][i][2]] !== 0)) {
                return;
        } 
    }   
    blockCoords[0] = blockCoords[0] - 1;
    currentBlock.position.x -= 1;  
}

export function handleSpace(currentBlock, blockCoords, index, orientation, grid){
    for (let i = 0; i < orientation[index].length; i++) {
        if ((blockCoords[1] + orientation[index][i][1] - 1 < 0) || 
            (grid[blockCoords[0] + orientation[index][i][0]]
                 [blockCoords[1] + orientation[index][i][1] - 1]
                 [blockCoords[2] + orientation[index][i][2]] !== 0)) {
                return;
        } 
    }   
    blockCoords[1] = blockCoords[1] - 1;
    currentBlock.position.y -= 1; 
}

export function handleShift(currentBlock, blockCoords, index, orientation, grid) {
    let atBottom = false;
    while (!atBottom) {
        for (let i = 0; i < orientation[index].length; i++) {
            if ((blockCoords[1] + orientation[index][i][1] - 1 < 0) || 
                (grid[blockCoords[0] + orientation[index][i][0]]
                     [blockCoords[1] + orientation[index][i][1] - 1]
                     [blockCoords[2] + orientation[index][i][2]] !== 0)) {
                    atBottom = true;
            } 
            if (atBottom) {
                break;
            }
        }  
        if (atBottom) {
            return;
        }
        blockCoords[1] = blockCoords[1] - 1;
        currentBlock.position.y -= 1;     
    }
}


export function handleZ(currentBlock, blockCoords, index, orientation, grid, typeBlock) {
    let next = (index + 1) % orientation.length;
    
    for (let i = 0; i < orientation[next].length; i++) {
        let nextX = blockCoords[0] + orientation[next][i][0];
        let nextY = blockCoords[1] + orientation[next][i][1];
        let nextZ = blockCoords[2] + orientation[next][i][2];

        if (nextX < 0 || nextX > 9 ||
            nextY < 0 || nextY > 19 ||
            nextZ < 0 || nextZ > 9 ||
            (grid[nextX][nextY][nextZ] !== 0)) {
               return index;
        }
    }   
    index = (index + 1) % orientation.length;
    switch(typeBlock) {
        case "I":
            rotateI(index, currentBlock);
            break;
        case "S":
            rotateS(index, currentBlock);
            break;
        case "Z":
            rotateZ(index, currentBlock);
            break;
        case "T":
            rotateT(index, currentBlock);
            break;
        case "L":
            rotateL(index, currentBlock);
            break;
        case "J":
            rotateJ(index, currentBlock);
            break;
        case "O":
            rotateO(index, currentBlock);
            break;
        default:
            console.log("Invalid block type:", typeBlock);
    }
    return index;
    
}
