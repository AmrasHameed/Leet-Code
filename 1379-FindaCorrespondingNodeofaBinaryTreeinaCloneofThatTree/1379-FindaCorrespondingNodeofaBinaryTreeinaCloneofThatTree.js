    function preOrder(root, target) {
        if (root) {
            if (root.val === target.val) {
                value = root
            }
            preOrder(root.left, target)
            preOrder(root.right, target)
        }
    }
    preOrder(cloned, target)
    return value
};
[
