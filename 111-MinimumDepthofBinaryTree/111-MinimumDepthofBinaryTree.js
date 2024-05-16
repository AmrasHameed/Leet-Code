var minDepth = function (root) {
    if (root == null) return 0
 * @return {number}
 */
/**
 * @param {TreeNode} root
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
    if (root.left == null) return minDepth(root.right) + 1
    if (root.right == null) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};
[
