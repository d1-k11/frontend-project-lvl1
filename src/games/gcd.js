import startBrainGames from '../cli.js';

import startQuiz from '../index.js';

import genRandomNum from '../randomGen.js';

const name = startBrainGames();

const condition = console.log('Find the greatest common divisor of given numbers.');

const genRandomExpression = () => {
  const num1 = genRandomNum(1, 100);
  const num2 = genRandomNum(1, 100);
  return `${num1} ${num2}`;
};

const getGcd = (num1, num2) => {
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

const prepareExpression = (str) => {
  const strToArr = str.split([' ']);
  const getNumFromArr = (i) => Number(strToArr[i]);
  const num1 = getNumFromArr(0);
  const num2 = getNumFromArr(1);
  const result = getGcd(num1, num2);
  return result;
};

const startGcd = () => {
  startQuiz(name, condition, genRandomExpression, prepareExpression);
};

export default startGcd;
