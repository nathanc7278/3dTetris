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

export function handleShift(currentBlock, blockCoords, grid) {
    let atBottom = false;
    while (!atBottom) {
        for (let i = 0; i < blockCoords.length; i++) {
            if ((blockCoords[i][1] - 1 < 0) ||
                (grid[blockCoords[i][0]][blockCoords[i][1] - 1][blockCoords[i][2]] !== 0)) {
                    atBottom = true;
                    break;
            } 
        }  
        if (atBottom) {
            break;
        }
        for (let i = 0; i < blockCoords.length; i++) {
            blockCoords[i][1] = blockCoords[i][1] - 1;
        }
        currentBlock.translateY(-1); 
    }
}


export function resetGame(grid, currentBlock, scene, blocks) {
    // Clear the grid
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            for (let z = 0; z < grid[x][y].length; z++) {
                grid[x][y][z] = 0;
            }
        }
    }

    // Remove all blocks from the scene
    while (blocks.length > 0) {
        const block = blocks.pop();
        scene.remove(block);
    }

    // Reset the current block position
    currentBlock.position.set(0, 0, 0);
}