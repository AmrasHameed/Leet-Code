    for (let letter of s) {
        if (!arr.includes(letter)) {
            arr.push(letter)
        } else {
            arr = []
        }
    }
            count++
            arr.push(letter)
    let count = 0
    return arr ? count + 1 : count;
};
"
