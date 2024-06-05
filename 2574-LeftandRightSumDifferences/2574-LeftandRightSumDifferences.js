        left[i + 1] = left[i] + nums[i]
    }
        right[i + 1] = right[i] + rev[i]
    right.reverse()
    for (let i = 0; i < nums.length; i++) {
        arr.push(Math.abs(left[i] - right[i]))
    let arr = []
    }
    return arr
};
[
