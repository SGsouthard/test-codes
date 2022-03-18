function digital_root(n) {
    let num = n 
    let arrOfNumbers = [];
    let numString = num.toString()
    let stringArray = numString.split('')

    stringArray.forEach(string => {
        arrOfNumbers.push(Number(string));
    });

    let reducer = (accumulator, current) => accumulator + current;
    let sum = arrOfNumbers.reduce(reducer)

    if (sum.toString().length !== 1) {
        let nextArray = []
        let nextSumString = sum.toString()
        let nextSumArray = nextSumString.split('')
        nextSumArray.forEach(string => {
            nextArray.push(Number(string));
        });

        sum = nextArray.reduce(reducer)
    }
    
    return sum;
}


console.log("answer should be 7", digital_root(16));
console.log("answer should be 3", digital_root(12));
console.log("answer should be 1", digital_root(10));
console.log("answer should be 6", digital_root(942));
console.log("answer should be 6", digital_root(132189));

function digital_root(n) {
    // ...
  }