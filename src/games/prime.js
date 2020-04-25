import { factorizator } from './gcd.js';
import { randomGen } from '../index.js';

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const randomExpressionGen = () => 1 + randomGen(100);

export const prepareExp = (str) => {
  const mltplrsOfNum = factorizator(Number(str));
  const result = ((mltplrsOfNum.length === 2) ? 'yes' : 'no');
  return result;
};
