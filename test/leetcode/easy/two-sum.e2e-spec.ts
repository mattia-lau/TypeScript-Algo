import { twoSum } from '../../../src/leetcode';

describe('Two Sum', () => {
  it('[2,7,11,15] 9', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it('[2] 9', () => {
    const result = twoSum([2], 9);
    expect(result).toEqual([]);
  });
});
