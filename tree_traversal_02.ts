export class Node {
  left: Node;
  right: Node;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

function preOrder(rootNode: Node) {
  const stack: Node[] = [rootNode];

  while (stack.length > 0) {
    const lastNode = stack.pop() as Node;
    console.log(lastNode.value);
    if (lastNode.right) {
      stack.push(lastNode.right);
    }

    if (lastNode.left) {
      stack.push(lastNode.left);
    }
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

preOrder(root); // Output: 1 2 4 5 3
