
import {
  randomGen, quiz, getName, greeting,
} from '../index.js';

const condition = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomExpressionGen = () => randomGen(1, 100);

const prepareExp = (exp) => ((exp % 2 === 0) ? 'yes' : 'no');

const startEven = () => {
  greeting();
  quiz(getName(), condition(), randomExpressionGen, prepareExp);
};
export default startEven;
