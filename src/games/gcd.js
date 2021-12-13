import {
  getName, greeting, hello,
} from '../cli.js';

import quiz from '../index.js';

import randomGen from '../randomGen.js';

const condition = console.log('Find the greatest common divisor of given numbers.');

const randomExpressionGen = () => {
  const num1 = randomGen(1, 100);
  const num2 = randomGen(1, 100);
  return `${num1} ${num2}`;
};

const gcdCalc = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return `${a + b}`;
};

const prepareExp = (str) => {
  const strToArr = str.split([' ']);
  const numFromArr = (i) => Number(strToArr[i]);
  const num1 = numFromArr(0);
  const num2 = numFromArr(1);
  const result = gcdCalc(num1, num2);
  return result;
};

const startGcd = () => {
  quiz(greeting, getName, condition, hello, randomExpressionGen, prepareExp);
};

export default startGcd;
