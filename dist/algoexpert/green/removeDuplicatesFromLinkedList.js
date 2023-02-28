"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper");
const testLinkedList = (0, helper_1.createLinkedList)([1, 1, 3, 4, 4, 4, 5, 6, 6]);
const removeDuplicatesFromLinkedList = (head) => {
    var _a;
    const startHead = head;
    while (head) {
        if (head.value === ((_a = head.next) === null || _a === void 0 ? void 0 : _a.value)) {
            head.next = head.next.next;
        }
        else {
            head = head.next;
        }
    }
    return startHead;
};
console.log(removeDuplicatesFromLinkedList(testLinkedList));
