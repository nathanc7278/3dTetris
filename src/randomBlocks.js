import * as THREE from 'three';
import { createI, createS, createT, createZ, createL, createJ, createO } from './createBlock';

export function generateRandomBlock(scene) {
    let random = Math.floor(Math.random() * 7);
    switch(random) {
        case 0:
            return createI(scene);
        case 1:
            return createS(scene);
        case 2:
            return createT(scene);
        case 3:
            return createZ(scene);
        case 4:
            return createL(scene);
        case 5:
            return createJ(scene);
        case 6:
            return createO(scene);
    }
}