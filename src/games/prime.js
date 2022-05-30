import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRandomNumber = () => Math.round(Math.random() * 100);

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
  const number = generateRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playPrime = () => {
  playGame(playRound, gameRules);
};

export default playPrime;
