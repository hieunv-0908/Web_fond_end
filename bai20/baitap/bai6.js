let inputNum = +prompt("Mời bạn nhập vào một số nguyên bất kì (>1) :");
let flaf = 1;
if (isNaN(inputNum) || inputNum <= 1 || !Number.isInteger(inputNum)) {
    document.write("Đầu vào không hợp lệ!!!");
    // throw new Error("Dừng chương trình ngay lập tức!");
    window.stop();
} else {
    for (let i = 2; i < inputNum; i++) {
        if (inputNum !== 2 && inputNum % i === 0) {
            flaf = -1;
            break;
        }
    }
}
if (flaf == -1) {
    document.write("Số " + inputNum + " không phải một số nguyên tố.");
} else if (flaf == 1) {
    document.write("Số " + inputNum + " là một số nguyên tố.");
}