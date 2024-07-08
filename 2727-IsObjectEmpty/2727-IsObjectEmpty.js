var isEmpty = function (obj) {
    let obj1 = Object.entries(obj)
    if (obj1.length === 0 || obj1[0] == null) {
        return true
    }
    return false
};
{
