// A function that returns a new array with the data filtered without the use of .filter() method
// a for loop specifically for filtering in/out certain values from an array
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for(var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) even.push(arr[i]);
}
// even = [2,4,6]

