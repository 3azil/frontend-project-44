import readlineSync from "readline-sync";

const Even = (num) => num % 2 === 0;

export const evGame = () => {
  console.log("Welcome to the Brain Games!");
  const usName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${usName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${question}`);
    const usAnswer = readlineSync.question('Your answer: ');

    const corrAnswer = Even(question) ? 'yes' : 'no';
    if (usAnswer === corrAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
      console.log(`Let's try again, ${usName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${usName}!`);
};

