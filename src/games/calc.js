const operations = [
  { sign: '+', calc: (a, b) => a + b },
  { sign: '-', calc: (a, b) => a - b },
  { sign: '*', calc: (a, b) => a * b },
];

const generateRound = () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const { sign, calc } = operations[Math.floor(Math.random() * operations.length)];
  const question = `${a} ${sign} ${b}`;
  const correctAnswer = String(calc(a, b));
  return { question, correctAnswer };
};

export const calcGame = {
  description: 'What is the result of the expression?',
  generateRound,
};