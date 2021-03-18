import { BinarySearch } from '../src/BinarySearch';

describe('Binary Search', () => {
  const bs = new BinarySearch([1, 5, 9, 20, 30, 40, 45]);

  it('Search First Value', () => {
    expect(bs.search(1)).toEqual(0);
  });

  it('Search Random Value', () => {
    expect(bs.search(9)).toEqual(2);
  });

  it('Search Last Value', () => {
    expect(bs.search(45)).toEqual(6);
  });

  it('Search Not existing value', () => {
    expect(bs.search(111)).toEqual(-1);
  });
});
