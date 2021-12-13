import {
  getName, greeting, hello,
} from '../cli.js';

import quiz from '../index.js';

import randomGen from '../randomGen.js';

const condition = console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const randomExpressionGen = () => randomGen(1, 100);

const prepareExp = (str) => {
  const num = Number(str);
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startPrime = () => {
  quiz(greeting, getName, condition, hello, randomExpressionGen, prepareExp);
};

export default startPrime;
