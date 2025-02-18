import * as THREE from 'three';

export function setupBoard(scene) { // board will be 10 by 10 by 20
    const createLine = (color, start, end) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        const material = new THREE.LineBasicMaterial({ color: color });
        return new THREE.Line(geometry, material);
    };
    const left = createLine(0xffffff, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 10));
    const right = createLine(0xffffff, new THREE.Vector3(10, 0, 0), new THREE.Vector3(10, 0, 10));
    const bottom = createLine(0xffffff, new THREE.Vector3(0, 0, 10), new THREE.Vector3(10, 0, 10));
    const top = createLine(0xffffff, new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 0, 0));
    scene.add(left);
    scene.add(right);
    scene.add(bottom);
    scene.add(top);
    let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    return grid;

}
