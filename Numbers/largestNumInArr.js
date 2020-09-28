// Write a function that returns the largest number present in a given 'arr' array.

// Solution 1 ES6 arrow function and deconstructs the array
const array1 = [1, 3, 2];

var maxNum = arr => Math.max(...arr)
console.log("Solution 1a: " + maxNum(array1)) // expected output: 3

console.log("Solution 1b: " + Math.max(...array1)); // expected output: 3



// Solution 2 ES5 function
var arr = [1, 5, 3, 8, 4]

function findMaxNum(arr) {
    var num=0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    console.log("Solution 2: " + num)
}

findMaxNum(arr)
