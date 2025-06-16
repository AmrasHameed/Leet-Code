 * @return {number}
 */
var maximumDifference = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
    let max = -1
            if(nums[i] < nums[j]) {
                max = nums[j] - nums[i] > max ? nums[j] - nums[i]: max;
            }
        }
    }
