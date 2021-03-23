export const maximumWealth = (accounts: number[][]): number => {
  let max = 0;

  for (const account of accounts) {
    let sum = 0;
    for (const i of account) {
      sum += i;
    }
    max = Math.max(max, sum);
  }

  return max;
};
