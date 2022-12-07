import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/6/input.txt').toString().split(/\n/);

let counter = 3;
while (counter < input[0].length) {
  const set = new Set();
  set.add(input[0][counter - 3]);
  set.add(input[0][counter - 2]);
  set.add(input[0][counter - 1]);
  set.add(input[0][counter]);
  if (set.size === 4) {
    console.log(counter + 1);
    break;
  }
  counter++;
}

