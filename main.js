import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setupBoard } from './src/initialize';
import { createI, createS, createT, createZ, createL, createJ, createO } from './src/createBlock';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow, handleSpace } from './src/controls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(15, 20, 15);
controls.target.set(0, 5, 0);

const clock = new THREE.Clock();
let grid = setupBoard(scene);


let block = new createJ(scene);
let currentBlock = block[0];
let blockCoords = block[1];

let animation_time = 0;
let delta_animation_time

let blockStopped = false;

function animate() {
	
    delta_animation_time = clock.getDelta();
    animation_time += delta_animation_time;

    if (animation_time > 2) {
        animation_time = 0;
        for (let i = 0; i < blockCoords.length; i++) {
            if ((blockCoords[i][1] - 1 < 0) ||
                (grid[blockCoords[i][0]][blockCoords[i][1] - 1][blockCoords[i][2]] !== 0)) {
                    blockStopped = true;
                    if (blockCoords[i][1] === 19) {
                        alert("Game Over");
                        break;
                    }
            } 
        }   
        if (!blockStopped) {
            for (let i = 0; i < blockCoords.length; i++) {
                blockCoords[i][1] = blockCoords[i][1] - 1;
            }
            currentBlock.translateY(-1); 
        } else {
            for (let i = 0; i < blockCoords.length; i++) {
                grid[blockCoords[i][0]][blockCoords[i][1]][blockCoords[i][2]] = 1;
            }
            let randomIndex = Math.floor(Math.random() * 7);
            switch (randomIndex) {
                case 0:
                    block = new createI(scene);
                    break;
                case 1:
                    block = new createS(scene);
                    break;
                case 2:
                    block = new createT(scene);
                    break;
                case 3:
                    block = new createZ(scene);
                    break;           
                case 4:
                    block = new createL(scene);
                    break;      
                case 5:
                    block = new createJ(scene);
                    break;   
                case 6:
                    block = new createO(scene);
                    break;
            }
            currentBlock = block[0];
            blockCoords = block[1];
            blockStopped = false;

        }
        
    }



    renderer.render( scene, camera );
    controls.update();
}
renderer.setAnimationLoop( animate );


window.addEventListener('keydown', onKeyDown);
function onKeyDown(event) {
    switch (event.key) {
        case "ArrowDown": 
            handleDownArrow(currentBlock, blockCoords, grid);
            break;
        case "ArrowUp": 
            handleUpArrow(currentBlock, blockCoords, grid);
            break; 
        case "ArrowLeft": 
            handleLeftArrow(currentBlock, blockCoords, grid);
            break; 
        case "ArrowRight": 
            handleRightArrow(currentBlock, blockCoords, grid);
            break;
        case " ": 
            handleSpace(currentBlock, blockCoords, grid);
            break;
        default:
            console.log(`Key ${event.key} pressed`);
    }
    console.log(blockCoords);
}




