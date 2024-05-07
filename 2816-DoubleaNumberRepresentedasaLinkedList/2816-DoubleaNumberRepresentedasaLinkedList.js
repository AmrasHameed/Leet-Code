    }
    val = (BigInt(val) * 2n).toString();
    console.log(val)
    let newHead = null;
    let tail = null;
    for (let i = 0; i < val.length; i++) {
        current = new ListNode(val[i]);
        if (newHead) {
            tail.next = current;
            tail = tail.next;
        } else {
[
