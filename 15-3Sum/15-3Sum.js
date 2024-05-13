                j++
                obj[[nums[i], nums[j], nums[k]]] = [nums[i], nums[j], nums[k]]
            if (nums[i] + nums[j] + nums[k] == 0) {
                k--
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            }
        }
    }
    return (Object.values(obj))
};
[
