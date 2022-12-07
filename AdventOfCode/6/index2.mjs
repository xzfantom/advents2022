import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/6/input.txt').toString().split(/\n/);

let counter = 13;
while (counter < input[0].length) {
  const set = new Set();
  for (let i = 0; i < 14; i++) {
    set.add(input[0][counter - i]);
  }
  if (set.size === 14) {
    console.log(counter + 1);
    break;
  }
  counter++;
}

