let firtNumber = 0, secondNumber = 1, temp;
let n = prompt("Mời nhập vào vị trí một số fibonacci");
if (n == 0) {
    document.write("f(", n, "):", n);
} else if (n == 1) {
    document.write("f(", n, "):", n);
} else {
    for (let i = 2; i <= n; i++) {
        temp = firtNumber + secondNumber;
        firtNumber = secondNumber;
        secondNumber = temp;
    }
    document.write("f(", n, "):", temp);
}
