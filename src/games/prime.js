import startQuiz from '../index.js';
import genRandomNum from '../randomGen.js';
import { genListOfQuestions, genListOfAnswers } from '../listGenerators.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 1;
const maxNum = 100;
const genQuestion = () => genRandomNum(minNum, maxNum);

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (value) => {
  const result = (isPrime(value) === true) ? 'yes' : 'no';
  return result;
};

const questions = genListOfQuestions(genQuestion);
const correctAnswers = genListOfAnswers(getAnswer, questions);

const startPrime = () => {
  startQuiz(description, questions, correctAnswers);
};

export default startPrime;
