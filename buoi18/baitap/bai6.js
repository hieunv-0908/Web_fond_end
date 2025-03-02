let year = +prompt();
if (year % 400 == 0) {
    document.write("Năm " + year + " là năm nhuận");
} else if (year % 4 == 0 && year % 100 != 0) {
    document.write("Năm " + year + " là năm nhuận");
} else {
    document.write("Năm " + year + " không là năm nhuận");
}