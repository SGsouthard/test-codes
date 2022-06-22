let Array = ['green', 'yellow', 'black', 'blue', 'red', 'purple', 'orange', 'turquoise', 'silver']
let newArray = [];
// console.log(Array, "------")

function arrayLoop(arr){
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] <= 3) {
            newArray.push(arr[i]);
            console.log("new array", newArray)
        }
    }
    
};

arrayLoop(Array)