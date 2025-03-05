alert("Mời bạn nhập vào 5 số nguyên (>0)");
let num;
let sum=0;
for (let i = 0; i < 5; i++) {
    num = +prompt();
    if (num <= 0 || isNaN(num)) {
        alert("Số này đã nhập sai yêu cầu.");
    } else {
        if (num % 2 !== 0) {
            document.write(num, "</br>");
            sum += num;
        }
    }
}
document.write("Tổng các số lẻ là:",sum);