import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setupBoard } from './src/initialize';
import { createI } from './src/createBlock';
import { handleDownArrow, handleRightArrow, handleUpArrow, handleLeftArrow, handleSpace,  checkCollisionBorder } from './src/controls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 20);
controls.target.set(0, 10, 0);

const clock = new THREE.Clock();
setupBoard(scene);


let { I: currentBlock, IBoundingBox: BB } = createI(scene);

let animation_time = 0;
let delta_animation_time;

function animate() {
	
    delta_animation_time = clock.getDelta();
    animation_time += delta_animation_time;

    if (animation_time > 2) {
        animation_time = 0;
        let array = checkCollisionBorder(BB);
        if (!array[4]) {
            currentBlock.translateY(-1); 
        }
    }
    BB.copy(currentBlock.geometry.boundingBox).applyMatrix4(currentBlock.matrixWorld);

    renderer.render( scene, camera );
    controls.update();
}
renderer.setAnimationLoop( animate );


window.addEventListener('keydown', onKeyDown);
function onKeyDown(event) {
    switch (event.key) {
        case "ArrowDown": 
            handleDownArrow(currentBlock, BB);
            console.log(BB);
                break;
        case "ArrowUp": 
            handleUpArrow(currentBlock, BB);
            console.log(BB);
                break; 
        case "ArrowLeft": 
            handleLeftArrow(currentBlock, BB);
            console.log(BB);
                break; 
        case "ArrowRight": 
            handleRightArrow(currentBlock, BB);
            console.log(BB);
                break;
        case " ": 
            handleSpace(currentBlock, BB);
            console.log(BB);
                break;
        default:
            console.log(`Key ${event.key} pressed`);
    }
}




