let a = +prompt("Mời nhập vào số đầu tiên:"), b = +prompt("Mời nhập vào số đầu tiên:");
let power = 1;
if (a === "NaN" || b === "NaN" || !Number.isInteger(a) || !Number.isInteger(b)) {
    document.write("Nhập vào không hợp lệ.</br>");
    document.write(a, b);
} else {
    if (a == 0) {
        if (b == 0) {
            document.write("Nhập vào không hợp lệ.a và b không thể đồng thời bằng không.</br>");
            // window.stop();
            throw new Error("Dừng chương trình ngay lập tức!");
        } else {
            power = 0;
        }
    } else if (b == 0) {
        power = 1;
    } else if (a > 0 && b > 0) {
        for (let i = 0; i < b; i++) {
            power *= a;
        }
    } else {
        for (let i = 0; i < -b; i++) {
            power *= a;
        }
        power = 1 / power;
    }
}
document.write("a:", a, "</br>", "b:", b, "</br>");
document.write("power:", power);