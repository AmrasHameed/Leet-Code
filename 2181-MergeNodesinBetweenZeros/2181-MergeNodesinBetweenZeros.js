var mergeNodes = function (head) {
    let prev = head, curr = head.next
    while (curr) {
        if (curr.val == 0) {
            if (!curr.next) {
                prev.next = null
            }
            prev = curr
        } else {
            prev.val += curr.val
            prev.next = curr.next
        }
 */
 * @return {ListNode}
[0,3,1,0,4,5,2,0]
[0,1,0,3,0,2,2,0]
[4,11]
[1,3,4]
[4,11]
[1,3,4]
[
