 */
var kthFactor = function (n, k) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i)
        }
    }
    let arr = []
    return arr[k - 1] ? arr[k - 1] : -1;
};
1
