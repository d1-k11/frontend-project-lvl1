import { randomGen } from '../index.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const randomExpressionGen = () => randomGen(100);

export const prepareExp = (exp) => (exp % 2 === 0) ? 'yes' : 'no';
