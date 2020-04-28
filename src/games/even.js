
import {
  randomGen, quiz, greeting, conditionOf,
} from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomExpressionGen = () => randomGen(100);

const prepareExp = (exp) => ((exp % 2 === 0) ? 'yes' : 'no');

const startEven = () => quiz(greeting(), conditionOf(condition), randomExpressionGen, prepareExp);

export default startEven;
