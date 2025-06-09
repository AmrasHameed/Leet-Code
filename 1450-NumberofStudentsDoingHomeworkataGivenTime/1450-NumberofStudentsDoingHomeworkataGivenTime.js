 */
var busyStudent = function(startTime, endTime, queryTime) {
    for(let i = 0; i < startTime.length; i++) {
        if(startTime[i] <= queryTime && endTime[i] >=queryTime ) {
            count++
        }
    }
    let count = 0;
    return count
};
