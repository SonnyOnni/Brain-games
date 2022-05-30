import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateRandomNumber = () => Math.round(Math.random() * 100);
const generateRandomDecimalNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRandomFloat = (min, max) => Math.round(Math.random() * (max - min) + min);

const getProgressionString = (base, diff, count, spaceItem) => {
  let startNumber = base;
  const progressionArr = [];
  let lostNumber = startNumber;

  for (let i = 0; i < count; i += 1) {
    if (i !== spaceItem) {
      startNumber += diff;
      progressionArr.push(startNumber);
    } else if (i === spaceItem) {
      startNumber += diff;
      lostNumber = startNumber;
      progressionArr.push('..');
    } else {
      progressionArr[0] = '..';
    }
  }

  const progressionString = progressionArr.join(' ');

  return [progressionString, lostNumber];
};

const playRound = () => {
  const baseNumber = generateRandomNumber();
  const diffNumber = generateRandomDecimalNumber(1, 10);
  const countNumber = getRandomFloat(5, 10);
  const lostItem = getRandomFloat(0, countNumber - 1);
  const question = `Question: ${getProgressionString(baseNumber, diffNumber, countNumber, lostItem)[0]}`;
  const correctAnswer = getProgressionString(baseNumber, diffNumber, countNumber, lostItem)[1];
  return [question, correctAnswer];
};

const playProgression = () => {
  playGame(playRound, gameRules);
};

export default playProgression;
