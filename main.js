import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { setupBoard, instructions, initialScore } from './src/initialize';
import { createO } from './src/createBlock';
import { startGame } from './src/gamePlay';

instructions();
initialScore();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(15, 20, 15);
controls.target.set(0, 5, 0);

const clock = new THREE.Clock();
let grid = setupBoard(scene);

let block = createO(scene);
let currentBlock = block[0];
let orientation = block[2];
let blockCoords = block[1];
let typeBlock = block[3];
// Create and store the highlight plane
//let highlight = highlightPlane(scene, currentBlock);

startGame(scene, camera, renderer, controls, clock, grid, currentBlock, orientation, blockCoords, typeBlock);





 