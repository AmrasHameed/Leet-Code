            result.push('Silver Medal')
        } else if(score[i] == arr[2]) {
            result.push('Bronze Medal')
        } else {
            for(let j = 3; j <= arr.length; j++) {
        }
                if(arr[j] == score[i]) {
            }
                    result.push(`${j+1}`)
                }
                    break
    }
    return result
};
[
