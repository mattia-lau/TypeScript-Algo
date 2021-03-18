import { DoublyCircularLinkedList } from '../src/LinkedList';

interface MyData {
  value: number;
}

describe('Doubly Linked List', () => {
  let linkedList = new DoublyCircularLinkedList<MyData>(
    (a, b) => a.value === b.value,
  );

  it('Insert 1', () => {
    linkedList.insertAfter({ value: 1 });
    expect(linkedList.head.data.value).toEqual(1);
  });

  it('Insert 2', () => {
    linkedList.insertAfter({ value: 2 });
    expect(linkedList.head.next.data.value).toEqual(2);
  });

  it('Insert 3 After 1', () => {
    linkedList.insertAfter({ value: 3 }, { value: 1 });
    expect(linkedList.head.next.data.value).toEqual(3);
  });

  it('Print List', () => {
    expect(linkedList.print()).toEqual('{"value":1}{"value":3}{"value":2}');
  });

  it('Delete 2', () => {
    const res = linkedList.delete({ value: 2 });
    expect(res && linkedList.search({ value: 2 }) === null).toEqual(true);
  });
});
