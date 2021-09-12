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