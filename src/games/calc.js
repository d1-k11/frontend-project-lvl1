import {
  randomGen, quiz, greeting, conditionOf,
} from '../index.js';

const condition = 'What is the result of the expression?';

const randomExpressionGen = () => {
  const num1 = randomGen(100);
  const num2 = randomGen(50);
  const arr = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const rand = randomGen(arr.length);
  return arr[rand];
};

const prepareExp = (exp) => {
  const strToArr = exp.split(' ');
  if (strToArr[1] === '+') {
    return `${Number(strToArr[0]) + Number(strToArr[2])}`;
  }
  if (strToArr[1] === '-') {
    return `${Number(strToArr[0]) - Number(strToArr[2])}`;
  }
  return `${Number(strToArr[0]) * Number(strToArr[2])}`;
};

const startCalc = () => quiz(greeting(), conditionOf(condition), randomExpressionGen, prepareExp);

export default startCalc;
