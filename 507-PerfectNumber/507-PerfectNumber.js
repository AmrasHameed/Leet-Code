 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    for(let i = 1; i <= num/2; i++) {
        if(num%i===0) {
            sum += i
        }
    }
    let sum = 0;
    return num === sum
};
