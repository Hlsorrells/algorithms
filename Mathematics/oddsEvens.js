// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number
var oddOrEven = num => {
    if (num % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
};

// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number
var logEvenNums = num => {
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
};

// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.

function parity(n) {
	if(n % 2 === 0) return "even"
	return "odd"
}

// Double the even numbers and leave the odd numbers the same
let arr = [1,2,3,4,5];

let newArr = arr.map( (v,i,a) => {
    return v%2 === 0 ? v * 2 : v
});

let newArray = arr.map( (v,i,a) => {
    if (v%2 === 0) {
        return v * 2
    } else {
        return v
    }
});
