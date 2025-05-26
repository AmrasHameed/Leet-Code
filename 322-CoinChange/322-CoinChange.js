    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    let dp = Array(amount + 1).fill(Infinity);
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
