import startQuiz from '../index.js';
import genRandomNum from '../randomGen.js';
import { genListOfQuestions, genListOfAnswers } from '../listGenerators.js';

const description = 'What number is missing in the progression?';

const genRange = (a, b) => {
  const maxRangeLength = 10;
  const range = [];
  for (let i = 0; i < maxRangeLength; i += 1) {
    range.push(a[0] + b * i);
  }
  return range;
};

const hideRandomIndex = (range) => {
  const minPositionOfIndex = 1;
  const maxPositionOfIndex = range.length - 1;
  const RandomIndex = genRandomNum(minPositionOfIndex, maxPositionOfIndex);
  const rangeWithSecret = range;
  rangeWithSecret[RandomIndex] = '..';
  return rangeWithSecret;
};

const genQuestion = () => {
  const limitsSet = [0, 1, 9, 100];
  const [minOfStartRange, minOfDiff, maxOfDiff, maxOfStartRange] = limitsSet;
  const diff = genRandomNum(minOfDiff, maxOfDiff);
  const startRange = [genRandomNum(minOfStartRange, maxOfStartRange)];
  const numbers = hideRandomIndex(genRange(startRange, diff));
  return numbers.join(' ');
};

const getAnswer = (value) => {
  const numbers = value.split(' ');
  const indexOfSecret = numbers.indexOf('..');
  const nextNumber = (numbers[1] !== '..') ? numbers[1] : numbers[2];
  const diff = (nextNumber - numbers[0]) / numbers.indexOf(nextNumber);
  const missingItem = Number(numbers[0]) + Number(diff) * indexOfSecret;
  return `${missingItem}`;
};

const questions = genListOfQuestions(genQuestion);
const correctAnswers = genListOfAnswers(getAnswer, questions);

const startProgression = () => {
  startQuiz(description, questions, correctAnswers);
};

export default startProgression;
