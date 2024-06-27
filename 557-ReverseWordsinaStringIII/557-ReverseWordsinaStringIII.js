/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('')
    }
    s = s.split(' ')
    return s.join(' ')
};
"
