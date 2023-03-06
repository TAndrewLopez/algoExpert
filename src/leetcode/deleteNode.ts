import { ListNode, createSinglyLinkedList } from "../helper";

const headNode = createSinglyLinkedList([4, 5, 1, 9])
const nodeToDelete = headNode.next;

const deleteNode = (node: ListNode | null, head: ListNode | null): void => {
    //  STORE THE INITIAL VALUE OF THE NODE WE ARE LOOKING TO DELETE

    // IF THE CURRENT NODE IS NOT THAT VALUE WE SWITCH TO NEXT NODE

    // IF CURRENT NODE IS VALUE, WE TAKE PREVIOUS NODE AND UPDATE NEXT NODE TO NEXT NODE
    // SKIPPING CURRENT NODE
    // const nodeToDeleteValue = node?.value;
    // let previous = node?.next

    const nodeToDeleteValue = node?.value;
    let prev;

    while (node && nodeToDeleteValue !== node.value) {

        node = node.next
    }
    console.log(node, prev)
}


console.log(deleteNode(nodeToDelete, headNode))