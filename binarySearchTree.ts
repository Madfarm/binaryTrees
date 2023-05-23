class BSTreeNode {
    value: number;
    left: BSTreeNode | null;
    right: BSTreeNode | null;

    constructor(data: number) {
        this.value = data;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {
    root: BSTreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(data: number): void {
        let newNode: BSTreeNode = new BSTreeNode(data);

        if (!this.root) {
            this.root = newNode;
            return
        }

        let pointer: null | BSTreeNode = this.root;

        while (pointer) {
            if (data == pointer.value) return

            if (data < pointer.value) {
                if (pointer.left == null) {
                    pointer.left = newNode;
                    return
                }

                pointer = pointer.left
            } else {
                if (pointer.right == null) {
                    pointer.right = newNode
                    return
                }

                pointer = pointer.right
            }
        }
    }

    printBFS(): void {
        let treeHeight: number = this.height(this.root)
        for (let i = 1; i <= treeHeight; i++) {
            this.currentLevelPrint(this.root, i);
        }
    }

    height(node: BSTreeNode | null): number {
        if (node == null) return 0;


        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);



        if (leftHeight > rightHeight) return (leftHeight + 1)
        else return (rightHeight + 1)

    }


    currentLevelPrint(node: BSTreeNode | null, level: number): void {
        if (node == null) return;

        if (level == 1) console.log(node.value + " ");

        else if (level > 1) {
            this.currentLevelPrint(node.left, level - 1);
            this.currentLevelPrint(node.right, level - 1);
        }
    }
}


const myTree: BinarySearchTree = new BinarySearchTree()
myTree.root = new BSTreeNode(5);
myTree.insert(2);
myTree.insert(3);
myTree.insert(7);
myTree.insert(6);


myTree.printBFS();


// console.log(myTree)

