// LEET CODE: VALIDATE BINARY SEARCH TREE (BST)

/*
NOTES:
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
LEETCODE PROBLEM EXAMPLES:
Example 1:

Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/



// -------------------------------------------------------------------------------------------------------------


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class Node {
    constructor(value) {
        // stores data and points to a left and right child node.
        this.value;
        this.left = null;
        this.right = null;
    }
};


class BinarySearchTree {
    constructor() {
        // the root is the top node, all searches start here.
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        // first value inserted becomes the root node.
        if(!this.root){
            this.root = newNode
        } else {
            let current = this.root;
            // if the value is already in the tree, don't add again.
            while(true){
                if (value === current.value){
                    return undefined;
                }
                // if the value added is less than the current node being examined...
                if (value < current.value){
                    // and the current node has no left child, add this as the left child.
                    if (current.left == null){
                        current.left = newNode;
                        return this;
                    }
                    // if the current node has a left child, examine that node.
                    current = current.left;
                } else {
                    // if the value is greater than the current node being examined...
                    // and the current node has no right child, add this as the right child.
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    }
                    // if the current node HAS a right child, examine that node.
                    current = current.right;
                }
            }
        }
    }
}


// var isValidBST = function(root) {
//     // build the tree
//     // traverse the tree and check rules
//         // if rules are broken = return false. else return true.

// };


module.exports = BinarySearchTree.js