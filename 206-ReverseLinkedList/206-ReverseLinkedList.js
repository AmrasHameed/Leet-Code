 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head
    let prev = null
    while(curr){
        let next = curr.next
        curr.next = prev
        curr = next
    }
        prev = curr
    return head
    head = prev
};
[
