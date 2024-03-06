import readlineSync from "readline-sync";

const runGame = (description, gameRound) => {
  console.log("Welcome to the Brain Games!");
  const usName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${usName}!`);
  console.log(description);

  for (let round = 0; round < 3; round += 1) {
    const [question, corrAnswer] = gameRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== corrAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`
      );
      console.log(`Let's try again, ${usName}!`);
      return;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${usName}!`);
};

export default runGame;
