import { ListNode, createSinglyLinkedList } from "../../helper"

const testLinkedList = createSinglyLinkedList([1, 1, 3, 4, 4, 4, 5, 6, 6])

const removeDuplicatesFromLinkedList = (head: ListNode | null): ListNode | null => {
    // CHECK TO SEE IF CURRENT NODE IS THE SAME AS THE NEXT NODE
    // IF IT IS, THE NEXT NODE SHOULD EQUAL NEXTNODE.NEXT, AND CHECK AGAIN
    const startHead = head;

    while (head) {
        if (head.value === head.next?.value) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return startHead
}

console.log(
    removeDuplicatesFromLinkedList(testLinkedList)
)