import {
  getName, greeting, hello,
} from '../cli.js';

import quiz from '../index.js';

import randomGen from '../randomGen.js';

const condition = console.log('What number is missing in the progression?');

const randomExpressionGen = () => {
  const a = randomGen(0, 100);
  const d = randomGen(1, 9);
  const arr = [a];
  const maxArrLength = 10;
  for (let i = 1; i < maxArrLength; i += 1) {
    arr.push(arr[i - 1] + d);
  }
  const getRandomIndex = randomGen(1, arr.length - 2);
  arr[getRandomIndex] = '..';
  const arrToStr = arr.join(' ');
  return arrToStr;
};

const prepareExp = (exp) => {
  const strToArr = exp.split(' ');
  const index = strToArr.indexOf('..');
  const missingItem = (Number(strToArr[index - 1]) + Number(strToArr[index + 1])) / 2;
  return `${missingItem}`;
};

const startPrgrsn = () => {
  quiz(greeting, getName, condition, hello, randomExpressionGen, prepareExp);
};

export default startPrgrsn;
