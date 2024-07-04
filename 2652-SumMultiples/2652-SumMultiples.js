 * @return {number}
 */
var sumOfMultiples = function (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            sum += i
        }
    }
    let sum = 0
    return sum
};
7
