           console.log(record,'-=-===-')
        }
        else if(operations[i] === 'D') {
            record.push(record[record.length - 1] * 2)
        }
        else if(operations[i] === 'C') {
            record.pop()
        } else {
            record.push(Number(operations[i]))
        }
           record.push(record[record.length - 1] + record[record.length - 2])
        if(operations[i] === '+') {
    for(let i = 0; i < operations.length; i++) {
    let record = []
var calPoints = function(operations) {
 */
 * @return {number}
 * @param {string[]} operations
