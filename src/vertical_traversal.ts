export class Node {
  left: Node | null = null;
  right: Node | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

function verticalTraversal(rootNode: Node | null): number[][] {
  if (rootNode == null) return [];

  const map: Map<number, number[]> = new Map();
  const queue: [Node, number][] = [[rootNode, 0]];
  let min = 0;
  let max = 0;

  /**
  Here in the map we are creating an array like this
  [
   0: [1, 2, 3],
  -1: [4, 5],
  -2: [6, 7],
   1: [8, 9],
   2: [10, 11]
  ]
   key is the vertical level of the tree and value is the actual value of the node.
   HashMap is used to store the values of the nodes at each vertical level. Basically to group the nodes.
  */

  while (queue.length > 0) {
    const [currentNode, column] = queue.shift()!;
    if (!map.has(column)) {
      map.set(column, []);
    }
    map.get(column)!.push(currentNode.value);
    if (currentNode.left) {
      queue.push([currentNode.left, column - 1]);
      min = Math.min(min, column - 1);
    }
    if (currentNode.right) {
      queue.push([currentNode.right, column + 1]);
      max = Math.max(max, column + 1);
    }
  }
  let result: number[][] = [];
  for (let i = min; i <= max; i++) {
    if (map.has(i)) {
      result.push(map.get(i)!);
    }
  }

  result = result.map((arr) => arr.sort((a, b) => a - b));
  return result;
}

/**
We can also use same approach to do get top view of the tree.
Top view of a binary tree is the set of nodes visible when the tree is viewed from the top.
The nodes in the top view are the leftmost and rightmost nodes at each vertical level. or First node at each vertical level.
*/
