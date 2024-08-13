};
    fn(...args);
var cancellable = function (fn, args, t) {
 */
 * @return {Function}
 * @param {number} t
 * @param {Array} args
 * @param {Function} fn
/**
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
(x) => x * 2
[4]
35
190
(x1, x2) => (x1 * x2)
[2,5]
30
165
(x1, x2, x3) => (x1 + x2 + x3)
[5,1,3]
50
180
[{"time":0,"returned":8},{"time":35,"returned":8},{"time":71,"returned":8},{"time":106,
"returned":8},{"time":141,"returned":8},{"time":176,"returned":8}]
[{"time":0,"returned":10},{"time":30,"returned":10},{"time":59,"returned":10},{"time":89,
"returned":10},{"time":119,"returned":10},{"time":150,"returned":10}]
[{"time":0,"returned":9},{"time":50,"returned":9},{"time":100,"returned":9},{"time":150,
"returned":9}]
[{"time":0,"returned":8},{"time":35,"returned":8},{"time":70,"returned":8},{"time":106,
"returned":8},{"time":141,"returned":8},{"time":176,"returned":8}]
[{"time":0,"returned":10},{"time":30,"returned":10},{"time":60,"returned":10},{"time":90,
"returned":10},{"time":119,"returned":10},{"time":150,"returned":10}]
[{"time":0,"returned":9},{"time":50,"returned":9},{"time":100,"returned":9},{"time":150,
"returned":9}]
(
