"use strict";
class ListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    setHead(node) {
        if (this.head) {
            const nextNode = this.head;
            node.next = nextNode;
            nextNode.prev = node;
            this.head = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
    }
    setTail(node) {
        if (this.tail) {
            const prevNode = this.tail;
            node.prev = prevNode;
            prevNode.next = node;
            this.tail = node;
        }
    }
    insertBefore(node, nodeToInsert) {
        const prev = node.prev;
    }
    insertAfter(node, nodeToInsert) { }
    insertAtPosition(position, nodeToInsert) { }
    removeNodeWithValue(value) { }
    remove(node) { }
    containsNodeWithValue(value) { }
}
const list = new DoublyLinkedList();
const fatherNode = new ListNode(0);
const childNode1 = new ListNode(1);
const childNode2 = new ListNode(2);
const childNode3 = new ListNode(3);
const childNode4 = new ListNode(4);
const childNode5 = new ListNode(5);
list.setHead(fatherNode);
console.log(list);
