var maxProduct = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let val = (nums[i] - 1) * (nums[j] - 1)
            if (val > max) {
                max = val
            }
    let max = -Infinity
        }
    }
    return max
};
[3,4,5,2]
[1,5,4,5]
[3,7]
12
16
12
12
16
12
[
