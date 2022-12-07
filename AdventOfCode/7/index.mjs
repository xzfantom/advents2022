import { readFileSync } from 'fs';

let sizeLower = 0;

const getSize = (obj) => {
  let currSize = 0;
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      currSize += getSize(obj[key]);
    } else {
      currSize += obj[key];
    }
  }
  if (currSize <= 100000) {
    sizeLower += currSize;
  }
  return currSize;
}

const input = readFileSync('./AdventOfCode/7/input.txt').toString().split(/\n/);
const dirStack = [];
const fs = {};
let currDir = fs;

input.forEach((line) => {
  if (!line) {
    // do nothing
  } else if (line === "$ cd /") {
    dirStack.length = 0;
    currDir = fs;
  } else if (line === "$ cd ..") {
    dirStack.pop();
    currDir = fs;
    dirStack.forEach((dir) => currDir = currDir[dir]);
  } else if (line.match(/^\$ cd/)) {
    let newDir = line.slice(5);
    dirStack.push(newDir);
    if (!currDir[newDir]) {
      currDir[newDir] = {};
    }
    currDir = currDir[newDir];
  } else if (line === "$ ls") {
    // do nothing
  } else if (line.match(/^dir/)) {
    let newDir = line.slice(4);
    if (!currDir[newDir]) {
      currDir[newDir] = {};
    }
  } else {
    let [size, file] = line.split(' ');
    currDir[file] = Number(size);
  }
})
console.log(fs);
console.log(getSize(fs));
console.log(sizeLower);