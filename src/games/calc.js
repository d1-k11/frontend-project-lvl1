import {
  getName, greeting, hello,
} from '../cli.js';

import quiz from '../index.js';

import randomGen from '../randomGen.js';

const condition = console.log('What is the result of the expression?');

const randomExpressionGen = () => {
  const num1 = randomGen(7, 14);
  const num2 = randomGen(1, 7);
  const arr = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const rand = randomGen(0, arr.length - 1);
  return arr[rand];
};

const calc = (arr) => {
  let result;
  switch (arr[1]) {
    case '+':
      result = `${Number(arr[0]) + Number(arr[2])}`;
      break;

    case '-':
      result = `${Number(arr[0]) - Number(arr[2])}`;
      break;

    default:
      result = `${Number(arr[0]) * Number(arr[2])}`;
      break;
  }
  return result;
};

const prepareExp = (exp) => {
  const strToArr = exp.split(' ');
  const answer = calc(strToArr);
  return answer;
};

const startCalc = () => {
  quiz(greeting, getName, condition, hello, randomExpressionGen, prepareExp);
};

export default startCalc;
