const vowelsAndConsonants = s => {
    // make all letters lower case & split string into an array
    let arr = s.toLowerCase().split("")

    // First loop to print the vowels
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            console.log(arr[i])
        }
    }
    // Second loop to print the consonants
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "a" && arr[i] !== "e" && arr[i] !== "i" && arr[i] !== "o" && arr[i] !== "u") {
            console.log(arr[i])
        }
    }
}

vowelsAndConsonants("javascriptloops")