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
camera.position.set(0, 20, 20);
controls.target.set(0, 10, 0);

const clock = new THREE.Clock();
let grid = setupBoard(scene);


// let { I: currentBlock, blockCoords: blockCoords} = createI(scene);

let { currentBlock, blockCoords} = createO(scene);

let animation_time = 0;
let delta_animation_time

function animate() {
	
    delta_animation_time = clock.getDelta();
    animation_time += delta_animation_time;
/*
    if (animation_time > 2) {
        animation_time = 0;
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
        */
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




