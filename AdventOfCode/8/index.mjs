import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/8/input.txt').toString().split(/\n/);
const counter = {};
for (let x = 0; x < input[0].length; x++) {
  let maxHeight = 0;
  for (let y = 0; y < input.length; y++) {
    if (y === 0) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    } else if (maxHeight < input[y][x]) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    }
  }
}

for (let x = 0; x < input[0].length; x++) {
  let maxHeight = 0;
  for (let y = input.length - 1; y >= 0; y--) {
    if (y === input.length - 1) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    } else if (maxHeight < input[y][x]) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    }
  }
}

for (let y = 0; y < input.length; y++) {
  let maxHeight = 0;
  for (let x = 0; x < input[0].length; x++) {
    if (x === 0) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    } else if (maxHeight < input[y][x]) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    }
  }
}

for (let y = 0; y < input.length; y++) {
  let maxHeight = 0;
  for (let x = input[0].length - 1; x >= 0; x--) {
    if (x === input[0].length - 1) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    } else if (maxHeight < input[y][x]) {
      counter[`${x}x${y}`] = 1;
      maxHeight = input[y][x];
    }
  }
}

let i = 0;
for (let key of Object.keys(counter)) i++;
console.log(i);