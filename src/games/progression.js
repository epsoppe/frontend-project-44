import { runGame } from '../index.js';

const getRandomNumber = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Генерация арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Получение данных для игры
const getGameData = () => {
  const progressionLength = getRandomNumber(5, 10); // Длина от 5 до 10
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  
  const progression = generateProgression(start, step, progressionLength);
  
  // Выбираем случайный индекс для скрытия
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  
  // Заменяем элемент на ".."
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => runGame(gameDescription, getGameData);