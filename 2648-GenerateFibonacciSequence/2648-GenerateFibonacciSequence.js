var fibGenerator = function*() {
    let num1 = 0
    let num2 = 1
    yield num1
    while(true) {
        let val = num1+num2
        yield val
    }
};

/**
 * const gen = fibGenerator();
 */
 * @return {Generator<number>}
/**
        num2 = val
        num1 = num2
    yield num2
5
