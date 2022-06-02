import readlineSync from 'readline-sync';

const playGame = (playRound, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  const gameRounds = 3;

  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, answer] = playRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    if (i === gameRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
