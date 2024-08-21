 * @return {number}
 */
var countKeyChanges = function (s) {
    s = s.toLowerCase()
    let count = 0
    let prev = '';
    for (let char of s) {
        if (prev !== char) {
            count++
        }
        prev = char
    }
    return count - 1
};
"aAbBcC"
"AaAaAaaA"
"mDVD"
2
0
3
2
0
3
"
