// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string. Make sure to include all punctuation that is in the original string.

// Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"

function toScottishScreaming(str) {
	return str.replace(/[aiouAIOU]/gi, "e").toUpperCase()
}