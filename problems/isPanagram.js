/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example,
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

/*
string.charCodeAt(index) - 96
1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 13 && 14 && 15 && 16 && 17 && 18 && 19 && 20 && 21 && 22 && 23 && 24 && 25 && 26
"a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q" && "r" && "s" && "t" && "u" && "v" && "w" && "x" && "y" && "z"

Step 1: Convert string to lower case
Step 2: Get index/decimal for each letter
Step 3: check that the string has numbers 1-26
Step 4: Return as true or false

*/

function isPangram(string){
    string = string.toLowerCase()
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    return alphabet.every(x => string.includes(x));

    // console.log(string)
    // const panString = string.toLowerCase()

    // let numArr = []

    // for (i = 0; i < panString.length; i++) {
    //     let y = panString.charCodeAt(i) - 96
    //     if (y < 0 || y > 26) {
            
    //     } else {
    //         numArr.push(panString.charCodeAt(i) - 96)
    //     } 
    // }

    // if (numArr.includes(1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12 && 13 && 14 && 15 && 16 && 17 && 18 && 19 && 20 && 21 && 22 && 23 && 24 && 25 && 26)) {
    //     answer = true
    // } else {
    //     answer = false
    // }

    // return answer
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), "Should be True")
console.log("==============================================================")
// console.log(isPangram("This is not a pangram."), "Should be False")
// console.log("==============================================================")
// console.log(isPangram("She sells seashells down by the seashore."), "Should be False")
// console.log("==============================================================")
// console.log(isPangram("Two driven jocks help fax my big quiz.​"), "Should be True")
// console.log("==============================================================")
console.log(isPangram("abcdefghijklmopqrstuvwxyz​"), "Should be False")