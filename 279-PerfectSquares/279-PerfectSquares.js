    for (let i = 1; i <= n; i++) {
        for (let sq of squares) {
            if (i >= sq) {
    dp[0] = 0;
    const dp = Array(n + 1).fill(Infinity);
    }
        squares.push(i * i);
    for (let i = 1; i * i <= n; i++) {
    const squares = [];
var numSquares = function (n) {
 */
 * @return {number}
                dp[i] = Math.min(dp[i], dp[i - sq] + 1);
