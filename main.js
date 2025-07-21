// https://codingbat.com/prob/p142270
// Given a string and a non-negative int n, 
// return a larger string that is n copies of the original string.
function stringTimes(str, n) {
    return str.repeat(n);
}

console.log(stringTimes("Hi", 2)) //→ "HiHi"
console.log(stringTimes("Hi", 3)) //→ "HiHiHi"
console.log(stringTimes("Hi", 1)) //Hi