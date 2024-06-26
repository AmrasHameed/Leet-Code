 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
};
/**
 */
 * }
 *     this.right = (right===undefined ? null : right)
 *     this.left = (left===undefined ? null : left)
[
