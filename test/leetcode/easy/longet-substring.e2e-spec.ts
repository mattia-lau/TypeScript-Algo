import { lengthOfLongestSubstring } from '../../../src/leetcode';

describe('Longest Substring Without Repeating Characters', () => {
  it('abcabcbb 3', () => {
    const result = lengthOfLongestSubstring('abcabcbb');
    expect(result).toEqual(3);
  });

  it('bbbbb 1', () => {
    const result = lengthOfLongestSubstring('bbbbb');
    expect(result).toEqual(1);
  });
});
