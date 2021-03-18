export class DFS {
  private adj: number[][];

  constructor(private readonly numberOfVertices: number) {
    this.adj = new Array(numberOfVertices);
    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = [];
    }
  }

  private recursive(root: number, visited: boolean[], res: number[] = []) {
    visited[root] = true;
    res.push(root);

    for (let i = 0; i < this.adj[root].length; i++) {
      const v = this.adj[root][i];
      if (!visited[v]) {
        this.recursive(v, visited, res);
      }
    }

    return res;
  }

  traverse(root: number) {
    const visited = new Array(this.numberOfVertices).fill(false);

    return this.recursive(root, visited);
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
  }
}
