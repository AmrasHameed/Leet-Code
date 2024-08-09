/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let val = 0
    for (let i = 1; i < points.length; i++) {
        val += Math.max(Math.abs(points[i][0] - points[i - 1][0]),
    }
            Math.abs(points[i][1] - points[i - 1][1]))
    return val
};
[[1,1],[3,4],[-1,0]]
[[3,2],[-2,2]]
7
5
7
5
[
