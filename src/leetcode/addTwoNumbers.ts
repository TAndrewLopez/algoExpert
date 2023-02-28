import { ListNode } from "../helper";

// ! USE HINTS

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let remainder = 0;
    let current = new ListNode(-1)
    let result = current;

    while (l1 !== null || l2 !== null || remainder > 0) {
        let sum = remainder;
        if (l1) {
            sum += l1.value
            l1 = l1.next
        }
        if (l2) {
            sum += l2.value
            l2 = l2.next
        }
        remainder = Math.floor(sum / 10);
        current.next = new ListNode(Math.floor(sum % 10))
        current = current.next
    }
    return result.next
}



