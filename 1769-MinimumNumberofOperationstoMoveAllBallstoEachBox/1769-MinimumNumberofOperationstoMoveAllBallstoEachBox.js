var minOperations = function (boxes) {
    let answer = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
    let n = boxes.length
        for (let j = 0; j < n; j++) {
            if (boxes[j] == '1') {
        }
                answer[i] += Math.abs(i - j)
            }
    }
    return answer
};
"
