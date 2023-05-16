class TreeNode<data> {
    value: data;
    left?: TreeNode<data>;
    right?: TreeNode<data>;

    constructor(data: data){
        this.value =  data;
    }

}

const myNode: TreeNode<number> = new TreeNode(5);

console.log(myNode.value)