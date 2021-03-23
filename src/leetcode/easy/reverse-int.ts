export const reverse = (x: number): number => {
  return recursion(x, 0);
};

const recursion = (x: number, sum: number) => {
  if (x === 0) return sum;

  let rem = x % 10;
  sum = sum * 10 + rem;

  return recursion(Math.floor(x / 10), sum);
};
