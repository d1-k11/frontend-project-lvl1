import startBrainGames from '../cli.js';

import startQuiz from '../index.js';

import genRandomNum from '../randomGen.js';

const name = startBrainGames();

const condition = console.log('What number is missing in the progression?');

const genRange = (a, b) => {
  const maxRangeLength = 10;
  const range = [];
  for (let i = 0; i < maxRangeLength; i += 1) {
    range.push(a[0] + b * i);
  }
  return range;
};

const hideRandomIndex = (range) => {
  const RandomIndex = genRandomNum(1, range.length - 2);
  const rangeWithSecret = range;
  rangeWithSecret[RandomIndex] = '..';
  return rangeWithSecret;
};

const genRandomExpression = () => {
  const startRange = [genRandomNum(0, 100)];
  const diff = genRandomNum(1, 9);
  const numbers = hideRandomIndex(genRange(startRange, diff));
  const arrToStr = numbers.join(' ');
  return arrToStr;
};

const prepareExpression = (exp) => {
  const strToArr = exp.split(' ');
  const index = strToArr.indexOf('..');
  const missingItem = (Number(strToArr[index - 1]) + Number(strToArr[index + 1])) / 2;
  return `${missingItem}`;
};

const startProgression = () => {
  startQuiz(name, condition, genRandomExpression, prepareExpression);
};

export default startProgression;
