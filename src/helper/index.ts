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
    constructor(value: number) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}