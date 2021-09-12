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
