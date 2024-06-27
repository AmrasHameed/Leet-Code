/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s = s.split(' ')
    let arr = s.splice(0,k)
    return arr.join(' ')
};
"
