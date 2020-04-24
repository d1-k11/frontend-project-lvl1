import readlineSync from 'readline-sync';

export const randomGen = (mltplr) => Math.floor(Math.random() * mltplr);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  const name = getName;
  return name;
};

export const conditionOf = (condition) => console.log(condition);

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
};
