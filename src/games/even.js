import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const playRound = () => {
  const number = generateRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => {
  playGame(playRound, gameRules);
};

export default playEven;
