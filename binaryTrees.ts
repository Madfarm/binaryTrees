class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number){
        this.value =  data;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {
    root: TreeNode | null;

    constructor(){
        this.root = null;
    }

    insert(data: number): void{
        let newNode: TreeNode = new TreeNode(data);
        
        if (!this.root){
            this.root = newNode;
            return
        }

        let pointer: null | TreeNode = this.root;

        while(pointer){
            if (data == pointer.value) return

            if (data < pointer.value){
                if (pointer.left == null){
                    pointer.left =  newNode;
                    return
                }

                pointer = pointer.left
            } else {
                if (pointer.right == null){
                    pointer.right = newNode
                    return
                }

                pointer = pointer.right
            }
        }

    }
}


const myTree: BinaryTree = new BinaryTree()
myTree.root = new TreeNode(5);
myTree.insert(2);
myTree.insert(3);
myTree.insert(7);
myTree.insert(6);



console.log(myTree)

