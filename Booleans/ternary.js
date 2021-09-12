// Ternary
return condition ? true : false
// use of boolean operators like > or < will work

// Example of multiple conditions
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

// Examples
// acceptIntoMovie(14, true) ➞ true
// acceptIntoMovie(14, false) ➞ false
// acceptIntoMovie(16, false) ➞ true

function acceptIntoMovie(age, isSupervised) {
	return (age >= 15) || (isSupervised === true) ? true : false
}


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

