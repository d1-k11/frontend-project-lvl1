import readlineSync from 'readline-sync';

export const greeting = console.log('Welcome to the Brain Games!');

export const getName = readlineSync.question('May I have your name? ');

export const hello = console.log(`Hello, ${getName}!`);

export const startBrainGames = () => {};
