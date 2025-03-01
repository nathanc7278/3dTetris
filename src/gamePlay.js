import { generateRandomBlock } from './randomBlocks';
import { updateHighlightPlane, highlightPlane} from './createBlock';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow, handleSpace, handleShift, resetGame } from './controls';

export function startGame(scene, camera, renderer, controls, clock, grid, currentBlock, blockCoords, highlight) {
    let animation_time = 0;
    let delta_animation_time;
    let blockStopped = false;
    let blocks = [currentBlock];
    let score = 0;

    function animate() {
        delta_animation_time = clock.getDelta();
        animation_time += delta_animation_time;

        if (animation_time > 2) {
            animation_time = 0;
            for (let i = 0; i < blockCoords.length; i++) {
                if ((blockCoords[i][1] - 1 < 0) ||
                    (grid[blockCoords[i][0]][blockCoords[i][1] - 1][blockCoords[i][2]] !== 0)) {
                        blockStopped = true;
                        if (blockCoords[i][1] === 19 && blockStopped) {
                            alert("Game Over");
                            resetGame(grid, currentBlock, scene, blocks);
                            score = 0; // Reset score
                            break;                        
                            // display score and have a button to restart
                        }
                } 
            }   
            if (!blockStopped) {
                for (let i = 0; i < blockCoords.length; i++) {
                    blockCoords[i][1] = blockCoords[i][1] - 1;
                }
                currentBlock.translateY(-1); 
                // Update the highlight plane position
                updateHighlightPlane(highlight, currentBlock);
            } else {
                for (let i = 0; i < blockCoords.length; i++) {
                    grid[blockCoords[i][0]][blockCoords[i][1]][blockCoords[i][2]] = 1;
                }
                let block = generateRandomBlock(scene);
                // Update score
                score += 10;
                console.log(`Score: ${score}`);

                blocks.push(block[0]);
                currentBlock = block[0];
                blockCoords = block[1];
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
                handleDownArrow(currentBlock, blockCoords, grid);
                updateHighlightPlane(highlight, currentBlock);
                break;
            case "ArrowUp": 
                handleUpArrow(currentBlock, blockCoords, grid);
                updateHighlightPlane(highlight, currentBlock);
                break; 
            case "ArrowLeft": 
                handleLeftArrow(currentBlock, blockCoords, grid);
                updateHighlightPlane(highlight, currentBlock);
                break; 
            case "ArrowRight": 
                handleRightArrow(currentBlock, blockCoords, grid);
                updateHighlightPlane(highlight, currentBlock);
                break;
            case " ": 
                handleSpace(currentBlock, blockCoords, grid);
                break;
            case "Shift":
                handleShift(currentBlock, blockCoords, grid);
                break;
            default:
                console.log(`Key ${event.key} pressed`);
        }
        console.log(blockCoords);
    }
}