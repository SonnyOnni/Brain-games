import readlineSync from 'readline-sync';

const playGame = (playRound, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  const gameRounds = 3;

  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = playRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === gameRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
