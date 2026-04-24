import { runGame } from '../index.js';

const getRandomNumber = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperation();
  
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => runGame(gameDescription, getGameData);