import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divider = 2;
  while (divider < num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const playRound = () => {
  const number = generateRandomNumber(0, 100);
  const question = number;
  const expectedAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const playPrime = () => {
  playGame(playRound, gameRules);
};

export default playPrime;
