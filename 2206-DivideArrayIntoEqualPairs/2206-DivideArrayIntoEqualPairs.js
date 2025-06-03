    for(let i = 0; i < nums.length; i+=2) {
        if(nums[i]===nums[i+1]) {
            val = true
        } else {
            return false
        }
    }
    return val
};
