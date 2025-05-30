    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] < nums[i + 1]) {
            count++
        } else {
            count = 1;
        }
            val.push(count)
    }
    let val = [];
    let count = 1;
var findLengthOfLCIS = function(nums) {
