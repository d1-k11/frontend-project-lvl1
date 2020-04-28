import {
  randomGen, quiz, greeting, conditionOf,
} from '../index.js';

const condition = 'What number is missing in the progression?';

const randomExpressionGen = () => {
  const a = randomGen(100);
  const d = randomGen(10) + 1;
  const arr = [a];
  for (let i = 0; i < 9; i += 1) {
    arr.push(arr[i] + d);
  }
  const getRandomIndex = 1 + randomGen(arr.length - 2);
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

const startPrgrsn = () => quiz(greeting(), conditionOf(condition), randomExpressionGen, prepareExp);

export default startPrgrsn;
