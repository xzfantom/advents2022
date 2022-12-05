import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/4/input.txt').toString().split(/\n/);
let sum = 0;

input.forEach((line) => {
  const [left, right] = line.split(',');
  const [leftStart, leftEnd] = left.split('-');
  const [rightStart, rightEnd] = right.split('-');
  if ((Number(leftStart) <= Number(rightStart) && Number(leftEnd) >= Number(rightEnd))
    || (Number(rightStart) <= Number(leftStart) && Number(rightEnd) >= Number(leftEnd))) {
    sum += 1;
    console.log(leftStart, leftEnd, rightStart, rightEnd, sum);
  }
});

console.log(sum);