// #2724

// Given an array arr and a function fn, return a sorted array sortedArr.
// You can assume fn only returns numbers and those numbers determine
// the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

let arr = [23, 42, 43, 24, 52, 24, 21, 231, 1, 4];
let fn = (x) => x;
let sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};

console.log(sortBy(arr, fn));