import { BST } from '../src/BST';

interface MyData {
  a: number;
  b: number;
  distance: number;
}

describe('Binary Search Tree', () => {
  const bst = new BST<MyData>(
    (a, b) => {
      return a.distance < b.distance;
    },
    (a, b) => a.distance === b.distance,
  );

  beforeAll(() => {
    bst.insert({ a: 2, b: 1, distance: 3 });
    bst.insert({ a: 1, b: 1, distance: 2 });
    bst.insert({ a: 3, b: 1, distance: 1 });
    bst.insert({ a: 4, b: 1, distance: 4 });
    bst.insert({ a: 5, b: 1, distance: 5 });
  });

  it('Not Balance', () => {
    const { depth, isBalanced } = bst.isBalanced();
    expect(isBalanced).toEqual(true);
  });
});
