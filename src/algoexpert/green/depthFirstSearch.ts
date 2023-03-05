class TreeNode {
    name: string;
    children: TreeNode[];
    constructor(name: string) {
        this.name = name;
        this.children = [];
    }
    addChild(name: string) {
        this.children.push(new TreeNode(name))
        return this;
    }
    depthFirstSearch(array: string[]): string[] {
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