import startQuiz from '../index.js';
import genRandomNum from '../randomGen.js';
import { genListOfQuestions, genListOfAnswers } from '../listGenerators.js';

const description = 'What is the result of the expression?';

const doCalc = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    default:
      result = num1 * num2;
      break;
  }
  return result;
};

const genQuestion = () => {
  const range = [1, 7, 14];
  const [beginRange, midRange, endRange] = range;
  const num1 = genRandomNum(midRange, endRange);
  const num2 = genRandomNum(beginRange, midRange);
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const randomExpression = genRandomNum(0, expressions.length - 1);
  return expressions[randomExpression];
};

const getAnswer = (value) => {
  const expression = value.split(' ');
  const num1 = Number(expression[0]);
  const num2 = Number(expression[2]);
  const operator = expression[1];
  const answer = doCalc(num1, num2, operator);
  return String(answer);
};

const questions = genListOfQuestions(genQuestion);
const correctAnswers = genListOfAnswers(getAnswer, questions);

const startCalc = () => {
  startQuiz(description, questions, correctAnswers);
};

export default startCalc;
