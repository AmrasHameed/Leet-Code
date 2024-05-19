/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
        minHeap(nums, nums.length, i)
    }
    function minHeap(arr, n, i) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if (right < n && arr[right] < arr[largest]) {
            largest = right
        }
[3,2,1,5,6,4]
