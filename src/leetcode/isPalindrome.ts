import { ListNode, createSinglyLinkedList } from "../helper"

const isPalindrome = (head: ListNode | null): boolean => {
    const values: number[] = []

    while (head) {
        values.push(head.value)
        head = head.next
    }

    let p1 = 0;
    let p2 = values.length - 1;

    while (p1 < values.length && p2 > -1) {
        if (values[p1] !== values[p2]) return false
        p1++
        p2--
    }
    return true
}

console.log(isPalindrome(createSinglyLinkedList([1, 2, 2, 1]))) // => true
console.log(isPalindrome(createSinglyLinkedList([1, 2]))) // => false