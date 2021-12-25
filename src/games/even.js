import startQuiz from '../index.js';
import genRandomNum from '../randomGen.js';
import { genListOfQuestions, genListOfAnswers } from '../listGenerators.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNum = 1;
const maxNum = 100;
const genQuestion = () => genRandomNum(minNum, maxNum);

const getAnswer = (value) => {
  const result = (value % 2 === 0) ? 'yes' : 'no';
  return result;
};

const questions = genListOfQuestions(genQuestion);
const correctAnswers = genListOfAnswers(getAnswer, questions);

const startEven = () => {
  startQuiz(description, questions, correctAnswers);
};

export default startEven;
