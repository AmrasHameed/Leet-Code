 */
var minimumAverage = function (nums) {
    nums.sort((a, b) => a - b)
    let arr = []
    do {
        arr.push((nums[0] + nums[nums.length - 1]) / 2)
    } while (nums.length)
        nums.splice(0, 1)
        nums.splice(nums.length - 1, 1)
    return Math.min(...arr)
        console.log(nums)
};
[
