import readlineSync from 'readline-sync';

const stopGame = (name) => console.log(`Congratulations, ${name}!`);

const quiz = (greetings, name, hi, condition, randomExprGen, prepareExp, round = 0) => {
  const maxCountOfRounds = 3;
  if (round === maxCountOfRounds) {
    return stopGame(name);
  }
  const expression = randomExprGen();
  console.log(`Question: ${expression}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const check = prepareExp(expression);
  if (check !== getAnswer) {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${check}". \nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
    quiz(greetings, name, hi, condition, randomExprGen, prepareExp, round + 1);
  }
  return 1;
};

export default quiz;
