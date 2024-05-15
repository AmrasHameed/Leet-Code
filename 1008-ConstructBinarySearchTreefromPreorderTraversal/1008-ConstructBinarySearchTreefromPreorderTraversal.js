            return new TreeNode(value)
        }
        if (root.val > value) {
            root.left = insertNode(root.left, value)
        } else {
            root.right = insertNode(root.right, value)
        if (!root) {
        }
    }
    for (let item of preorder) {
        root = insertNode(root, item)
    }
    return root
        return root
};
[
