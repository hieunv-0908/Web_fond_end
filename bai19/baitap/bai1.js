let month = +prompt("Enter Month:");
let year = +prompt("Enter Year:");
if (year % 400 == 0) {
    document.write("Năm " + year + " là năm nhuận");
    switch (month) {
        case 1:
            document.write("Tháng Một có 31 ngày")
            break;
        case 2:
            document.write("Năm " + year + " là năm nhuận <br>");
            document.write("Tháng Hai có 29 ngày")
            break;
        case 3:
            document.write("Tháng Ba có 31 ngày")
            break;
        case 4:
            document.write("Tháng Bốn có 30 ngày")
            break;
        case 5:
            document.write("Tháng Năm có 31 ngày")
            break;
        case 6:
            document.write("Tháng sáu có 30 ngày")
            break;
        case 7:
            document.write("Tháng Bảy có 31 ngày")
            break;
        case 8:
            document.write("Tháng Tám có 31 ngày")
            break;
        case 9:
            document.write("Tháng Chín có 30 ngày")
            break;
        case 10:
            document.write("Tháng Mười có 31 ngày")
            break;
        case 11:
            document.write("Tháng Mười Một có 30 ngày")
            break;
        case 12:
            document.write("Tháng Mười Hai có 31 ngày")
            break;
        default:
            document.write("Tháng nhập vào không hợp lệ.")
            break;
    }
} else if (year % 4 == 0 && year % 100 != 0) {
    switch (month) {
        case 1:
            document.write("Tháng Một có 31 ngày")
            break;
        case 2:
            document.write("Năm " + year + " là năm nhuận<br>");
            document.write("Tháng Hai có 29 ngày")
            break;
        case 3:
            document.write("Tháng Ba có 31 ngày")
            break;
        case 4:
            document.write("Tháng Bốn có 30 ngày")
            break;
        case 5:
            document.write("Tháng Năm có 31 ngày")
            break;
        case 6:
            document.write("Tháng sáu có 30 ngày")
            break;
        case 7:
            document.write("Tháng Bảy có 31 ngày")
            break;
        case 8:
            document.write("Tháng Tám có 31 ngày")
            break;
        case 9:
            document.write("Tháng Chín có 30 ngày")
            break;
        case 10:
            document.write("Tháng Mười có 31 ngày")
            break;
        case 11:
            document.write("Tháng Mười Một có 30 ngày")
            break;
        case 12:
            document.write("Tháng Mười Hai có 31 ngày")
            break;
        default:
            document.write("Tháng nhập vào không hợp lệ.")
            break;
    }
} else {
    switch (month) {
        case 1:
            document.write("Tháng Một có 31 ngày")
            break;
        case 2:
            document.write("Năm " + year + " không là năm nhuận<br>");
            document.write("Tháng Hai có 28 ngày")
            break;
        case 3:
            document.write("Tháng Ba có 31 ngày")
            break;
        case 4:
            document.write("Tháng Bốn có 30 ngày")
            break;
        case 5:
            document.write("Tháng Năm có 31 ngày")
            break;
        case 6:
            document.write("Tháng sáu có 30 ngày")
            break;
        case 7:
            document.write("Tháng Bảy có 31 ngày")
            break;
        case 8:
            document.write("Tháng Tám có 31 ngày")
            break;
        case 9:
            document.write("Tháng Chín có 30 ngày")
            break;
        case 10:
            document.write("Tháng Mười có 31 ngày")
            break;
        case 11:
            document.write("Tháng Mười Một có 30 ngày")
            break;
        case 12:
            document.write("Tháng Mười Hai có 31 ngày")
            break;
        default:
            document.write("Tháng nhập vào không hợp lệ.")
            break;
    }
}

