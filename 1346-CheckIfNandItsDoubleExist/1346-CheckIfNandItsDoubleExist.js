 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] / 2 === arr[j] || arr[j] / 2 === arr[i]) {
        }
                return true
            }
    }
    return false
};
[10,2,5,3]
[3,1,7,11]
true
false
true
false
[
