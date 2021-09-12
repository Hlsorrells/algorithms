// Array.prototype.reduce()
let result = arr.reduce(callback, initValue)
// Specifying an initial value
let sum = arr.reduce((acc, val) => acc + val, 100)

let data = [
    {
        country: 'China',
        pop: 1409517397,
    },
    {
        country: 'India',
        pop: 1339180127,
    },
    {
        country: 'USA',
        pop: 324459463,
    },
    {
        country: 'Indonesia',
        pop: 263991379,
    }
]

let sum = data.reduce((acc, val) => val.country == 'China' ? acc : acc + val.pop, 0);

// Variations of reduce
var arr = [1, 2, 3, 4]
var sum = arr.reduce((a, b) => a + b)

for (var i = 0; i < arr.length; i++){
    sum+=arr[i]
}
// sum = 10

