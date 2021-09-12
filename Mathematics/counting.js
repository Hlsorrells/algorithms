// Also see the Numbers/logNums.js file for logging numbers

// Write code to return the the number of vowels in `str`
let vowels = ["a", "e", "i", "o", "u"]
var vowelCount = str => str.toLowerCase().split("").filter(
	ch => vowels.includes(ch)).length;
console.log(vowelCount("i think, therefore i am."))


// Write a function that takes in a string and outputs the number of vowels (not counting y).
var countVowels = function (str) {
	var count = 0;
	var input = str.toLowerCase();
	var vowelArr = ["a", "e", "i", "o", "u"];
	for (var i = 0; i < input.length; i++) {
		if (vowelArr.includes(input[i])) {
			count++;
		}
	}
	return count;
}
var countVowels = function (str) {
	var count = 0;
	var input = str.toLowerCase();
	for (var i = 0; i < input.length; i++) {
		if (
			input[i] === "a" ||
			input[i] === "e" ||
			input[i] === "i" ||
			input[i] === "o" ||
			input[i] === "u"
		) {
			count++;
		}
	}
	return count;
};