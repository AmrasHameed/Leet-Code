    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
        }
                count++
            }
    }
    return count
};
[1,2,2,1]
1
[1,3]
3
[3,2,1,5,4]
2
4
0
3
4
0
3
[
