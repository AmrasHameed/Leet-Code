/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = Math.max(...nums)
    let m = max - 1
    let n = max + k - 1
    let val2 = (m *(m + 1)) / 2
    return val1 - val2
    let val1 = (n *(n + 1) )/ 2
};
