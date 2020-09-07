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
