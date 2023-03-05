import { BinaryTree } from "../helper";

const invertTree = (root: BinaryTree | null): BinaryTree | null => {
    const stack = [root];

    // WHILE THERE ARE ITEMS IN THE STACK
    // CHECK FOR LEFT AND RIGHT NODES, SWAP THEIR POSITIONS AND PUSH THEM TO THE STACK

    while (stack.length) {
        const currentNode = stack.pop();
        if (currentNode) {
            const newLeftNode = currentNode.right
            const newRightNode = currentNode.left
            currentNode.left = newLeftNode;
            currentNode.right = newRightNode

            if (newLeftNode) stack.push(newLeftNode)
            if (newRightNode) stack.push(newRightNode)
        }

    }

    return root;
}

