// Work with arrays and objects
let data = [
    { country: 'China', population: 1409517397 },
    { country: 'India', population: 1339180127 },
    { country: 'USA', population: 324459463 },
    { country: 'Indonesia', population: 263991379 }
]

// Create a new array with only the countries that have a population higher than 500 million.
let cities = data.filter( val => val.population > 500000000);

// Sum up the population of every country except China
let popSum = data.reduce( (acc, val) => {
    return val.country == 'China' ? acc: acc + val.population
}, 0)