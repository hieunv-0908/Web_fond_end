let input = +prompt("Mời nhập vào số giới hạn:");
if (input <= 0 || Number(input) === "NaN") {
    document.write("Có vẻ bạn nhập không đúng định dạng:");
} else if (Number.isInteger(input)) {
    for (let i = 0; i <= input; i++) {
        if (i > 0 && i % 5 === 0) {
            document.write("Số chia hết cho 5: ", i);
        }
    }
} else {
    document.write("Có vẻ bạn nhập không đúng định dạng:");;
}