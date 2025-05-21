var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i].toString().split('').map(Number).reduce((acc, x) => acc + x, 0)
        if (i === val) {
            return i
        }
    }
    return -1
};
 */
