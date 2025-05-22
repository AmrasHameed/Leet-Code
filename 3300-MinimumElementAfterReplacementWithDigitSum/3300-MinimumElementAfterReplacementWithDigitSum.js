            nums[i] = (nums[i] - num) / 10
            let num = nums[i] % 10
        }
            sum += num
        if(sum < min) {
            min = sum
        }
    }
        while (nums[i] > 0) {
        let sum = 0;
    for (let i = 0; i < nums.length; i++) {
    let min = Infinity
