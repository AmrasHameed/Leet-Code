/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((acc,x)=>acc+x,0)
    return sum % k
};
