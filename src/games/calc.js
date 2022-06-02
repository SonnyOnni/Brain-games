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
  const randomIndexOperator = generateRandomNumber(0, 2);
  const operator = mathOperators[randomIndexOperator];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = String(getResult(firstNumber, secondNumber, operator));
  return [question, expectedAnswer];
};

const playCalc = () => {
  playGame(playRound, gameRules);
};

export default playCalc;
