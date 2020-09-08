// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
const isPalindrome = str => {
    let newStr = str.split("").reverse().join("");
    if (str === newStr) {
        return true
    } return false
};
isPalindrome("racecar")
