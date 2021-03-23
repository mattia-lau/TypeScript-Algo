import { reverse } from '../../../src/leetcode/easy';

describe('Reverse Integer', () => {
  it('123 321', () => {
    const result = reverse(123);
    expect(result).toEqual(321);
  });

  it('23456 65432', () => {
    const result = reverse(23456);
    expect(result).toEqual(65432);
  });
});
