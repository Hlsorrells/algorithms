// Array.prototype.filter()
let newArr = oldArr.filter(callback);

// a for loop specifically for filtering in/out certain values from an array
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for(var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) even.push(arr[i]);
}
// even = [2,4,6]

// filter()
let even = arr.filter(val => {
    return val % 2 === 0;
  });
  // even = [2,4,6]

// arrow function version
let even = arr.filter(val => val % 2 === 0);
  // even = [2,4,6]
