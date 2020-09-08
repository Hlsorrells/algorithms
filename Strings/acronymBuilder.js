// Write code to create a function that accepts a string and returns an acronym for the given string
const acronymBuilder = str => {
    const words = str.split(" ");
    const result = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        result += word[0].toUpperCase();
    }
    return result;
};
