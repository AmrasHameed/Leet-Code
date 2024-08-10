/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    num = num.toString().split('')
    if (num.includes('6')) {
        num[num.indexOf('6')] = '9';
    }
    return parseInt(num.join(''), 10);
};
9669
9996
9999
9969
9999
9999
9969
9999
9999
9
