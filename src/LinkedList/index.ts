export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> = null;
  prev: LinkedListNode<T> = null;
}

export class SingleLinkedList<T> {
  head: LinkedListNode<T> = null;

  constructor(array: T[]) {
    for (const row of array) {
      this.push(row);
    }
  }

  push(data: T) {
    const node = new LinkedListNode<T>();
    let last = this.head;
    node.data = data;

    if (this.head == null) {
      this.head = node;
      return;
    }

    while (last.next !== null) {
      last = last.next;
    }
    last.next = node;
    node.prev = last;
  }

  wiseSwap() {
    let current = this.head;
    while (current && current.next) {
      const temp = current.data;
      current.data = current.next.data;
      current.next.data = temp;
      current = current.next.next;
    }
  }

  reverseList(head: LinkedListNode<T> = this.head): LinkedListNode<T> | null {
    if (!head || !head.next) return head;

    const rest = this.reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return rest;
  }

  print(head: LinkedListNode<T> = this.head) {
    let res = '';
    let current = head;

    while (current) {
      res += JSON.stringify(current.data);
      current = current.next;
    }
  }
}

export class DoublyLinkedList<T> {
  head: LinkedListNode<T> = null;

  constructor(private readonly equalFn: (a: T, b: T) => boolean) {}

  print() {
    let res = '';
    let current = this.head;

    while (current) {
      res += JSON.stringify(current.data);
      current = current.next;
    }
  }

  /**
   * @param data
   * @description Insert new node on the front of the list
   */
  push(data: T) {
    const node = new LinkedListNode<T>();
    node.data = data;
    node.next = this.head;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;
  }

  /**
   * @param data
   * @description Insert new node at the end of the list
   */
  append(data: T) {
    const node = new LinkedListNode<T>();
    let last = this.head;
    node.data = data;

    if (this.head == null) {
      this.head = node;
      return;
    }

    while (last.next !== null) {
      last = last.next;
    }
    last.next = node;
    node.prev = last;
  }

  /**
   * @param data Target Node
   * @param node Current Node
   * @description Recursive to find node
   */
  search(
    data: T,
    node: LinkedListNode<T> = this.head,
  ): LinkedListNode<T> | null {
    if (node === null) return null;
    if (this.equalFn(node.data, data)) return node;

    return this.search(data, node.next);
  }

  /**
   * @param data Target Node
   * @description Delete Target Node
   */
  delete(data: T): LinkedListNode<T> | null {
    let targetNode = this.search(data);
    if (targetNode) {
      const prev = targetNode.prev;
      prev.next = targetNode.next;

      return targetNode;
    }

    return null;
  }
}

export class DoublyCircularLinkedList<T> {
  head: LinkedListNode<T> = null;
  private size = 0;

  constructor(private readonly equalFn: (a: T, b: T) => boolean) {}

  print() {
    const start = this.head;

    let res = JSON.stringify(this.head.data);
    let temp = this.head.next;

    while (temp) {
      res += JSON.stringify(temp.data);
      temp = temp.next;

      if (temp === start) break;
    }
    console.log(res);
    return res;
  }

  isLastNode(node: LinkedListNode<T>) {
    return node === this.head.prev;
  }

  search(
    target: T,
    node: LinkedListNode<T> = this.head.next,
  ): LinkedListNode<T> | null {
    if (node === this.head) {
      if (this.equalFn(target, node.data)) return node;
      return null;
    }
    if (this.equalFn(target, node.data)) return node;
    return this.search(target, node.next);
  }

  insertAfter(data: T, target?: T) {
    const node = new LinkedListNode<T>();
    node.data = data;
    this.size += 1;

    if (this.head === null) {
      this.head = node;
      this.head.next = node;
      this.head.prev = node;
      return this;
    }

    if (target) {
      const targetNode = this.search(target);
      if (targetNode) {
        const isLast = this.isLastNode(targetNode);
        if (isLast) {
          const last = this.head.prev;
          node.next = this.head;
          this.head.prev = node;

          node.prev = last;
          last.next = node;
          targetNode.next = node;
        } else {
          const { next } = targetNode;
          node.next = next;
          node.prev = targetNode;
          targetNode.next = node;
        }
      }
    } else {
      const last = this.head.prev;

      last.next = node;
      node.prev = last;
      node.next = this.head;
      this.head.prev = node;
    }

    return this;
  }

  delete(target: T) {
    const node = this.search(target);
    if (!node) return false;
    this.size -= 1;

    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;

    return true;
  }

  get length() {
    return this.size;
  }
}
