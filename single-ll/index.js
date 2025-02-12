class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value, "->");
      current = current.next;
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return;
    this.tail = this.head;
    let prev = null;
    let current = this.head;
    let forward = null;

    while (current) {
      forward = current.next;
      current.next = prev;
      prev = current;
      current = forward;
    }
    this.head = prev;
  }

  // Reverse using recursion
  useRecursion(node = this.head, prev = null) {
    if (!node) {
      this.head = prev;
      return;
    }

    let forward = node.next;
    node.next = prev;

    this.useRecursion(forward, node);
  }
}

// Example usage
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);

list.reverse();
list.print();
