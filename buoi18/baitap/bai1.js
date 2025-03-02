let a = +prompt("Moi ban nhap vao mot so nguyen ngau nhien:");
if (Number.isInteger(a)) {
    if (a % 2 == 0) {
        document.write("Số " + a + " là số chẵn");
    } else {
        document.write("số " + a + " là số lẻ")
    }
}
