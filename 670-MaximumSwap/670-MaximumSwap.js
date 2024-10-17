    for (let j = 0; j < numArr.length; j++) {
        const [num, index] = sortArr.shift();;
        if (numArr[j] !== num) {
            let maxIdx = numMap[num];
            let tmp = numArr[j];
            numArr[j] = num;
            numArr[maxIdx] = tmp;
            break
        }
    }
    return Number(numArr.join(''));
};
2736
