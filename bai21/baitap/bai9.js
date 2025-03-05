console.log("Các số Armstrong có 3 chữ số:");

for (let num = 100; num < 1000; num++) {
    let strNum = num.toString();
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), 3);
    }

    if (sum === num) {
        console.log(num);
    }
}