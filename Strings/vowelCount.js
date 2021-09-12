// Write code to return the the number of vowels in `str`

let vowels = ["a", "e", "i", "o", "u"]
var vowelCount = str => str.toLowerCase().split("").filter(
        ch => vowels.includes(ch)).length;
console.log(vowelCount("i think, therefore i am."))
