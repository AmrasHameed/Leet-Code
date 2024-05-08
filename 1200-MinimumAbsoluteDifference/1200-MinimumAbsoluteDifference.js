    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == min) {
    let min = arr[1] - arr[0]
    }
        if (min > arr[i + 1] - arr[i]) {
    for (let i = 1; i < arr.length - 1; i++) {
            min = arr[i + 1] - arr[i]
        }
            nums.push([arr[i], arr[i + 1]])
        }
    }
    return nums
};
[
