"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const headNode = (0, helper_1.createSinglyLinkedList)([4, 5, 1, 9]);
const nodeToDelete = headNode.next;
const deleteNode = (node, head) => {
    const nodeToDeleteValue = node === null || node === void 0 ? void 0 : node.value;
    let prev;
    while (node && nodeToDeleteValue !== node.value) {
        node = node.next;
    }
    console.log(node, prev);
};
console.log(deleteNode(nodeToDelete, headNode));
