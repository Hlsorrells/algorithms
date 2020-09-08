// Capitalization of each word in a string
const capitalization = str => {
    let words = str.split(" ")
    let capWords = words.map(
        word => word.charAt(0).toUpperCase() + word.substring(1)
    )
    return capWords.join(" ")
}
