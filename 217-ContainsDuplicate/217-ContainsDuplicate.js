    let set = new Set(nums)
var containsDuplicate = function (nums) {
 * @return {boolean}
 */
    let arr = [...set]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== arr[i]) {
            return true
        }
    }
    return false
};
[1,2,3,1]
[1,2,3,4]
[1,1,1,3,3,4,3,2,4,2]
[ 1, 2, 3 ] [ 1, 2, 3, 1 ]

[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

[ 1, 3, 4, 2 ] [
  1, 1, 1, 3, 3,
  4, 3, 2, 4, 2
]

true
false
true
true
false
true
[
