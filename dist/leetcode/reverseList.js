"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
console.log(reverseList((0, helper_1.createSinglyLinkedList)([1, 2])));
