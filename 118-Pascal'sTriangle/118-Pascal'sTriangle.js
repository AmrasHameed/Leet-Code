/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = []
    for (let i = 0; i < numRows; i++) {
        let row = [1]
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
        }
        if (i > 0) {
5
