// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

function sumAllToNum(num) {
    var result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(sumAllToNum(2));   // Output: 3 (because 1 + 2 = 3)
console.log(sumAllToNum(4));   // Output: 10 (because 1 + 2 + 3 + 4 = 10)
console.log(sumAllToNum(10));  // Output: 55
