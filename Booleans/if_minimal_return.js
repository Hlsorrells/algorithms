// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

// For example, the code:
function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}

// Refactor to DRY code
// This can only be used if you have a return inside your if statement.
function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
} 

// Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.
// A comparison with <, <=, ===, !==, >=, > will always result in a boolean, therefore using the function Boolean() is totally unnecessary.
// bool === true is redundant, as it will always return bool.
// To obtain the opposite of bool we could use bool === false. However, a much cleaner way of doing this is simply !bool.

function parity(n) {
	let remainder = Boolean(n % 2)
	if(remainder === false) {
		return "even"
	}
	if(remainder === true) {
		return "odd"
	}
}

// Refactored to DRY code
function parity(n) {
	if(n % 2 === 0) return "even"
	if(!n % 2 === 0) return "odd"
}
