    }
 */
var maximumHappinessSum = function(h, k) {
    h.sort((a,b) => b - a)
    let result = 0
    let i = 0
    while( i < k) {
       if(h[i] - i > 0) {
 * @return {number}
 * @param {number} k
 * @param {number[]} h
        result += h[i] - i
       }
    return result
       i++
[
