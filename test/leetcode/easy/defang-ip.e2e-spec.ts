import { defangIPaddr } from '../../../src/leetcode';

describe('1108. Defanging an IP Address', () => {
  it('1.1.1.1 1[.]1[.]1[.]1', () => {
    const result = defangIPaddr('1.1.1.1');
    expect(result).toEqual('1[.]1[.]1[.]1');
  });
});
