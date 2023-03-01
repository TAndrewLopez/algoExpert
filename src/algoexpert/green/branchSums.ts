import { BinaryTree } from "../../helper"

const branchSum = (root: BinaryTree): number[] => {
    // LEFT MOST TO RIGHT MOST
    // VISIT EACH LEFT NODE UNTIL WE REACH LEFT = NULL 
    // SUM UP ALL NODES AND PUSH RESULT INTO LIST

    return []
}


const rootNode = new BinaryTree(1)
rootNode.left = new BinaryTree(2)
rootNode.left.left = new BinaryTree(4)
rootNode.left.left.left = new BinaryTree(8)
rootNode.left.left.right = new BinaryTree(9)
rootNode.left.right = new BinaryTree(5)
rootNode.left.right.left = new BinaryTree(10)
rootNode.right = new BinaryTree(3)
rootNode.right.left = new BinaryTree(6)
rootNode.right.right = new BinaryTree(7)

console.log(branchSum(rootNode))