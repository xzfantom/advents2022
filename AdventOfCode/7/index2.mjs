import { readFileSync } from 'fs';

let sizeFolder = [];

const getSize = (obj, requiredSpace) => {
  let currSize = 0;
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      let size = getSize(obj[key], requiredSpace);
      currSize += size;
      //console.log(key, size);
    } else {
      currSize += obj[key];
    }
  }
  if (currSize >= requiredSpace) {
    sizeFolder.push(currSize);
  }

  return currSize;
}

const input = readFileSync('./AdventOfCode/7/input.txt').toString().split(/\n/);
const dirStack = [];
const fs = {};
let currDir = fs;
let occupiedSpace = 0;

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
    occupiedSpace += Number(size);
  }
})
const freeSpace = 70000000 - occupiedSpace;
const requiredSpace = 30000000 - freeSpace;
console.log(occupiedSpace, freeSpace, requiredSpace);
getSize(fs, requiredSpace);

console.table(sizeFolder.sort((a, b) => a - b));