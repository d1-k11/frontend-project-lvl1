import readlineSync from 'readline-sync';

const greeting = () => {
  const whatName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${whatName}!`);
};

export default greeting;
