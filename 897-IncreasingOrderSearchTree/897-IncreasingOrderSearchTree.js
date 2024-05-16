                current = newRoot;
            } else {
                current.right = new TreeNode(root.val);
                current = current.right;
            }
            inOrder(root.right)
        }
    }
    inOrder(root)
    return newRoot
};
[
