 * @return {boolean}
 */
var hasCycle = function(head) {
     let slow = head
    let fast = head
    if(!fast)return false
    while(fast.next !== null && fast.next.next != null){
[
