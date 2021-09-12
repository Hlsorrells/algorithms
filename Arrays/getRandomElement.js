// indexOf()
favBands = ["Band 1", "Band 2", "Band 3", "Band 4"];
var userBand = prompt("what is your fav band?");
var a = favBands.indexOf(userBand);

if (a > -1){
    alert("Yeah, I love them");
} else {
    alert("Nah, they are lame");
}

// Given a one dimensional array of data write a function that return M random elements of that array. Each element must also be from a different position in the array. Don't just use the sample function that is built into your environment.

const getRandomElement = (m, elArray) => {

    // array of unique elements
    let finalElArray = [];

    // check if there are enough elements in the array to return M number of elements
    if (m < elArray.length) {

        // array of M number of unique element index numbers
        let randomIndexNum = [];

        // function to generate a random index number
        do {
            // generate a new random number (use of elArray.length will ensure availability of index numbers)
            let newNum = Math.floor(Math.random() * 10 * elArray.length);

            // check to see if number unique to the array & less than n value
            if (!randomIndexNum.includes(newNum) && newNum < elArray.length) {
                randomIndexNum.push(newNum);
            }
        }
        // check to see if random number needed
        while (randomIndexNum.length < m);

        // retrieve the element from the 
        randomIndexNum.forEach(num => {
            finalElArray.push(elArray[num]);
        });

        // print the final array of elements
        console.log(finalElArray);

    } else {

        console.log("You must designate a number of unique elements no larger than the number of elements in the array.");
    }
}
getRandomElement(2, ["I", "am", "a", "full", "stack", "web", "developer", "that", "writes", "code"]);

// Work with arrays and objects
let data = [
    { country: 'China', population: 1409517397 },
    { country: 'India', population: 1339180127 },
    { country: 'USA', population: 324459463 },
    { country: 'Indonesia', population: 263991379 }
]

// Create a new array with only the countries that have a population higher than 500 million.
let cities = data.filter( val => val.population > 500000000);

// Sum up the population of every country except China
let popSum = data.reduce( (acc, val) => {
    return val.country == 'China' ? acc: acc + val.population
}, 0)
