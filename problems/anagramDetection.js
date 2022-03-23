/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

var isAnagram = function(test, original) {

    let t = test.toLowerCase().split("").sort()
    let o = original.toLowerCase().split("").sort()

    if (t.toString() === o.toString()) {
        solution = true
    } else {
        solution = false
    }

    console.log(t, o)
    return solution

};

console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log("=============================================================================================")
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log("=============================================================================================")
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
console.log("=============================================================================================")
console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log("=============================================================================================")
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log("=============================================================================================")
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')
console.log("=============================================================================================")