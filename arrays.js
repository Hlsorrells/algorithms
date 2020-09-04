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
