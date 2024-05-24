    }
    inOrder(p, arr1)
        inOrder(root.right, arr)
        arr.push(root.val)
        inOrder(root.left, arr)
    inOrder(q, arr2)
    console.log(arr1, arr2)
    if (arr1.length !== arr2.length || arr1.toString() !== arr2.toString()) {
        return false
    }
    return true
};
[
