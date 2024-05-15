    function inOrder(root) {
            sum += root.val
            root.val = sum
        if (root) {
            inOrder(root.right)
            inOrder(root.left)
    }
    inOrder(root)
    return root
        }
};
[
