 */
var scoreOfString = function(s) {
    for(let i = 1; i < s.length; i++) {
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
    } 
    let sum = 0
    return sum
};
"
