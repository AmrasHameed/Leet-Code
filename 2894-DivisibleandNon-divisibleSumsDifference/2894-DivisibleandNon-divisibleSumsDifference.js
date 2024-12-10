    for(let i = 1; i <= n; i++) {
var differenceOfSums = function(n, m) {
 */
 * @param {number} m
 * @return {number}
        if(i%m!==0) {
            sum1 += i
        } else {
    let sum1 = 0
    let sum2 = 0
            sum2 += i
        }
    }
    return sum1 - sum2
};
