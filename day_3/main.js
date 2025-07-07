function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = (l + r) / 2;
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 7;

console.warn(binarySearch(arr, target))