import { runningSum } from '../../../src/leetcode';

describe('1480. Running Sum of 1d Array', () => {
  it('[1,2,3,4] [1,3,6,10]', () => {
    const result = runningSum([1, 2, 3, 4]);
    expect(result).toEqual([1, 3, 6, 10]);
  });

  it('[1,1,1,1,1] [1,2,3,4,5]', () => {
    const result = runningSum([1, 1, 1, 1, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
