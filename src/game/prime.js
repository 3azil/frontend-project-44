import runGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGame = () => runGame(gameDescription, getGameRound);
export default primeGame;
