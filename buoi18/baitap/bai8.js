let canhGocVuong1 = +prompt("Mời bạn nhập vào cạnh góc vuông thứ nhất:"), canhGocVuong2 = +prompt("Mời bạn nhập vào cạnh góc vuông thứ hai:");
let canhHuyen = +prompt("Mời bạn nhập vào cạnh huyền:");
if (canhGocVuong1 == canhGocVuong2 && canhGocVuong1 == canhHuyen) {
    document.write("<li><b>Tam giác đều</b></>");
} else if (canhGocVuong1 == canhGocVuong2) {
    document.write("<li><b>Tam giác cân</b></li>");
} else if (Math.pow(canhHuyen, 2) == Math.pow(canhGocVuong1, 2) + Math.pow(canhGocVuong2, 2)) {
    document.write("<li><b>Tam giác vuông</b></li>");
} else {
    document.write("<li><b>Tam giác thường</b></li>");
}
