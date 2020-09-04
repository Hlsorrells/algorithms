// Given two strings, s and t , return true if t is contained as a substring inside s.

const s = "This is the first string";
const t = s.includes("first");
console.log(t);

// Write code to return the the number of vowels in `str`

let vowels = ["a", "e", "i", "o", "u"]
var vowelCount = str => str.toLowerCase().split("").filter(
        ch => vowels.includes(ch)).length;
console.log(vowelCount("i think, therefore i am."))
