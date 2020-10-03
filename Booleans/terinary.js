// Ternary
return condition ? true : false
// use of boolean operators like > or < will work


// Ternary Hell
// Write a function that returns the strings:

// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.

function areTrue(a, b) {
    return a && b ? "both" 
    : a ? "first" 
    : b ? "second" 
    : "neither"
}
