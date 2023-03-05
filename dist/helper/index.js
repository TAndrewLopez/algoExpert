"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.createSinglyLinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.value = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
const createSinglyLinkedList = (array) => {
    const nodeArray = array.map(num => new ListNode(num));
    for (let i = 0; i < nodeArray.length; i++) {
        const nextNode = nodeArray[i + 1] || null;
        nodeArray[i].next = nextNode;
    }
    return nodeArray[0];
};
exports.createSinglyLinkedList = createSinglyLinkedList;
class BinaryTree {
    constructor(value, left, right) {
        this.value = (value === undefined ? 0 : value);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        ;
    }
}
exports.BinaryTree = BinaryTree;
