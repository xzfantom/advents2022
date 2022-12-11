import { readFileSync } from 'fs';

const X = 0;
const Y = 1;

const input = readFileSync('./AdventOfCode/9/input.txt').toString().split(/\n/);
const breadcrumbs = {};
const headCoords = [], tailCoords = [];
headCoords[X] = 0;
headCoords[Y] = 0;
tailCoords[X] = 0;
tailCoords[Y] = 0;
breadcrumbs[`${tailCoords[X]}x${tailCoords[Y]}`] = true;

input.forEach((line) => {
  const [direction, count] = line.split(' ');
  let steps = Number(count);
  while (steps > 0) {
    switch (direction) {
      case 'L':
        headCoords[X] -= 1;
        break;
      case 'R':
        headCoords[X] += 1;
        break;
      case 'U':
        headCoords[Y] += 1;
        break;
      case 'D':
        headCoords[Y] -= 1;
        break;
    }

    if (Math.abs(headCoords[X] - tailCoords[X]) <= 1 && Math.abs(headCoords[Y] - tailCoords[Y]) <= 1) {

    } else if (headCoords[X] === tailCoords[X]) {
      tailCoords[Y] += headCoords[Y] - tailCoords[Y] > 0 ? 1 : -1;
    } else if (headCoords[Y] === tailCoords[Y]) {
      tailCoords[X] += headCoords[X] - tailCoords[X] > 0 ? 1 : -1;
    } else {
      tailCoords[Y] += headCoords[Y] - tailCoords[Y] > 0 ? 1 : -1;
      tailCoords[X] += headCoords[X] - tailCoords[X] > 0 ? 1 : -1;
    }
    breadcrumbs[`${tailCoords[X]}x${tailCoords[Y]}`] = true;
    steps--;
  }
  console.log(direction, count, headCoords, tailCoords);
})

let i = 0;
for (let key of Object.keys(breadcrumbs)) i++;
console.log(i);