/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let arr = []
    function traverse(node) {
        if (node == null) return
        arr.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return arr
};
[
