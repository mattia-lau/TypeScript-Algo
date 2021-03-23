import { shuffle } from '../../../src/leetcode';

describe('1470. Shuffle the Array', () => {
  it('[2,5,1,3,4,7] 3', () => {
    const result = shuffle([2, 5, 1, 3, 4, 7], 3);
    expect(result).toEqual([2, 3, 5, 4, 1, 7]);
  });

  it('[1,2,3,4,4,3,2,1] 4', () => {
    const result = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
    expect(result).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });
});
