    for(let  i = 0; i < nums.length; i++) {
        if(nums[i] + 1 === nums[i + 1]) continue
    }
    let m = nums[0]
    let arr = []
        m = nums[i + 1]
        if(m===nums[i])arr.push(`${nums[i]}`)
        else arr.push(`${m}->${nums[i]}`)
    return arr
};
