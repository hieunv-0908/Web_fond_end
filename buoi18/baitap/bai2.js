let toan = +prompt("moi nhap vao diem toan:"), van = +prompt("moi nhap vao diem van:"), anh = +prompt("moi nhap vao diem anh:");
let diemTb = (toan + van + anh) / 3;
if(diemTb>=8){
    document.write("Giỏi");
} else if (diemTb >=6.5 && diemTb <=7.5) {
    document.write("Khá");
} else if (diemTb >= 5 && diemTb <= 6.4) {
    document.write("trung bình");
} else if (diemTb <5) {
    document.write("Yếu");
}