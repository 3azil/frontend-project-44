import runGame from '../index.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
};

  const gameRound = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operation)); 
    return [question, correctAnswer];
  };

  const gameDescription = "What is the result of the expression?";
  export const calcGame = () => runGame(gameDescription, gameRound);
    

  

