class ListNode {
    value: number;
    prev: ListNode | null;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    setHead(node: ListNode) {
        if (this.head) {
            const nextNode = this.head;
            node.next = nextNode;
            nextNode.prev = node;
            this.head = node;
        } else {
            // WHAT IF THERE IS A LIST ATTACHED TO HEAD?
            this.head = node;
            this.tail = node;
        }
    }
    setTail(node: ListNode) {
        if (this.tail) {
            const prevNode = this.tail;
            node.prev = prevNode;
            prevNode.next = node;
            this.tail = node;
        }
    }
    insertBefore(node: ListNode, nodeToInsert: ListNode) {
        const prev = node.prev;
    }
    insertAfter(node: ListNode, nodeToInsert: ListNode) { }
    insertAtPosition(position: number, nodeToInsert: ListNode) { }
    removeNodeWithValue(value: number) { }
    remove(node: ListNode) { }
    containsNodeWithValue(value: number) { }
}

const list = new DoublyLinkedList()
const fatherNode = new ListNode(0)
const childNode1 = new ListNode(1)
const childNode2 = new ListNode(2)
const childNode3 = new ListNode(3)
const childNode4 = new ListNode(4)
const childNode5 = new ListNode(5)
list.setHead(fatherNode)
console.log(list)