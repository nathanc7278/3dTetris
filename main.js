import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setupBoard, instructions, initialScore } from './src/initialize';
import { createI, highlightPlane } from './src/createBlock';
import { startGame } from './src/gamePlay';

instructions();
initialScore();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(15, 20, 15);
controls.target.set(0, 5, 0);

const clock = new THREE.Clock();
let grid = setupBoard(scene);

let block = createI(scene);
let currentBlock = block[0];
let blockCoords = block[1][0];

// Create and store the highlight plane
let highlight = highlightPlane(scene, currentBlock);

startGame(scene, camera, renderer, controls, clock, grid, currentBlock, blockCoords, block[1], highlight);





 