 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let arr = []
    function traverse(node) {
        if (node == null) return
        traverse(node.left)
        traverse(node.right)
    }
        arr.push(node.val)
    traverse(root)
    return arr
};
[
