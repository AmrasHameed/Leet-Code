var insertGreatestCommonDivisors = function (head) {
}
    return gcd(b, a % b);
    }
        return a;
    if (!b) {
var gcd = function (a, b) {
    const ans = head;
    let curr = head
    while (curr && curr.next) {
        curr.next = new ListNode(gcd(curr.val, curr.next.val), curr.next)
        curr = curr.next.next
    }
[
