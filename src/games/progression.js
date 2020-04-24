import { randomGen } from '../index.js';

export const condition = 'What number is missing in the progression?';

export const randomExpressionGen = () => {
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

export const prepareExp = (exp) => {
  const strToArr = exp.split(' ');
  const index = strToArr.indexOf('..');
  const missingItem = (Number(strToArr[index - 1]) + Number(strToArr[index + 1])) / 2;
  return `${missingItem}`;
};
