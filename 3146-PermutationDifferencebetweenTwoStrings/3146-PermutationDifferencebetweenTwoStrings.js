 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        sum += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]))
    }
    let sum = 0;
    return sum
};
"
