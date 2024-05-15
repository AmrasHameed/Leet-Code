    function inOrder(root) {
    let sum = 0
var bstToGst = function (root) {
        if (root) {
            inOrder(root.right)
            sum += root.val
            root.val = sum
            inOrder(root.left)

        }
    }
    inOrder(root)
    return root
[
