class BSTreeNode {
    value: number;
    left: BSTreeNode | null;
    right: BSTreeNode | null;

    constructor(data: number){
        this.value =  data;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {
    root: BSTreeNode | null;

    constructor(){
        this.root = null;
    }

    insert(data: number): void{
        let newNode: BSTreeNode = new BSTreeNode(data);
        
        if (!this.root){
            this.root = newNode;
            return
        }

        let pointer: null | BSTreeNode = this.root;

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


const myTree: BinarySearchTree = new BinarySearchTree()
myTree.root = new BSTreeNode(5);
myTree.insert(2);
myTree.insert(3);
myTree.insert(7);
myTree.insert(6);



console.log(myTree)

