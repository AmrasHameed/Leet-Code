    for (let i = 1; i <= n/2 ; i++) {
        arr.push(0 - i)
        arr.push(0 + i)
    if (n % 2 !== 0) {
        arr.push(0)
    }
    }
    return arr
};
