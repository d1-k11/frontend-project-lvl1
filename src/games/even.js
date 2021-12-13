import {
  getName, greeting, hello,
} from '../cli.js';

import quiz from '../index.js';

import randomGen from '../randomGen.js';

const condition = console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomExpressionGen = () => randomGen(1, 100);

const prepareExp = (exp) => ((exp % 2 === 0) ? 'yes' : 'no');

const startEven = () => {
  quiz(greeting, getName, hello, condition, randomExpressionGen, prepareExp);
};

export default startEven;
