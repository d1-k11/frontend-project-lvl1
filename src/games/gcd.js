import startQuiz from '../index.js';
import genRandomNum from '../randomGen.js';
import { genListOfQuestions, genListOfAnswers } from '../listGenerators.js';

const description = 'Find the greatest common divisor of given numbers.';

const genQuestion = () => {
  const minNum = 1;
  const maxNum = 100;
  const num1 = genRandomNum(minNum, maxNum);
  const num2 = genRandomNum(minNum, maxNum);
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
  return a + b;
};

const getAnswer = (value) => {
  const pair = value.split([' ']);
  const getNumFromArr = (i) => Number(pair[i]);
  const num1 = getNumFromArr(0);
  const num2 = getNumFromArr(1);
  const result = getGcd(num1, num2);
  return String(result);
};

const questions = genListOfQuestions(genQuestion);
const correctAnswers = genListOfAnswers(getAnswer, questions);

const startGcd = () => {
  startQuiz(description, questions, correctAnswers);
};

export default startGcd;
