 * @return {number}
 */
var minimumSum = function (num) {
    let arr = num.toString().split('').sort()
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])
};
/**
 * @param {number} num
2932
4009
52
13
52
13
2
