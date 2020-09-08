// Combine words into a string
// Splits the words on the space and then rejoins without spaces
// This might fail on edge cases, depending on application
const routeNameMaker = (str) => str.split(" ").join("").toLowerCase();

// This regular expression is more robust
// Converts words into lowercase and removes all spaces
const singleWord = (str) => str.toLowerCase().replace(/\s+/g, "");
