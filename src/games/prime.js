import { runGame } from '../index.js';

const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверка, является ли число простым (предикат)
const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  
  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  
  return true;
};

const getGameData = () => {
  const randomNumber = getRandomNumber();
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(gameDescription, getGameData);