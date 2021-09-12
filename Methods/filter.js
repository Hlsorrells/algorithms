// Filter() Method
  // returns a new array created from all elements that pass a certain test performed on an original array

// Array.prototype.filter()
let newArr = oldArr.filter(callback);
  // callback 
    // test true - returns the element
    // can take 3 arguments (element, index, arr)


// filter()
let even = arr.filter(val => {
    return val % 2 === 0;
  });

let evenArrow = arr.filter(val => val % 2 === 0);
  // even = [2,4,6]


// Work with arrays and objects
let data = [
  { country: 'China', population: 1409517397 },
  { country: 'India', population: 1339180127 },
  { country: 'USA', population: 324459463 },
  { country: 'Indonesia', population: 263991379 }
]

// Create a new array with only the countries that have a population higher than 500 million.
let cities = data.filter( val => val.population > 500000000);