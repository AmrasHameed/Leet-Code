    let limit = Math.min(k, this.stack.length);
    for (let i = 0; i < limit; i++) {
        this.stack[i] += val
CustomStack.prototype.increment = function (k, val) {
 */
 * @return {void}
 * @param {number} val
 * @param {number} k 
/** 

};
    return this.stack.pop();
    if (this.stack.length === 0) return -1;
["CustomStack","push","push","pop","push","push","push","increment","increment","pop",
"pop","pop","pop"]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
[
