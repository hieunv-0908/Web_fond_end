let a = +prompt("nhập a"), b = +prompt("nhập b"), c = +prompt("nhập c");
let delta = (b * b) - 4 * a * c;;
let x, x1, x2;
if (a == 0) {
    if (b == 0) {
        if (c !== 0) {
            document.write("Phương trình vô nghiệm.");
        } else {
            document.write("Phương trình có vô số nghiệm.");
        }
    } else {
        x = -c / b;
        document.write("x :", x);
    }
} else {
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write("x1 :", x1, "</br>");
        document.write("x2 :", x2, "</br>");
    } else if (delta < 0) {
        document.write("Phương trình vô nghiệm.");
    } else if (delta == 0) {
        x = -b / (2 * a);
        document.write("x :", x, "</br>");
    }
}
