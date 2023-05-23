class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor(){
        this.root = null;
    }

    insert(data: number){
        const newNode: TreeNode = new TreeNode(data);

        if(!this.root) this.root = newNode;
    }


    changeToSumTree(node: TreeNode | null): number{
        /**
         * First, we take the node and recursively traverse the tree(post order)
         * 
         * return the values from each then add set them equal to the current
         * 
         * 
         */

        if (!node) return 0

        let temp: number = node.value;
        node.value = this.changeToSumTree(node.left) + this.changeToSumTree(node.right);

        return temp + node.value;
    }
}


const thisTree: BinaryTree = new BinaryTree();
thisTree.insert(12);


console.log(thisTree.root);