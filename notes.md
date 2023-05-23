# Binary Trees
a collection of nodes and edges(connections between nodes)

## Unique Characteristics
- Each tree has a start node called the root node
- Each node in a tree can only have one parent node - which means there is only exactly one path from each node back to the root
- Nodes with no children are called leaves
- The length of the longest path from a leaf to the root is the tree's height

## Examples in the real world
- File structures
- Calculator's order of operations
- Top 8 bracket
- Reddit threads

## The Nitty Gritty
- each Node has at most two branches(except the root)
- each non-root node will have 3 properties:
    1. value - the data
    2. left - node with lesser value, nullable
    3. right - node with greater value, nullable


## Depth-First Search
Start at root and go to each leaf
recursive
better if your value is towards the bottom and on very wide trees


3 kinds based on the order of nodes visited
preorder - node       => node.left  => node.right
inorder - node.left   => node       => node.right
postorder - node.left => node.right => node

can be implemented with a stack
O(N)


## Height
max length of a path in the tree


## Breadth-First Search
Start at root and check all children
iterative
better if your value is towards the top and your tree is very deep
find the shortest path to another node


calculate the height of the whole tree
then iterate from 1 to that height, printing the nodes at that height


can be implemented with a queue
O(N)

