const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return gcd(b, a % b);
};

const generateRound = () => {
  const a = Math.floor(Math.random() * 50) + 1;
  const b = Math.floor(Math.random() * 50) + 1;
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return { question, correctAnswer };
};

export const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};