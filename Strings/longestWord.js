// Write code to create a function that accepts a string (`str`) and returns the longest word in the string
const longestWord = str => {
    const words = str.split(" ");
    const longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    } return longestWord;
};
