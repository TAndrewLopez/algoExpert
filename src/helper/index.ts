export class ListNode {
    value: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.value = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const createLinkedList = (array: number[]): ListNode => {
    const nodeArray = array.map(num => new ListNode(num))
    for (let i = 0; i < nodeArray.length; i++) {
        const nextNode = nodeArray[i + 1] || null;
        nodeArray[i].next = nextNode
    }
    return nodeArray[0]
}