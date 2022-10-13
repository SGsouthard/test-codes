function createPhoneNumber(numbers){
    let firstPart = []
    let secondPart = []
    let thirdPart = []
    let phoneNumber = ""

    for (let i = 0; i< numbers.length; i++) {
        // console.log(i)
        if (i < 3) {
            firstPart.push(numbers[i])
        } else if (i < 6) {
            secondPart.push(numbers[i])
        } else if (i < 10) {
            thirdPart.push(numbers[i])
        } else {
            console.log("nah")
        }        
    }
    
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])