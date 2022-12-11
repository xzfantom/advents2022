import { readFileSync } from 'fs';

const X = 0;
const Y = 1;
const LAST = 9;

const input = readFileSync('./AdventOfCode/9/input.txt').toString().split(/\n/);
const breadcrumbs = {};
const ropeCoords = [];
for (let i = 0; i <= LAST; i++) ropeCoords[i] = [0, 0];

breadcrumbs[`${ropeCoords[LAST][X]}x${ropeCoords[LAST][Y]}`] = true;

input.forEach((line) => {
  const [direction, count] = line.split(' ');
  let steps = Number(count);
  while (steps > 0) {
    switch (direction) {
      case 'L':
        ropeCoords[0][X] -= 1;
        break;
      case 'R':
        ropeCoords[0][X] += 1;
        break;
      case 'U':
        ropeCoords[0][Y] += 1;
        break;
      case 'D':
        ropeCoords[0][Y] -= 1;
        break;
    }

    for (let i = 1; i <= LAST; i++) {
      if (Math.abs(ropeCoords[i - 1][X] - ropeCoords[i][X]) <= 1 && Math.abs(ropeCoords[i - 1][Y] - ropeCoords[i][Y]) <= 1) {

      } else if (ropeCoords[i - 1][X] === ropeCoords[i][X]) {
        ropeCoords[i][Y] += ropeCoords[i - 1][Y] - ropeCoords[i][Y] > 0 ? 1 : -1;
      } else if (ropeCoords[i - 1][Y] === ropeCoords[i][Y]) {
        ropeCoords[i][X] += ropeCoords[i - 1][X] - ropeCoords[i][X] > 0 ? 1 : -1;
      } else {
        ropeCoords[i][Y] += ropeCoords[i - 1][Y] - ropeCoords[i][Y] > 0 ? 1 : -1;
        ropeCoords[i][X] += ropeCoords[i - 1][X] - ropeCoords[i][X] > 0 ? 1 : -1;
      }
    }
    breadcrumbs[`${ropeCoords[LAST][X]}x${ropeCoords[LAST][Y]}`] = true;
    steps--;
  }
  console.log(direction, count, ropeCoords[0], ropeCoords[LAST]);
})

let i = 0;
for (let key of Object.keys(breadcrumbs)) i++;
console.log(i);