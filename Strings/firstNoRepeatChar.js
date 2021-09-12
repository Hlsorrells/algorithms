// Write code to take in a string and output the *first* occurence of a character that does not repeat itself in that string
function firstNonRepeatingChar(str) {
    var charCount = {};

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    console.log(charCount);

    for (var k in charCount) {
        if (charCount[k] === 1) {
            return k;
        }
    }

};
// Output: "b"
console.log(firstNonRepeatingChar("the quick brown fox jumps over the calm kitten quietly"));

// Alternate version
function firstNonRepeatChar(str) {
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
            return c;
        }
    }
}
