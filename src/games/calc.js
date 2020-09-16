import {
  randomGen, quiz, getName, greeting,
} from '../index.js';

const condition = () => console.log('What is the result of the expression?');

const randomExpressionGen = () => {
  const num1 = randomGen(7, 14);
  const num2 = randomGen(1, 7);
  const arr = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const rand = randomGen(0, arr.length - 1);
  return arr[rand];
};

const prepareExp = (exp) => {
  let answer;
  const strToArr = exp.split(' ');
  switch (strToArr[1]) {
    case '+':
      answer = `${Number(strToArr[0]) + Number(strToArr[2])}`;
      break;

    case '-':
      answer = `${Number(strToArr[0]) - Number(strToArr[2])}`;
      break;

    default:
      answer = `${Number(strToArr[0]) * Number(strToArr[2])}`;
      break;
  }
  return answer;
};

const startCalc = () => {
  greeting();
  quiz(getName(), condition(), randomExpressionGen, prepareExp);
};
export default startCalc;
