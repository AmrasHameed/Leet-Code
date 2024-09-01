        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });
    let result = [];
    obj.forEach(([num, count]) => {
        result.push(...Array(count).fill(Number(num)));
    });
    return result
};
[1,1,2,2,2,3]
[2,3,1,3,2]
[-1,1,-6,4,5,-6,1,4,1]
[3,1,1,2,2,2]
[1,3,3,2,2]
[5,-1,4,4,-6,-6,1,1,1]
[3,1,1,2,2,2]
[1,3,3,2,2]
[5,-1,4,4,-6,-6,1,1,1]
[
