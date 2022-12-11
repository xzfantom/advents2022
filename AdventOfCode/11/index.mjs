import { readFileSync } from 'fs';

const MONKEY_ID = /^Monkey (?<id>\d+):/mg;
const STARTING_ITMS = /Starting items: (?<items>(?:\d*)(?:, (?:\d*))*)/mg;
const OPERATION = /Operation: new = (?<operation>.*)$/mg;
const TEST = /Test: divisible by (?<test>\d*)$/mg;
const IF_TRUE = /If true: throw to monkey (?<ifTrue>\d*)$/mg;
const IF_FALSE = /If false: throw to monkey (?<ifFalse>\d*)$/mg;

const input = readFileSync('./AdventOfCode/11/input.tst').toString().split(/\n/);
const monkeys = [];

const parse = (data, output) => {
  let i = 0;
  while (i < data.length) {
    if (data[i].match(/^Monkey/)) {
      const newMonkey = {};
      newMonkey.inspected = 0;

      for (const match of data[i].matchAll(MONKEY_ID)) {
        newMonkey.id = match.groups.id;
      }
      i++;

      // Starting items: 99, 63, 76, 93, 54, 73
      newMonkey.items = [];
      for (const match of data[i].matchAll(STARTING_ITMS)) {
        match.groups.items.split(', ').forEach(element => {
          newMonkey.items.push(Number(element));
        });
      }
      i++;

      //Operation: new = old * 11
      for (const match of data[i].matchAll(OPERATION)) {
        newMonkey.operation = match.groups.operation;
      }
      i++;

      //Test: divisible by 2
      for (const match of data[i].matchAll(TEST)) {
        newMonkey.test = Number(match.groups.test);
      }
      i++;

      //If true: throw to monkey 7
      for (const match of data[i].matchAll(IF_TRUE)) {
        newMonkey.ifTrue = Number(match.groups.ifTrue);
      }
      i++;

      //If false: throw to monkey 1
      for (const match of data[i].matchAll(IF_FALSE)) {
        newMonkey.ifFalse = Number(match.groups.ifFalse);
      }
      i++;
      output[newMonkey.id] = newMonkey;
    }
    i++;
  }
}

const calc = (formula, value) => {
  const [left, operation, right] = formula.split(' ');
  let leftNum, rightNum;
  if (left === 'old') {
    leftNum = value;
  } else {
    leftNum = Number(left);
  }
  if (right === 'old') {
    rightNum = value;
  } else {
    rightNum = Number(right);
  }
  switch (operation) {
    case '+': return leftNum + rightNum;
    case '-': return leftNum - rightNum;
    case '*': return leftNum * rightNum;
    case '/': return leftNum / rightNum;
  }
}

parse(input, monkeys);
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < monkeys.length; j++) {
    while (monkeys[j].items.length) {
      const currItem = monkeys[j].items.shift();
      const calcItem = calc(monkeys[j].operation, currItem);
      const relief = calcItem;
      console.log(j, relief);
      if (relief % monkeys[j].test) {
        monkeys[monkeys[j].ifFalse].items.push(relief);
      } else {
        monkeys[monkeys[j].ifTrue].items.push(relief);
      }
      monkeys[j].inspected++;
    }
  }
}

//console.log(monkeys);
console.log(monkeys.map((item) => item.inspected));