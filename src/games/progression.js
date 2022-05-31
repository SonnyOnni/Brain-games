import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'What number is missing in the progression?';

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
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const minProgressionStep = 1;
  const maxProgressionStep = 10;
  const baseNumber = generateRandomNumber(0, 100);
  const progressionStep = generateRandomNumber(minProgressionStep, maxProgressionStep);
  const progressionLength = generateRandomNumber(minProgressionLength, maxProgressionLength);
  const hiddenNumberPosition = generateRandomNumber(0, progressionLength - 1);
  const question = `Question: ${getProgressionString(baseNumber, progressionStep, progressionLength, hiddenNumberPosition)[0]}`;
  // eslint-disable-next-line max-len
  const correctAnswer = getProgressionString(baseNumber, progressionStep, progressionLength, hiddenNumberPosition)[1];
  return [question, correctAnswer];
};

const playProgression = () => {
  playGame(playRound, gameRules);
};

export default playProgression;
