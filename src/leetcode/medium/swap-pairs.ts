export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const swapPairs = (head: ListNode | null): ListNode | null => {
  let i = 0;
  let current = head;
  while (current && current.next) {
    const temp = current.val;
    current.val = current.next.val;
    current.next.val = temp;

    current = current.next.next;
  }

  return head;
};
