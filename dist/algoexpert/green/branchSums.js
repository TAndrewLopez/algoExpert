"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../helper");
const branchSum = (root) => {
    return [];
};
const rootNode = new helper_1.BinaryTree(1);
rootNode.left = new helper_1.BinaryTree(2);
rootNode.left.left = new helper_1.BinaryTree(4);
rootNode.left.left.left = new helper_1.BinaryTree(8);
rootNode.left.left.right = new helper_1.BinaryTree(9);
rootNode.left.right = new helper_1.BinaryTree(5);
rootNode.left.right.left = new helper_1.BinaryTree(10);
rootNode.right = new helper_1.BinaryTree(3);
rootNode.right.left = new helper_1.BinaryTree(6);
rootNode.right.right = new helper_1.BinaryTree(7);
console.log(branchSum(rootNode));
