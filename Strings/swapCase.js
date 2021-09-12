// Write code to create a function takes a string and returns the string with all of the letter cases swapped
const swapCase = str => {
    const result = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }
    return result;
};
