let a = +prompt("Mời bạn nhập vào số a:"), b = +prompt("Mời bạn nhập vào số b:"), operator = prompt("Mời bạn nhập vào phép toàn mong muốn:(+ ,- ,* ,/)");
let result;
if (operator === "+") {
    result = a + b;
    alert("Kết quả của phép tính trên: a + b = " + result + " (nếu kết quả là NaN hãy kiểm tra lại số bạn đã nhập vào)");
} else if (operator === "-") {
    result = a - b;
    alert("Kết quả của phép tính trên: a - b = " + result + "  (nếu kết quả là NaN hãy kiểm tra lại số bạn đã nhập vào) " );
} else if (operator === "*") {
    result = a * b;
    alert("Kết quả của phép tính trên: a * b = " + result + "  (nếu kết quả là NaN hãy kiểm tra lại số bạn đã nhập vào) ");
} else if (operator === "/") {
    if (b === 0) {
        alert("Phép toán không hợp lệ (có thể bạn nhập b = 0 (phép chia không thể chia cho 0))");
    } else {
        result = a / b;
        alert("Kết quả của phép tính trên: a / b = " + result + "  (nếu kết quả là NaN hãy kiểm tra lại số bạn đã nhập vào) ");
    }

} else {
    alert("Phép toán không hợp lệ (có thể bạn nhập sai phép toán)");
}
