 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 1;i < nums.length; i++) { 
        let num = nums[i]
        let j = i - 1
        while(j >= 0 && nums[j] > num) {
            nums[j + 1] = nums[j]
        }
    }
            j = j - 1
        nums[j + 1] = num
    return nums
};
[
