import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/10/input.txt').toString().split(/\n/);
const queue = [];

input.forEach((line) => {
  if (line) {
    line.split(' ').forEach((cmd) => {
      queue.push(cmd);
    })
  }
});

let counter = 0;
let xReg = 1;
let strSum = 0;
while (queue.length) {
  counter++;
  if (counter === 20 || (counter - 20) % 40 === 0) {
    let strength = counter * xReg;
    strSum += strength;
    console.log('===', strength, strSum);
  }
  const cmd = queue.shift();
  switch (cmd) {
    case 'noop': break;
    case 'addx': break;
    default:
      let op = Number(cmd);
      xReg += op;
  }
  console.log(counter, cmd, xReg);
}
console.log(strSum);