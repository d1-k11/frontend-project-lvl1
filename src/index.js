import readlineSync from 'readline-sync';

const stopQuiz = (name) => console.log(`Congratulations, ${name}!`);

const startQuiz = (name, condition, genRandomExpression, prepareExpression, round = 0) => {
  const maxCountOfRounds = 3;
  if (round === maxCountOfRounds) {
    return stopQuiz(name);
  }
  const expression = genRandomExpression();
  console.log(`Question: ${expression}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const check = prepareExpression(expression);
  if (check !== getAnswer) {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${check}". \nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
    startQuiz(name, condition, genRandomExpression, prepareExpression, round + 1);
  }
  return 1;
};

export default startQuiz;
