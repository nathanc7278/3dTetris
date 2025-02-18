import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setupBoard } from './src/initialize';
import { createL } from './src/createBlock';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow } from './src/controls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 20);
controls.target.set(0, 10, 0);

let animation_time = 0;
let delta_animation_time;
const clock = new THREE.Clock();
let grid = setupBoard(scene);

let { l: currentBlock, blockLocation } = createL(scene);
console.log(blockLocation);
console.log(currentBlock);
function animate() {
	
    delta_animation_time = clock.getDelta();
    animation_time += delta_animation_time;
    
    renderer.render( scene, camera );
    controls.update();
}
renderer.setAnimationLoop( animate );


window.addEventListener('keydown', onKeyDown);
function onKeyDown(event) {
    switch (event.key) {
        case "ArrowDown": 
            handleDownArrow(currentBlock, blockLocation, grid);
                break;
        case "ArrowUp": 
            handleUpArrow(currentBlock, blockLocation, grid);
                break; 
        case "ArrowLeft": 
            handleLeftArrow(currentBlock, blockLocation, grid);
                break; 
        case "ArrowRight": 
            handleRightArrow(currentBlock, blockLocation, grid);
                break;
        default:
            console.log(`Key ${event.key} pressed`);
    }
}




