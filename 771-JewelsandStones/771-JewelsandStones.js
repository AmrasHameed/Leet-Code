 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    for(let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++
        }
    }
    let count = 0
    return count
};
"
