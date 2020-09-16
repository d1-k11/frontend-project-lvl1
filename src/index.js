import readlineSync from 'readline-sync';

export const randomGen = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);
  const name = askName;
  return name;
};

export const quiz = (name, condition, randomExpressionGen, prepareExp, round = 0) => {
  if (round === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const expression = randomExpressionGen();
  console.log(`Question: ${expression}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const check = prepareExp(expression);
  if (check !== getAnswer) {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${check}". \nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
    quiz(name, condition, randomExpressionGen, prepareExp, round + 1);
  }
  return 1;
};
