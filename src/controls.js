import * as THREE from 'three';

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
                    break;
            } 
            blockCoords[1] = blockCoords[1] - 1;
            currentBlock.position.y -= 1; 
        }   
        if (atBottom) {
            break;
        }
        blockCoords[1] = blockCoords[1] - 1;
        currentBlock.position.y -= 1; 
    }
}


export function handleZ(currentBlock, blockCoords, index, orientation, grid) {
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
    currentBlock.position.x -= blockCoords[0];
    currentBlock.position.y -= blockCoords[1];
    currentBlock.position.z -= blockCoords[2];
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
    }
    currentBlock.position.x += blockCoords[0];
    currentBlock.position.y += blockCoords[1];
    currentBlock.position.z += blockCoords[2];
    
    
    return index;
    
}

export function resetGame(grid, scene, blocks) {
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
    return true;
}
