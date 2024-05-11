};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    this.table[key] = null
MyHashSet.prototype.remove = function(key) {
    return this.table[key] == key 
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
[
