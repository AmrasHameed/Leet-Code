            arr.push(root.val)
            inOrder(root.right)
        }
    }
    inOrder(root)
    let min = arr[1] - arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        let val = arr[i + 1] - arr[i]
        if (val < min) {
            min = val
        }
    }
    return min
};
[
