import { runGame } from '../index.js';

const findGCD = (a, b) => {
  let first = Math.abs(a);
  let second = Math.abs(b);
  
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  
  return first;
};

const getRandomNumber = (min = 1, max = 50) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  
  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => runGame(gameDescription, getGameData);