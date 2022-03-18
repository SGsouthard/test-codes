/*
string.charCodeAt(index) - 96

Step 1: Convert string to lower case
Step 2: Get index/decimal for each letter
Step 3: check that the string has numbers 1-26
Step 4: Return as true or false

*/

function isPangram(string){
    console.log(string)
    const panString = string.toLowerCase()

    
    

    return panString
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), "Should be True")
// console.log("---------------------------------------------------------")
// console.log(isPangram("This is not a pangram."), "Should be False")
// console.log("---------------------------------------------------------")
// console.log(isPangram("She sells seashells down by the seashore."), "Should be False")
// console.log("---------------------------------------------------------")
// console.log(isPangram("Two driven jocks help fax my big quiz.​"), "Should be True")