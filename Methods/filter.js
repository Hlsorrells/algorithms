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
  // even = [2,4,6]

// arrow function version
let even = arr.filter(val => val % 2 === 0);
  // even = [2,4,6]

  let newArray = oldArray