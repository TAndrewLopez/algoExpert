export class ListNode {
    value: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.value = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const createSinglyLinkedList = (array: number[]): ListNode => {
    const nodeArray = array.map(num => new ListNode(num))
    for (let i = 0; i < nodeArray.length; i++) {
        const nextNode = nodeArray[i + 1] || null;
        nodeArray[i].next = nextNode
    }
    return nodeArray[0]
}

export class BinaryTree {
    value: number
    left: BinaryTree | null
    right: BinaryTree | null
    constructor(value?: number, left?: BinaryTree | null, right?: BinaryTree | null) {
        this.value = (value === undefined ? 0 : value)
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);;
    }
}