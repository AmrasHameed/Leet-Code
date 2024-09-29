        if (index === digits.length) {
            return [currStr];
        }
        let letters = keyboard[digits[index]];
        let result = [];
        for (let letter of letters) {
            result = result.concat(combine(index + 1, currStr + letter));
        }
        return result;
    }
    return combine(0, "");
};
"23"
""
"2"
["ad","ae","af","bd","be","bf","cd","ce","cf"]
[]
["a","b","c"]
["ad","ae","af","bd","be","bf","cd","ce","cf"]
[]
["a","b","c"]
"
