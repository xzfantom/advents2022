import { readFileSync } from 'fs';

const input = readFileSync('./AdventOfCode/8/input.txt').toString().split(/\n/);
const result = [];
let max = 0;
for (let y = 0; y < input.length; y++) {
  result.push([]);
  for (let x = 0; x < input[0].length; x++) {
    let i;
    let top = 0, bottom = 0, left = 0, right = 0;

    i = y - 1;
    while (i >= 0 && input[i][x] < input[y][x]) {
      top++;
      i--;
    }
    if (i !== -1) top++;

    i = y + 1;
    while (i < input.length && input[i][x] < input[y][x]) {
      bottom++;
      i++
    }
    if (i !== input.length) {
      bottom++;
    }

    i = x - 1;
    while (i >= 0 && input[y][i] < input[y][x]) {
      left++;
      i--;
    }
    if (i !== -1) left++;

    i = x + 1;
    while (i < input[0].length && input[y][i] < input[y][x]) {
      right++;
      i++;
    }
    if (i !== input[0].length) right++;

    let res = top * bottom * left * right;
    result[y][x] = res;
    max = Math.max(max, res);
    console.log(`x=${x}, y=${y}, ${top}*${bottom}*${left}*${right}=${res}, max=${max}`)
  }
}
//console.log(result);
console.log(max);