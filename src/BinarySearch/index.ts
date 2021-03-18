export class BinarySearch {
  constructor(private readonly ary: number[]) {}

  search(value: number, l: number = 0, r: number = this.ary.length - 1) {
    const mid = Math.floor((l + r) / 2);
    if (l > r) return -1;
    if (this.ary[mid] === value) return mid;

    if (this.ary[mid] < value) {
      return this.search(value, mid + 1, r);
    } else {
      return this.search(value, l, mid - 1);
    }
  }
}

export const example = () => {
  const ary = [1, 5, 9, 20, 30, 40, 45];

  const bs = new BinarySearch(ary);
  console.log(bs.search(40));
};
