let Array = ['green', 'yellow', 'black', 'blue', 'red', 'purple', 'orange', 'turquoise', 'silver']

function arrayLoop(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            newArray.push(arr[i]);
        } else {
            break;
        }
    }
    return newArray
};

arrayLoop(Array)
console.log(arrayLoop(Array))