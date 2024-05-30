/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.join('')
    digits = BigInt(digits)
    digits++
    return digits.toString().split('')
};
[
