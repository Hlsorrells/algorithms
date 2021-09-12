// Map() Method
  // used to apply a function on every element in an array and returns a new array

// Array.prototype.map()
let newArr = oldArr.map((val, index, arr) => {
    // return element to new Array
  });

// map()
let plus5 = arr.map((val, i, arr) => {
    return val + 5;
  });

// arrow function version
let newArr = arr.map((v,i,a) => v % 2 === 0 ? v * 2 : v);
  // newArr = [1,4,3,8];

// expanded version of above
let newArr = arr.map((v,i,a) => {
    if (v % 2 === 0){
      return v * 2;
    } else {
      return v;
    }
  });
  // newArr = [1,4,3,8];

  // Use map method to create an array of objects
  let newObjArr = arr.map( (val, i, arr ) => {
    return {
      value: val,
      index: i
    }
  })

  // newObjArr = [
  //   { value:1, index:0},
  //   { value:2, index:1}
  // ]