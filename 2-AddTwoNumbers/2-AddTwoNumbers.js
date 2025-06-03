        current = current.next;
        current.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        if (l1) l1 = l1.next;
        let sum = x + y + carry;
        let y = l2 ? l2.val : 0;
        let x = l1 ? l1.val : 0;
    while (l1 || l2 || carry > 0) {
    let carry = 0;
    let current = dummyHead;
    let dummyHead = new ListNode();
var addTwoNumbers = function (l1, l2) {
