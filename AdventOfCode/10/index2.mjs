import { readFileSync } from 'fs';

const WIDTH = 40;

const input = readFileSync('./AdventOfCode/10/input.txt').toString().split(/\n/);
const queue = [];
const screen = [[], [], [], [], [], []];

input.forEach((line) => {
  if (line) {
    line.split(' ').forEach((cmd) => {
      queue.push(cmd);
    })
  }
});

let counter = 0;
let xReg = 1;
while (queue.length) {
  let y = Math.floor(counter / WIDTH);
  let x = counter % WIDTH;
  screen[y][x] = xReg >= x - 1 && xReg <= x + 1 ? '#' : '.';

  const cmd = queue.shift();
  switch (cmd) {
    case 'noop': break;
    case 'addx': break;
    default:
      let op = Number(cmd);
      xReg += op;
  }

  counter++;
}
for (let i = 0; i < 6; i++) {
  console.log(screen[i].join(''));
}