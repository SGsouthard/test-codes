function solution(n) {
    let num = Array.from(String(n), Number);
    let sum = 0;
    // console.log(num)

    num.forEach(item => {
        sum += item;
    });

    // console.log(sum)
    return sum;
}

console.log(solution(29));