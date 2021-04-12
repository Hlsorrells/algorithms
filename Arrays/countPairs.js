// This algorithm will count the pairs of matching numbers in an array
const myArr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function findPairs(myArr) {
    var count = 0;
    myArr.sort();
    for (var i = 0; i < myArr.length;) {
        if (myArr[i] === myArr[i + 1]) {
            count++;
            i = i + 2;
        } else {
            i++;
        }
    }
    console.log(count)
    return count;
}

findPairs(myArr)