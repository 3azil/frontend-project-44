import runGame from '../index.js';

const genProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step);

const hideElement = (progression, index) => {
  const progressionCopy = [...progression];
  progressionCopy[index] = '..';
  return progressionCopy.join(' ');
};

const getGameRound = () => {
  const start = Math.floor(Math.random() * 5) + 1;
  const step = Math.floor(Math.random() * 5) + 1;
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = genProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  const question = hideElement(progression, hiddenIndex);

  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';
const progressionGame = () => runGame(gameDescription, getGameRound);
export default progressionGame;
