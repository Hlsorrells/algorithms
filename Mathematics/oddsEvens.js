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
