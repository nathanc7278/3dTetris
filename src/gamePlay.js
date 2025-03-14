import { generateRandomBlock } from './randomBlocks';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow, handleSpace, handleShift, handleZ } from './controls';
import * as THREE from 'three';

export function startGame(scene, camera, renderer, controls, clock, grid, currentBlock, orientation, blockCoords, typeBlock) {

    

    
    function computeGhostY(blockCoords, orientation, grid, index) {
        let ghostY = blockCoords[1];
        while (true) {
            let canDrop = true;
            for (let i = 0; i < orientation[index].length; i++) {
                let newY = ghostY + orientation[index][i][1] - 1;
                let x = blockCoords[0] + orientation[index][i][0];
                let z = blockCoords[2] + orientation[index][i][2];
                if (newY < 0 || grid[x][newY][z] !== 0) {
                    canDrop = false;
                    break;
                }
            }
            if (canDrop) {
                ghostY--;
            } else {
                break;
            }
        }
        return ghostY;
    }

    // Creates a ghost copy of the current block.
    function createShadow(block, blockCoords) {
        const ghost = block.clone();
        // Use a dark, semi-transparent material.
        ghost.material = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            opacity: 0.5,
            transparent: true,
            depthWrite: false
        });
        // Use the vertical offset between the block’s world y and its grid y
        const offsetY = block.position.y - blockCoords[1];
        // Set initial y to the ghost landing y plus the same offset.
        ghost.position.set(block.position.x, computeGhostY(blockCoords, orientation, grid, 0) + offsetY, block.position.z);
        scene.add(ghost);
        return ghost;
    }

    // Updates the ghost piece’s position (and rotation) to match the current block’s x/z and landing y.
    function updateShadow(ghost, block, blockCoords, orientation, index, grid) {
        const offsetY = block.position.y - blockCoords[1];
        let ghostY = computeGhostY(blockCoords, orientation, grid, index);
        ghost.position.set(block.position.x, ghostY + offsetY, block.position.z);
        ghost.rotation.copy(block.rotation);
    }

   

    let animation_time = 0;
    let delta_animation_time;
    let blockStopped = false;
    let blocks = [currentBlock];
    let score = 0;
    let isMagicBlock = false;
    let magicBlockTimer = 0;
    let index = 0;
    let speedMultiplier = 1;
    let reset = false;

    
    let shadow = createShadow(currentBlock, blockCoords);

    function animate() {
        
        delta_animation_time = clock.getDelta();
        animation_time += delta_animation_time;

        if (isMagicBlock) {
            speedMultiplier = 2;
            magicBlockTimer += delta_animation_time;
            if (magicBlockTimer > 5) {
                isMagicBlock = false;
                magicBlockTimer = 0;
            }
        } else {
            speedMultiplier = 1;
        }

        
        speedMultiplier = isMagicBlock ? 0.50 : 0.2;

        if (animation_time > 2 * speedMultiplier) {
            animation_time = 0;
            for (let i = 0; i < orientation[index].length; i++) {
                if ((blockCoords[1] + orientation[index][i][1] - 1 < 0) ||
                    (grid[blockCoords[0] + orientation[index][i][0]]
                        [blockCoords[1] + orientation[index][i][1] - 1]
                        [blockCoords[2] + orientation[index][i][2]] !== 0)) {
                    blockStopped = true;
                    if (blockCoords[1] > 17 && blockStopped) {
                        alert("Game Over");
                        for (let x = 0; x < grid.length; x++) {
                            for (let y = 0; y < grid[x].length; y++) {
                                for (let z = 0; z < grid[x][y].length; z++) {
                                    grid[x][y][z] = 0;
                                }
                            }
                        }
                        console.log(blocks);
                        while (blocks.length > 0) {
                            const block = blocks.pop();
                            scene.remove(block);
                        }
                        score = 0; 
                        blockStopped = false;
                        reset = true;
                        break;
                    }
                }
            }
            if (!blockStopped && !reset) {
                blockCoords[1] = blockCoords[1] - 1;
                currentBlock.position.y -= 1;
                
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
            } else {
                if (!reset) {
                    for (let i = 0; i < orientation[index].length; i++) {
                        grid[blockCoords[0] + orientation[index][i][0]]
                            [blockCoords[1] + orientation[index][i][1]]
                            [blockCoords[2] + orientation[index][i][2]] = 1;
                    }
                }
                reset = false;
                let block = generateRandomBlock(scene);
                index = 0;

                
                isMagicBlock = block[0].isMagicBlock || false;

                
                score += 10;
                updateScore(score);

                blocks.push(block[0]);
                currentBlock = block[0];
                orientation = block[2];
                blockCoords = block[1];
                typeBlock = block[3];
                blockStopped = false;
                
                scene.remove(shadow);
                shadow = createShadow(currentBlock, blockCoords);
            }
        }

        renderer.render(scene, camera);
        renderer.setClearColor(0x808080);
        controls.update();
    }
    renderer.setAnimationLoop(animate);

    window.addEventListener('keydown', onKeyDown);
    function onKeyDown(event) {
        switch (event.key) {
            case "ArrowDown":
                handleDownArrow(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case "ArrowUp":
                handleUpArrow(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case "ArrowLeft":
                handleLeftArrow(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case "ArrowRight":
                handleRightArrow(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case " ":
                handleSpace(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case "Shift":
                handleShift(currentBlock, blockCoords, index, orientation, grid);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            case "z":
                index = handleZ(currentBlock, blockCoords, index, orientation, grid, typeBlock);
                updateShadow(shadow, currentBlock, blockCoords, orientation, index, grid);
                break;
            default:
                console.log(`Key ${event.key} pressed`);
        }
        console.log(blockCoords);
    }
}


export function clearLevel(grid, currentBlock, scene, blocks) {
    
}

export function updateScore(score) {
    let scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Score: ${score}`;
}