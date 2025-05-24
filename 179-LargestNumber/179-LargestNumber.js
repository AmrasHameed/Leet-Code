 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    const numsStr = nums.map(String);
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));
    const result = numsStr.join('');
    return result[0] === '0' ? '0' : result;
};
/**
