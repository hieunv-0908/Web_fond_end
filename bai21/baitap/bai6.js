let num = parseInt(prompt("Nhập vào một số nguyên: "));
console.log(`Các ước của ${num} là:`);
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}
