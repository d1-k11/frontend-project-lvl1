import readlineSync from 'readline-sync';


export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  const name = getName;
  return name;
};


export const condition = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');


export const evenOrNot = (name, round = 0) => {
  if (round === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const randomNumGen = () => Math.floor(Math.random() * 100);
  const num = randomNumGen();
  console.log(`Question: ${num}`);

  const getAnswer = readlineSync.question('Your answer: ');

  const numEvenCheck = (num % 2 === 0) ? 'yes' : 'no';

  if (numEvenCheck !== getAnswer) {
    console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${numEvenCheck}". \nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
    evenOrNot(name, round + 1);
  }
};
