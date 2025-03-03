let a = +prompt("Mời nhập a"), b = +prompt("Mời nhập b"), c = +prompt("Mời nhập c");
// let max = a;
// if (a < b) {
//     max = b;
//     if (b < c) {
//         max = c;
//     }
// }
// document.write("Số " + max + " lớn nhất trong ba chữ số.")

let max = a > b ? (a > c ? a : c) : b > c ? b : c;
document.write("Số " + max + " lớn nhất trong ba chữ số.");

