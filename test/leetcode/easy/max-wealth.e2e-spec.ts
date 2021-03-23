import { maximumWealth } from '../../../src/leetcode';

describe('1672. Richest Customer Wealth', () => {
  it('[[1,2,3],[3,2,1]] 6', () => {
    const result = maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ]);
    expect(result).toEqual(6);
  });

  it('[[1,5],[7,3],[3,5]] 10', () => {
    const result = maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ]);
    expect(result).toEqual(10);
  });
});
