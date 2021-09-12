//////////////////////////////////////////////////////////////////////
// Write code to create a function that returns the factorial of `num`
// Factorialize a number with recursion
const factorialize = num => {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

// Factorialize a number with a FOR loop
const factorial = num => {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
};
factorial(5);
