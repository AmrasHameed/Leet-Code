/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums = nums.sort((a, b) => b - a)
    let val1 = nums[0] * nums[1] * nums[2]
    return val1 > val2 ? val1 : val2
    let val2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
};
[1,2,3]
[1,2,3,4]
[-1,-2,-3]
[-100,-98,-1,2,3,4]
6
24
-6
39200
6
24
-6
39200
[
