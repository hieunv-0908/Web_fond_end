let n = parseInt(prompt("Nhập số nguyên n: "));
let count = 0, num = 2;
console.log(`${n} số nguyên tố đầu tiên là:`);

while (count < n) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
        count++;
    }
    num++;
}
