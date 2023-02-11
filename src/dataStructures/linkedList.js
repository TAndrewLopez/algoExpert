class Node {
  constructor(value) {
    this.nextNode = null;
    this.value = value;
  }
}

class singleLinkedList {
  constructor() {
    this.head = null;
  }
  head() {
    return this.head;
  }
  search(key) {
    let current = this.head;
    while (current) {
      if (current.value === key) {
        return current;
      }
      current = current.nextNode;
    }
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    //RETURNS THE NUMBER OF NODES IN THE LIST
    // TAKES O(n) TIME

    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  add(value) {
    // ADDS A NEW NODE CONTAINING A VALUE TO HEAD OF LIST
    // TAKES CONSTANT TIME - BEST CASE SCENARIO
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
}
const list = new singleLinkedList();
const nodes = [];

// console.log(list.search(2));
