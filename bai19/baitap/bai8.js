let month = +prompt("Mời nhập vào số tháng:");
if (month < 12 && month > 0) {
    if (month >= 1 && month <= 3) {
        document.write("Vào tháng này đang là mùa Xuân.", "<br>");
    } else if (month >= 4 && month <= 6) {
        document.write("Vào tháng này đang là mùa Hè.", "<br>");
    } else if (month >= 7 && month <= 9) {
        document.write("Vào tháng này đang là mùa Thu.", "<br>");
    } else if (month >= 10 && month <= 12) {
        document.write("Vào tháng này đang là mùa Đông.", "<br>");
    }
} else {
    document.write("Tháng không hợp lệ(có thể lớn hoặc nhỏ hơn số tháng thực tế 1-12)")
}