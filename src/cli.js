import readlineSync from 'readline-sync';

const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  return getName;
};

export default startBrainGames;
