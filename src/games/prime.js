import { factorizator } from './gcd.js';
import {
  randomGen, quiz, greeting, conditionOf,
} from '../index.js';


const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomExpressionGen = () => 1 + randomGen(100);

const prepareExp = (str) => {
  const mltplrsOfNum = factorizator(Number(str));
  const result = ((mltplrsOfNum.length === 2) ? 'yes' : 'no');
  return result;
};

const startPrime = () => quiz(greeting(), conditionOf(condition), randomExpressionGen, prepareExp);

export default startPrime;
