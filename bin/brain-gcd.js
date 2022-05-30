/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import playGame from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateRandomNumber = () => Math.round(Math.random() * 100);

const getTheLargestDivider = (firstNumber, secondNumber) => {
  if (firstNumber === 1 || secondNumber === 1) {
    return 1;
  }

  let divider;
  if (secondNumber > firstNumber) {
    divider = firstNumber;
  } else {
    divider = secondNumber;
  }

  while (divider > 0) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      return divider;
    }
    divider -= 1;
  }
};

const playRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = getTheLargestDivider(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const playGcd = () => {
  playGame(playRound, gameRules);
};

playGcd();
