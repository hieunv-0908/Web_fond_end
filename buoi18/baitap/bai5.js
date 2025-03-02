let year = prompt("Mời nhập vào số năm kinh nghiệm của nhân viên:");
if (year < 1) {
    document.write("Mới vào nghề");
} else if (year >= 1 && year <= 3) {
    document.write("Nhân viên có kinh nghiệm");
} else if (year >= 4 && year <= 6) {
    document.write("Chuyên viên");
} else if (year > 6) {
    document.write("Quản lý");
};