var menhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]; 
var soTien = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000):"));

if (soTien % 1000 !== 0 || isNaN(soTien) || soTien <= 0) {
    document.write("Số tiền nhập vào không hợp lệ! Vui lòng nhập số chia hết cho 1000.");
} else {
    document.write("<h2>Kết quả rút tiền:</h2>");
    for (var i = 0; i < menhGia.length; i++) {
        var soTo = Math.floor(soTien / menhGia[i]);
        if (soTo > 0) {
            document.write(menhGia[i].toLocaleString("vi-VN") + " - " + soTo + " tờ<br>");
            soTien -= soTo * menhGia[i]; 
        }
    }
}