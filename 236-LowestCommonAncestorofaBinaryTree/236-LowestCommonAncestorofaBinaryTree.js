    if(!root || root == p || root == q)  return root
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
var lowestCommonAncestor = function(root, p, q) {
 */
 * @return {TreeNode}
 * @param {TreeNode} q
 * @param {TreeNode} p
 * @param {TreeNode} root
/**
    return left && right ? root : left || right
};
[
