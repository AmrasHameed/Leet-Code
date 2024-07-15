 * @return {string}
 */
var getEncryptedString = function (s, k) {
    for (let i = 0; i < s.length; i++) {
/**
 * @param {string} s
 * @param {number} k
        str += s[(i + k) % s.length]
    }
    let str = ""
    return str
};
"
