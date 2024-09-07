var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2]
    arr.sort((a, b) => a - b)
    if (arr.length % 2 == 0) {
        return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
};
[1,3]
[2]
[1,2]
[3,4]
2.00000
2.50000
2.00000
2.50000
[
