 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let min = Math.min(...nums)
    }
        let index = nums.indexOf(min)
        nums[index] = nums[index] * multiplier
    return nums
};
[2,1,3,5,6]
5
2
[1,2]
3
4
[8,4,6,5,6]
[16,8]
[8,4,6,5,6]
[16,8]
[
