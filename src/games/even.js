import { runGame } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(gameDescription, getGameData);