/* eslint-disable max-len */
import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'What number is missing in the progression?';

const getProgressionString = (base, diff, count) => {
  let startNumber = base;
  const progressionArr = [];
  let lostNumber = startNumber;
  const spaceItem = generateRandomNumber(0, count - 1);

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
  const baseNumber = generateRandomNumber(0, 100);

  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const progressionLength = generateRandomNumber(minProgressionLength, maxProgressionLength);

  const minProgressionStep = 1;
  const maxProgressionStep = 10;
  const progressionStep = generateRandomNumber(minProgressionStep, maxProgressionStep);

  const progresiionString = getProgressionString(baseNumber, progressionStep, progressionLength);

  const question = progresiionString[0];
  const expectedAnswer = String(progresiionString[1]);
  return [question, expectedAnswer];
};

const playProgression = () => {
  playGame(playRound, gameRules);
};

export default playProgression;
