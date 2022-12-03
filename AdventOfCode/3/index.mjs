import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/3/input.txt').toString().split(/\n/);
const alfabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;

input.forEach((line) => {
  const left = line.slice(0, line.length / 2);
  const right = line.slice(line.length / 2, line.length);
  console.log(left, right);
  for (let i = 0; i < left.length; i++) {
    let symbol = left.at(i);
    if (right.includes(symbol)) {
      console.log(symbol, alfabet.indexOf(symbol));
      sum += alfabet.indexOf(symbol);
      break;
    }
  }
});

console.log(sum);