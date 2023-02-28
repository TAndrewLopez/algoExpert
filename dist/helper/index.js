"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinkedList = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.value = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
const createLinkedList = (array) => {
    const nodeArray = array.map(num => new ListNode(num));
    for (let i = 0; i < nodeArray.length; i++) {
        const nextNode = nodeArray[i + 1] || null;
        nodeArray[i].next = nextNode;
    }
    return nodeArray[0];
};
exports.createLinkedList = createLinkedList;
