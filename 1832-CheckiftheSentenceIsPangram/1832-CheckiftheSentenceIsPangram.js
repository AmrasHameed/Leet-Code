 */
var checkIfPangram = function (sentence) {
    let str = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < sentence.length; i++) {
        if (obj[sentence[i]]) {
    }
    let obj = {}
            obj[sentence[i]]++
        } else {
            obj[sentence[i]] = 1
        }
    return str === Object.keys(obj).sort().join('')
};
"thequickbrownfoxjumpsoverthelazydog"
"leetcode"
true
false
true
false
"
