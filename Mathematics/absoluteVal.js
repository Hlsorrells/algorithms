// The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.
// Create a function that recreates this functionality.

// Examples
// absolute(-5) ➞ 5
// absolute(-3.14) ➞ 3.14
// absolute(250) ➞ 250

// This function uses the method for absolute value
function absoluteVal(n) {
    return Math.abs(n)
}

// This function recreates the method for absolute value
function absolute(n) {
	if (n < 0) return 0 - n
	if (n > 0) return n
	return 0
}
