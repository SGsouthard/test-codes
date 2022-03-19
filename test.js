/*
string.charCodeAt(index) - 96
1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 13 && 14 && 15 && 16 && 17 && 18 && 19 && 20 && 21 && 22 && 23 && 24 && 25 && 26)

Step 1: Convert string to lower case
Step 2: Get index/decimal for each letter
Step 3: check that the string has numbers 1-26
Step 4: Return as true or false

*/

function isPangram(string){
    console.log(string)
    const panString = string.toLowerCase()

    let numArr = []

    for (x = 0; x < panString.length; x++) {
        let y = panString.charCodeAt(x) - 96
        if (y < 0 || y > 26) {
            
        } else {
            numArr.push(panString.charCodeAt(x) - 96)
        } 
    }

    if (numArr.includes(1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 13 && 14 && 15 && 16 && 17 && 18 && 19 && 20 && 21 && 22 && 23 && 24 && 25 && 26)) {
        answer = true
    } else {
        answer = false
    }
    
    return answer
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), "Should be True")
console.log("==============================================================")
console.log(isPangram("This is not a pangram."), "Should be False")
console.log("==============================================================")
console.log(isPangram("She sells seashells down by the seashore."), "Should be False")
console.log("==============================================================")
console.log(isPangram("Two driven jocks help fax my big quiz.​"), "Should be True")
console.log("==============================================================")
console.log(isPangram("abcdefghijklmopqrstuvwxyz​"), "Should be False")