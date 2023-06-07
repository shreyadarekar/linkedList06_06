// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list

    // Your code here
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;

    // Write your hypothesis on the time complexity of this method here
    // O(1)
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    const newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
    return this;

    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  removeFromHead() {
    // Remove node at head
    // Your code here
    if (!this.head) {
      return;
    }
    const removeNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removeNode;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    // Your code here
    if (!this.length) return;

    let currNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.length--;

      return currNode;
    }
    let trailingNode = null;

    while (currNode.next) {
      trailingNode = currNode;
      currNode = currNode.next;
    }

    trailingNode.next = null;
    this.length--;

    return currNode;

    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return the value of head node
    if(!this.head) {
      return;
    }
    return this.head.value;
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    let currNode = this.head;
    while(currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
