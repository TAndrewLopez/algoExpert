import { ListNode, createSinglyLinkedList } from "../helper"

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

console.log(reverseList(createSinglyLinkedList([1, 2])))