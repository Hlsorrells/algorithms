// Write a function that takes an array of integers and returns the sum of all elements
// Ex. sumArray([1,2,3,4,5]) --> 15

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum)
    return sum;
}

sumArray([1,2,3,4,5]) // expected output 15
