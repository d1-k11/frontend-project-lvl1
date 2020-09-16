import {
  randomGen, quiz, getName, greeting,
} from '../index.js';

const condition = () => console.log('Find the greatest common divisor of given numbers.');

const randomExpressionGen = () => {
  const num1 = randomGen(1, 100);
  const num2 = randomGen(1, 100);
  return `${num1} ${num2}`;
};

const prepareExp = (str) => {
  const strToArr = str.split([' ']);
  const strToNum = (i) => Number(strToArr[i]);
  const num1 = strToNum(0);
  const num2 = strToNum(1);


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

const startGcd = () => {
  greeting();
  quiz(getName(), condition(), randomExpressionGen, prepareExp);
};
export default startGcd;
