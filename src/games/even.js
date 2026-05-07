const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export const evenGame = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};