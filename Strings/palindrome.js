// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
const isPalindrome = str => {
    let newStr = str.split("").reverse().join("");
    if (str === newStr) {
        return true
    } return false
};
isPalindrome("racecar")

// Numeric variation
const isPalindromeNumber = num => {
    let str = num.toString()
    let newStr = str.split("").reverse().join("");
    if (str === newStr) {
        return console.log("true")
    } return console.log("false")
};
isPalindromeNumber(10)
isPalindromeNumber(101)
