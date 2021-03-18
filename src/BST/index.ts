export class BSTNode<T> {
  data: T;
  left: BSTNode<T>;
  right: BSTNode<T>;
  parent: BSTNode<T> | null;
}

export class BST<T> {
  private root: BSTNode<T> = null;

  constructor(
    private readonly compareFn: (a: T, b: T) => boolean,
    private readonly equalFn: (a: T, b: T) => boolean,
  ) {}

  insert(data: T) {
    const temp = new BSTNode<T>();
    let current: BSTNode<T>;
    let parent: BSTNode<T>;

    temp.data = data;
    temp.left = null;
    temp.right = null;

    if (this.root === null) {
      this.root = temp;
    } else {
      current = this.root;
      parent = null;

      while (1) {
        parent = current;
        temp.parent = parent;
        // Go to left of the tree
        if (this.compareFn(temp.data, parent.data)) {
          current = current.left;

          if (current === null) {
            parent.left = temp;
            return;
          }
        } else {
          current = current.right;

          if (current === null) {
            parent.right = temp;
            return;
          }
        }
      }
    }
  }

  search(data: T, node: BSTNode<T> = this.root): BSTNode<T> | null {
    let current = node;

    while (!this.equalFn(current.data, data)) {
      if (this.compareFn(data, current.data)) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) break;
    }

    return current;
  }

  private getMinimumKey(node: BSTNode<T>) {
    let current = node;

    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  delete(data: T, node: BSTNode<T> = this.root) {
    let current = this.search(data, node);
    if (current === null) return;

    // Case 1: node to be deleted has no children
    if (current.left === null && current.right === null) {
      if (this.equalFn(current.parent.data, data)) {
        current.parent.left = null;
      } else {
        current.parent.right = null;
      }
    }
    // Case 2: node to be deleted has two children
    else if (current.left && current.right) {
      const successor = this.getMinimumKey(node.right);
      const data = successor.data;
      this.delete(data, successor);
      current.data = data;
    }
    // Case 3: node has only one child
    else {
      const child = current.left || current.right;
      if (current !== node) {
        if (child === current.parent.left) {
          current.parent.left = child;
        } else {
          current.parent.right = child;
        }
      } else {
        node = child;
      }
    }
  }

  isBalanced(
    node: BSTNode<T> = this.root,
    depth = -1,
  ): { isBalanced: boolean; depth: number } {
    if (node === null) return { isBalanced: true, depth: -1 };

    const l = this.isBalanced(node.left, depth + 1);
    const r = this.isBalanced(node.right, depth + 1);

    const isBalanced = Math.abs(l.depth - r.depth) <= 1;
    const sub = l.isBalanced && r.isBalanced;
    const height = Math.max(l.depth, r.depth) + 1;

    return { isBalanced: isBalanced && sub, depth: height };
  }
}
