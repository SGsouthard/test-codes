/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

EXAMPLES
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digital_root(n) {
    let num = n

    // function to convert the given number to an array
    function convertArray() {
        let arrOfNumbers = [];
        let numString = num.toString()
        let stringArray = numString.split('')

        stringArray.forEach(string => {
            arrOfNumbers.push(Number(string));
        });

        return arrOfNumbers;
    }

    // actually converting the number to an array
    let arrOfNumbers = convertArray(num);
    console.log(arrOfNumbers);

    // using reduce() to add together the numbers and get a sum
    let reducer = (accumulator, current) => accumulator + current;
    let sum = arrOfNumbers.reduce(reducer)

    //function to check if the sum is the right length
    function checkLength() {
        if (sum.toString().length !== 1) {
            num = sum
            let newSum = convertArray(num);
            sum = newSum.reduce(reducer);

            checkLength(sum);            
        }
    }
    // call the check function, it will loop until reduced to a single digit
    checkLength(sum)
    
    // return the final sum
    return sum;
}


console.log("answer should be 7", digital_root(16));
console.log("answer should be 6", digital_root(942));
console.log("answer should be 1", digital_root(67132));