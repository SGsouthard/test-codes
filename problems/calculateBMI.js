/*

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    w = weight
    h = height

    bmi = w / (h ** 2)
    bmi = Math.round(bmi * 10) / 10

    let statement = ""

    if (bmi <= 18.5) {
        statement = "Underweight"
    } else if (bmi <= 25.0) {
        statement = "Normal"
    } else if (bmi <= 30.0) {
        statement = "Overweight"
    } else {
        statement = "Obese"
    }
    
    return statement
}

console.log("weight = 80, height = 1.80", bmi(80, 1.80))