import { generateRandomBlock } from './randomBlocks';
import { updateHighlightPlane, highlightPlane} from './createBlock';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow, handleSpace, handleShift, handleZ, resetGame } from './controls';
import { exp } from 'three/tsl';

export function startGame(scene, camera, renderer, controls, clock, grid, currentBlock, orientation, blockCoords, highlight , typeBlock) {
    let animation_time = 0;
    let delta_animation_time;
    let blockStopped = false;
    let blocks = [currentBlock];
    let score = 0;
    let isMagicBlock = false;
    let magicBlockTimer = 0;
    let index = 0;
    
    function animate() {
        delta_animation_time = clock.getDelta();
        animation_time += delta_animation_time;

        if (isMagicBlock) {
            magicBlockTimer += delta_animation_time;
            if (magicBlockTimer > 5) {
                isMagicBlock = false;
                magicBlockTimer = 0;
            }
        }

        let speedMultiplier = isMagicBlock ? 0.50 : 0.2;

        if (animation_time > 2 / speedMultiplier) {
            animation_time = 0;
            for (let i = 0; i < orientation[index].length; i++) {
                if ((blockCoords[1] + orientation[index][i][1] - 1 < 0) ||
                    (grid[blockCoords[0] + orientation[index][i][0]]
                        [blockCoords[1]  + orientation[index][i][1] - 1]
                        [blockCoords[2]  + orientation[index][i][2]] !== 0)) {
                        blockStopped = true;
                        if (blockCoords[1] === 19 && blockStopped) {
                            alert("Game Over");
                            resetGame(grid, currentBlock, scene, blocks);
                            score = 0; // Reset score
                            break;                        
                            // display score and have a button to restart
                        }
                } 
            }   
            if (!blockStopped) {
                blockCoords[1] = blockCoords[1] - 1;
                currentBlock.position.y -= 1; 
                // Update the highlight plane position
                updateHighlightPlane(highlight, currentBlock);
            } else {
                for (let i = 0; i < orientation[index].length; i++) {
                    grid[blockCoords[0] + orientation[index][i][0]]
                        [blockCoords[1] + orientation[index][i][1]]
                        [blockCoords[2] + orientation[index][i][2]] = 1;
                }
                let block = generateRandomBlock(scene);
                index = 0;
                
                // Check if the new block is a magic block
                isMagicBlock = block[0].isMagicBlock || false;

                // Update score
                score += 10;
                updateScore(score);

                blocks.push(block[0]);
                currentBlock = block[0];
                orientation = block[2];
                blockCoords = block[1];
                typeBlock = block[3];
                blockStopped = false;
                scene.remove(highlight);
                // Create a new highlight plane for the new block
                highlight = highlightPlane(scene, currentBlock);
            }       
        }

        renderer.render(scene, camera);
        controls.update();
    }
    renderer.setAnimationLoop(animate);

    window.addEventListener('keydown', onKeyDown);
    function onKeyDown(event) {
        switch (event.key) {
            case "ArrowDown": 
                handleDownArrow(currentBlock, blockCoords, index, orientation, grid);
                updateHighlightPlane(highlight, currentBlock);
                break;
            case "ArrowUp": 
                handleUpArrow(currentBlock, blockCoords, index, orientation, grid);
                updateHighlightPlane(highlight, currentBlock);
                break; 
            case "ArrowLeft": 
                handleLeftArrow(currentBlock, blockCoords, index, orientation, grid);
                updateHighlightPlane(highlight, currentBlock);
                break; 
            case "ArrowRight": 
                handleRightArrow(currentBlock, blockCoords, index, orientation, grid);
                updateHighlightPlane(highlight, currentBlock);
                break;
            case " ": 
                handleSpace(currentBlock, blockCoords, index, orientation, grid);
                break;
            case "Shift":
                handleShift(currentBlock, blockCoords, index, orientation, grid);
                break;
            case "z":
                index = handleZ(currentBlock, blockCoords, index, orientation, grid, typeBlock);
                console.log(orientation.length)
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