"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const isPalindrome = (head) => {
    const values = [];
    while (head) {
        values.push(head.value);
        head = head.next;
    }
    let p1 = 0;
    let p2 = values.length - 1;
    while (p1 < values.length && p2 > -1) {
        if (values[p1] !== values[p2])
            return false;
        p1++;
        p2--;
    }
    return true;
};
console.log(isPalindrome((0, helper_1.createSinglyLinkedList)([1, 2, 2, 1])));
console.log(isPalindrome((0, helper_1.createSinglyLinkedList)([1, 2])));
