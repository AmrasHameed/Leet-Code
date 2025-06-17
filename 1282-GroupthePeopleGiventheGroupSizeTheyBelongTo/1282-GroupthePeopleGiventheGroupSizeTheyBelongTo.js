 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map()
    let result = []
    for(let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i]
        if(!map.has(size)) {
            map.set(size, [])
        }
        map.get(size).push(i)
        if(map.get(size).length === size) {
            result.push(map.get(size))
        }
            map.set(size, [])
    }
    return result
};
