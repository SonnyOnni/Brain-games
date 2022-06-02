/* eslint-disable consistent-return */
import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getTheLargestDivider = (x, y) => (x !== 0 ? getTheLargestDivider(y % x, x) : y);

const playRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getTheLargestDivider(firstNumber, secondNumber));
  return [question, answer];
};

const playGcd = () => {
  playGame(playRound, gameRules);
};

export default playGcd;
