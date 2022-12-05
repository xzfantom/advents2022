import { readFileSync } from 'fs';

const parse = (line) => {
  const [left, right] = line.split(',');
  const [leftStart, leftEnd] = left.split('-');
  const [rightStart, rightEnd] = right.split('-');

  return [Number(leftStart), Number(leftEnd), Number(rightStart), Number(rightEnd)];
}

const inRange = (num, left, right) => num >= left && num <= right;

const input = readFileSync('./AdventOfCode/4/input.txt').toString().split(/\n/);
let sum = 0;

input.forEach((line) => {
  const borders = parse(line);
  if (inRange(borders[0], borders[2], borders[3]) || inRange(borders[1], borders[2], borders[3])
    || inRange(borders[2], borders[0], borders[1]) || inRange(borders[3], borders[0], borders[1])) {
    sum += 1;
    console.log(borders, sum);
  }
});

console.log(sum);