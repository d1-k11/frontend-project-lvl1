import startBrainGames from '../cli.js';

import startQuiz from '../index.js';

import genRandomNum from '../randomGen.js';

const name = startBrainGames();

const condition = console.log('What is the result of the expression?');

const genRandomExpression = () => {
  const num1 = genRandomNum(7, 14);
  const num2 = genRandomNum(1, 7);
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const randomExpression = genRandomNum(0, expressions.length - 1);
  return expressions[randomExpression];
};

const doCalc = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = `${num1 + num2}`;
      break;

    case '-':
      result = `${num1 - num2}`;
      break;

    default:
      result = `${num1 * num2}`;
      break;
  }
  return result;
};

const prepareExpression = (exp) => {
  const strToArr = exp.split(' ');
  const num1 = Number(strToArr[0]);
  const num2 = Number(strToArr[2]);
  const operator = strToArr[1];
  const answer = doCalc(num1, num2, operator);
  return answer;
};

const startCalc = () => {
  startQuiz(name, condition, genRandomExpression, prepareExpression);
};

export default startCalc;
