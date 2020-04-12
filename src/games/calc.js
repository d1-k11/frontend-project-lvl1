import { randomGen } from '../index.js';

export const condition = 'What is the result of the expression?';

export const randomExpressionGen = () => {
  const num1 = randomGen(100);
  const num2 = randomGen(100);
  const arr = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const rand = randomGen(arr.length);
  return arr[rand];
};

export const prepareExp = (exp) => eval(exp);
