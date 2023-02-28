import { ListNode, createLinkedList } from "../helper"

// ! HINTED

const reverseList = (head: ListNode | null): ListNode | null => {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev
}

console.log(reverseList(createLinkedList([1, 2])))