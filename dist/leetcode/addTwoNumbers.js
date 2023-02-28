"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const addTwoNumbers = (l1, l2) => {
    let remainder = 0;
    let current = new helper_1.ListNode(-1);
    let result = current;
    while (l1 !== null || l2 !== null || remainder > 0) {
        let sum = remainder;
        if (l1) {
            sum += l1.value;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.value;
            l2 = l2.next;
        }
        remainder = Math.floor(sum / 10);
        current.next = new helper_1.ListNode(Math.floor(sum % 10));
        current = current.next;
    }
    return result.next;
};
