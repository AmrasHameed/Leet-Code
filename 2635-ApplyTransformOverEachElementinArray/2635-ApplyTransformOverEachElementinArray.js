 * @param {Function} fn
 * @param {number[]} arr
 * @return {number[]}
 */
var map = function (arr, fn) {
    return arr.map((n, i)=>fn(n,i))
};
/**
f
