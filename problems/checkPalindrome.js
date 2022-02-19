function solution(inputString) {
    let stringArray = inputString.split("");
    let reverseArray = stringArray.reverse();
    let joinArray = reverseArray.join("");
    if (joinArray === inputString) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

solution("aabaa");
solution("abac");
solution("a");