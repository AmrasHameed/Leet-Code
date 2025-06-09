    let arr2 = s2.split(' ')
    let arr = [...arr1, ...arr2]
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        obj[key] = (obj[key] || 0) + 1;
    }
    return freqOne
    let arr1 = s1.split(' ')
    const freqOne = Object.keys(obj).filter((key) => obj[key] === 1);
};
