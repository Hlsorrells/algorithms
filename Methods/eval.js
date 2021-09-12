// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

// Examples
// equation("1+1") ➞ 2
// equation("7*4-2") ➞ 26
// equation("1+1+1+1+1") ➞ 5

// Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval().
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

function equation(s) {
	return eval(s)
}
