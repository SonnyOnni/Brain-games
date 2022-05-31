import playGame from '../index.js';
import generateRandomNumber from '../random-numbers.js';

const gameRules = 'What is the result of the expression?';

const getResult = (operand1, operand2, operation) => {
  switch (operation) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: return NaN;
  }
};

const playRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const mathOperators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * mathOperators.length);
  const randValue = mathOperators[rand];
  const question = `Question: ${firstNumber} ${randValue} ${secondNumber}`;
  const correctAnswer = getResult(firstNumber, secondNumber, randValue);
  return [question, correctAnswer];
};

const playCalc = () => {
  playGame(playRound, gameRules);
};

export default playCalc;
