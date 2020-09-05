// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

function doSum(num) {
    var result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(doSum(2));   // Output: 3 (because 1 + 2 = 3)
console.log(doSum(4));   // Output: 10 (because 1 + 2 + 3 + 4 = 10)
console.log(doSum(10));  // Output: 55

// A function that returns M random unique non-negative integers less than some value N.
// M = the number of random non-negative intergers that are less than the value of N
// N = the upper limit of the value of each M random number

const getUniqueRandomNums = (m, n) => {

    // array of unique numbers
    let uniqueRandomNums = [];

    // function to generate a random number
    do {
        
        // generate a new random number
        let newNum = Math.floor(Math.random() * 10);

        // check to see if number unique to array & less than n value
        if (!uniqueRandomNums.includes(newNum) && newNum < n) {
            uniqueRandomNums.push(newNum);
        }
    }

    // check to see if random number needed
    while (uniqueRandomNums.length < m)

    console.log(uniqueRandomNums);
}

getUniqueRandomNums(4, 5);