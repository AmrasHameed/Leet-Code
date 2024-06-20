/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').filter((n)=>n == 1).length
};
1
