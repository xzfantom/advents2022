import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/3/input.txt').toString().split(/\n/);
const alfabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sum = 0;
const set = new Set();
let x = 0;

while (x < input.length) {
  const line = input[x];
  const line1 = input[x + 1];
  const line2 = input[x + 2];
  x += 3;

  for (let i = 0; i < line.length; i++) {
    let symbol = line.at(i);
    if (line1.includes(symbol) && line2.includes(symbol)) {
      console.log(symbol, alfabet.indexOf(symbol));
      sum += alfabet.indexOf(symbol);
      break;
    }
  }
};

console.log(sum);