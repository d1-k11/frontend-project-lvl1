import startBrainGames from '../cli.js';

import startQuiz from '../index.js';

import genRandomNum from '../randomGen.js';

const name = startBrainGames();

const condition = console.log('Answer "yes" if the number is even, otherwise answer "no".');

const genRandomExpression = () => genRandomNum(1, 100);

const prepareExpression = (exp) => ((exp % 2 === 0) ? 'yes' : 'no');

const startEven = () => {
  startQuiz(name, condition, genRandomExpression, prepareExpression);
};

export default startEven;
