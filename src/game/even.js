import runGame from "../index.js";

const isEven = (number) => number % 2 === 0;

const getGameRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [String(question), correctAnswer];
};

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';
export const evGame = () => runGame(gameDescription, getGameRound);
