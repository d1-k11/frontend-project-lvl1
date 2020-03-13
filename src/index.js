import readlineSync from 'readline-sync';

export const greeting = () => {
 const whatName = readlineSync.question('May I have your name? ');
 console.log(`Hello, ${whatName}!`);
};

