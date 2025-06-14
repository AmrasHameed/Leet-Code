            max += num[i]
        }
        if (num[i] === num[second]) {
            min += '0'
        } else {
            min += num[i]
        }

    }
    return parseInt(max) - parseInt(min)
};
