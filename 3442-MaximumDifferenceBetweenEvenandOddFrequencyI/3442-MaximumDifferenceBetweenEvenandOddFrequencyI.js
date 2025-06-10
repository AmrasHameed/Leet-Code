    for (let i = 0; i < val.length; i++) {
        if (val[i] % 2 !== 0) {
            max = val[i] > max ? val[i] : max;
        }
        if (val[i] % 2 === 0) {
            min = val[i] < min ? val[i] : min;
        }
    return max - min
    }
};
