import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const playRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEven = () => {
  playGame(playRound, gameRules);
};

export default playEven;
