 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function traverse(node) {
        if (node === null) return;
        result.push(node.val);    
        traverse(node.left);      
        traverse(node.right);     
    const result = [];
    }
    traverse(root);
    return result;
};
[
