// Array.prototype.filter()
let newArr = oldArr.filter(callback);

// filter()
let even = arr.filter(val => {
    return val % 2 === 0;
  });
  // even = [2,4,6]

// arrow function version
let even = arr.filter(val => val % 2 === 0);
  // even = [2,4,6]
