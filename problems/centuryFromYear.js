function solution(year) {
    let yearCheck = year.toString().length;
    if (yearCheck == 4) {
        let centuryYear = year / 100;
        if (Number.isInteger(centuryYear) === true) {
            console.log("The answer is " + centuryYear);
            return centuryYear;
        } else {
            centuryYear = Math.ceil(centuryYear);
            console.log("The answer is " + centuryYear);
            return centuryYear;
        }
    } else if (yearCheck <= 3) {
        let centuryYear = year / 100;
        if (Number.isInteger(centuryYear) === true) {
            console.log("The answer is " + centuryYear);
            return centuryYear;
        } else {
            centuryYear = Math.ceil(centuryYear);
            console.log("The answer is " + centuryYear);
            return centuryYear;
        }
    } else {
        let statement = "Not a valid year";
        console.log(statement);
        return statement;
    }
}

solution(1905);
solution(1700);
solution(400);
solution(969);
solution (152);
solution (20000);
