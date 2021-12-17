import startBrainGames from '../cli.js';

import startQuiz from '../index.js';

import genRandomNum from '../randomGen.js';

const name = startBrainGames();

const condition = console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const genRandomExpression = () => genRandomNum(1, 100);

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

const prepareExpression = (str) => ((isPrime(Number(str)) === true) ? 'yes' : 'no');

const startPrime = () => {
  startQuiz(name, condition, genRandomExpression, prepareExpression);
};

export default startPrime;
