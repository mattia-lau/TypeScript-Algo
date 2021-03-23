export const kidsWithCandies = (
  candies: number[],
  extraCandies: number,
): boolean[] => {
  const res = new Array<boolean>(candies.length);

  let max = 0;
  for (const num of candies) {
    max = Math.max(max, num);
  }

  for (let i = 0; i < candies.length / 2; i++) {
    res[i] = candies[i] + extraCandies >= max;
    res[candies.length - i - 1] =
      candies[candies.length - i - 1] + extraCandies >= max;
  }

  return res;
};
