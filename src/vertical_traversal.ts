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
