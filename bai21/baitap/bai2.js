let num;
let countEven = 0;
let countOdd = 0;
alert("Mời bạn nhập vào 5 số nguyên (>0)");
for (let i = 0; i < 5; i++) {
    num = +prompt();
    if (num <= 0 || isNaN(num)) {
        alert("Số này đã nhập sai yêu cầu.");
    } else {
        if (num % 2 == 0) {
            countEven += 1;
        } else {
            countOdd += 1;
        }
    }
}
document.write("Số lượng số chẵn là:", countEven);
document.write("Số lượng số lẻ là:", countOdd);