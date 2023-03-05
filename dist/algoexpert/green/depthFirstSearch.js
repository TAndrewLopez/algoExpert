"use strict";
class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addChild(name) {
        this.children.push(new TreeNode(name));
        return this;
    }
    depthFirstSearch(array) {
        array.push(this.name);
        let traverseChildren = this.children;
        while (traverseChildren.length) {
            const currChild = traverseChildren.shift();
            if (currChild) {
                array.push(currChild.name);
                traverseChildren = [...currChild.children, ...traverseChildren];
            }
        }
        return array;
    }
}
