 */
var isValidBST = function (root, low = null, high = null) {
    if (!root) {
        return true
    }
    if (low !== null && root.val <= low) {
        return false
    }
    if (high !== null && root.val >= high) {
        return false
    }
 * @return {boolean}
    return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high)
};
[
