/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const gameRules = 'What is the result of the expression?';
const generateRandomNumber = () => Math.round(Math.random() * 100);
const getResult = (operand1, operand2, operation) => {
  switch (operation) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: return NaN;
  }
};
const playRound = () => {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const mathOperators = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * mathOperators.length);
  const randValue = mathOperators[rand];
  const answer = readlineSync.question(`Question: ${firstNumber} ${randValue} ${secondNumber} \nYour answer: `);
  const correctAnswer = getResult(firstNumber, secondNumber, randValue);

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  } console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
const playGame = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-undef
    const isCorrect = playRound();
    if (!isCorrect) {
      const gameOver = `Let's try again, ${userName}!`;
      return gameOver;
    }
  }
  const gameWinner = `Congratulations, ${userName}!`;
  // eslint-disable-next-line consistent-return
  return gameWinner;
};

console.log('Welcome to the Brain Games!');
console.log(playGame());
