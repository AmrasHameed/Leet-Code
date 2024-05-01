 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return null
    if(head.next === null && head.val === val) return null
    let curr = head;
    while(head.next !== null){
        if(curr && curr.val==val){
            curr = curr.next
        } else if(head.next.val == val){
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return curr
};
 * @param {number} val
[
