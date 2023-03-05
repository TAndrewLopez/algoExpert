"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invertTree = (root) => {
    const stack = [root];
    while (stack.length) {
        const currentNode = stack.pop();
        if (currentNode) {
            const newLeftNode = currentNode.right;
            const newRightNode = currentNode.left;
            currentNode.left = newLeftNode;
            currentNode.right = newRightNode;
            if (newLeftNode)
                stack.push(newLeftNode);
            if (newRightNode)
                stack.push(newRightNode);
        }
    }
    return root;
};
