import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/5/input.txt').toString().split(/\n/);
const stacks = [];

let counter = 0;
const maxStacks = Math.floor((input[counter].length + 1) / 4);
console.log(maxStacks);
while (input[counter]) {
  console.log(input[counter]);
  for (let i = 0; i < maxStacks; i++) {
    const token = input[counter].slice(i * 4, (i + 1) * 4 - 1);
    if (!stacks[i]) {
      stacks[i] = [];
    }
    if (token[0] !== ' ') {
      stacks[i].push(token);
    }
  }
  counter++;
}
counter++;

while (input[counter]) {
  const [command, count, f, from, t, to] = input[counter].split(' ');
  console.log(input[counter], count, from, to);
  for (let i = 0; i < count; i++) {
    const container = stacks[from - 1].shift();
    stacks[to - 1].unshift(container);
  }
  counter++;
}

for (let i = 0; i < maxStacks; i++)
  console.log(stacks[i][0]);
