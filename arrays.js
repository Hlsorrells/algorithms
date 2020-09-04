// indexOf()
favBands = ["Band 1", "Band 2", "Band 3", "Band 4"];
var userBand = prompt("what is your fav band?");
var a = favBands.indexOf(userBand);

if (a > -1){
    alert("Yeah, I love them");
} else {
    alert("Nah, they are lame");
}

// A function that returns a new array with the data reversed without the use of .reverse() method
var myArray = [1, 2, 3, 4, 5];

const reverseArray = () => {

    let revArray = [];

    // Loop over the array in reverse order (start at the end and countdown)
    for (var i = myArray.length - 1; i > -1; i--) {
        revArray.push(myArray[i]);
    }

    console.log(revArray);
}

reverseArray(myArray);

// 4. Given a one dimensional array of data write a function that return M random elements of that array. Each element must also be from a different position in the array. Don't just use the sample function that is built into your environment.

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

// Removing Array Items By Value Using Splice
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for( var i = 0; i < arr.length; i++){ 
    if ( arr[i] === 5) { 
        arr.splice(i, 1); 
    }
}
//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
