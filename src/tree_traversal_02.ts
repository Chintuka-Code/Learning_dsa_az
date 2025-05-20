export class Node {
  left: Node | null = null;
  right: Node | null = null;
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

function inOrder(rootNode: Node) {
  const stack: Node[] = [];
  let node: Node | null = rootNode;

  while (stack.length > 0 || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const lastNode = stack.pop() as Node;

      if (lastNode) {
        console.log(lastNode.value);
        node = lastNode.right;
      }
    }
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

preOrder(root); // Output: 1 2 4 5 3
console.log("In Order Traversal:");
inOrder(root); // Output: 4 2 5 1 3
