/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 100);
const isEven = (num) => num % 2 === 0;
const playRound = () => {
  const number = generateRandomNumber();
  const answer = readlineSync.question(`Question: ${number} \nYour answer: `);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
const playGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      const gameOver = `Let's try again, ${userName}!`;
      return gameOver;
    }
  }
  const gameWinner = `Congratulations, ${userName}!`;
  // eslint-disable-next-line consistent-return
  return gameWinner;
};

console.log('Welcome to the Brain Games!');
console.log(playGame());
