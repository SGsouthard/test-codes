/*
You get an array of numbers, return the sum of all of the positives ones.
*/

function positiveSum(arr) {

    posArr = arr.filter(checkPositive)
  
    function checkPositive(num) {
        return num > 0;
    }

    console.log(posArr)

    if (posArr.length !== 0) {
        let reducer = (accumulator, current) => accumulator + current;
        sum = posArr.reduce(reducer)
    } else {
        console.log("array is empty")
        sum = 0
    }

    return sum
}

console.log(positiveSum([1,2,3,4,5]), 15)
console.log(positiveSum([-1,-2,-3,-4,-5]), 0)
console.log(positiveSum([1,-2,3,4,5]),13)