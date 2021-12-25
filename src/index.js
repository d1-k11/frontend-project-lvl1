import readlineSync from 'readline-sync';

import startBrainGames from './cli.js';

const name = startBrainGames();

const startQuiz = (description, questions, correctAnswers, round = 0) => {
  const maxCountOfRounds = 3;
  if (round === 0) {
    console.log(description);
  }
  const stopQuiz = `Congratulations, ${name}!`;
  if (round === maxCountOfRounds) {
    return console.log(stopQuiz);
  }
  console.log(`Question: ${questions[round]}`);
  const getAnswer = readlineSync.question('Your answer: ');
  if (correctAnswers[round] !== getAnswer) {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswers[round]}". \nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
    startQuiz(description, questions, correctAnswers, round + 1);
  }
  return 1;
};

export default startQuiz;
