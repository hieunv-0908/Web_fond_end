console.log("Các số Armstrong có 3 chữ số:");
for (let num = 100; num <= 999; num++) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        console.log(num);
    }
}