/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import playGame from '../src/index.js';

const gameRules = 'What number is missing in the progression?';

const generateRandomNumber = () => Math.round(Math.random() * 100);
const generateRandomDecimalNumber = () => Math.round(Math.random() * 10);
const getRandomFloat = (min, max) => Math.round(Math.random() * (max - min) + min);

const getProgressionString = (base, diff, count, spaceItem) => {
  let startNumber = base;
  const progressionArr = [startNumber];
  let lostNumber;

  for (let i = 1; i < count; i += 1) {
    if (i !== spaceItem) {
      startNumber += diff;
      progressionArr.push(startNumber);
    } else {
      startNumber += diff;
      lostNumber = startNumber;
      progressionArr.push('..');
    }
  }

  const progressionString = progressionArr.join(' ');

  return [progressionString, lostNumber];
};

const playRound = () => {
  const baseNumber = generateRandomNumber();
  const diffNumber = generateRandomDecimalNumber();
  const countNumber = getRandomFloat(5, 10);
  const lostItem = getRandomFloat(0, countNumber);
  const question = `Question: ${getProgressionString(baseNumber, diffNumber, countNumber, lostItem)[0]}`;
  const correctAnswer = getProgressionString(baseNumber, diffNumber, countNumber, lostItem)[1];
  return [question, correctAnswer];
};

const playProgression = () => {
  playGame(playRound, gameRules);
};

playProgression();
