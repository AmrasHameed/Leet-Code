    let val = true
    for (let i = 0; i < word.length; i++) {
        if(word[i]===ch) {
           pre = word.slice(0,i + 1)
           post= word.slice(i + 1)
           val = false
           break
        }
    }
    pre = pre.split('').reverse().join('')
    return val === false ? pre + post : word;
};
    let post = ''
