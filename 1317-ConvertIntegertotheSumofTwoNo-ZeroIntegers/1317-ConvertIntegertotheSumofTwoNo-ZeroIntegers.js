 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for(let i = 1; i < n; i++) {
        let a = i
    } 
        let b = n - i
        if(!a.toString().includes(0) && !b.toString().includes(0)) {
            return [a, b]
        }
};
2
11
[1,1]
[2,9]
[1,1]
[2,9]
2
