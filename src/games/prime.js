import {
  randomGen, quiz, getName, greeting,
} from '../index.js';


const condition = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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
  greeting();
  quiz(getName(), condition(), randomExpressionGen, prepareExp);
};
export default startPrime;
