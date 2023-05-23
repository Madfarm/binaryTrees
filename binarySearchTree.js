var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        var pointer = this.root;
        while (pointer) {
            if (data == pointer.value)
                return;
            if (data < pointer.value) {
                if (pointer.left == null) {
                    pointer.left = newNode;
                    return;
                }
                pointer = pointer.left;
            }
            else {
                if (pointer.right == null) {
                    pointer.right = newNode;
                    return;
                }
                pointer = pointer.right;
            }
        }
    };
    return BinaryTree;
}());
var myTree = new BinaryTree();
myTree.root = new TreeNode(5);
myTree.insert(2);
myTree.insert(3);
myTree.insert(7);
myTree.insert(6);
console.log(myTree);
