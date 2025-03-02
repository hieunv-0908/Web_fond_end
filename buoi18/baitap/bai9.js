let hour = +prompt("Nhập giờ (0-23):");
let minute = +prompt("Nhập phút (0-59):");
let second = +prompt("Nhập giây (0-59):");

if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
    alert("Dữ liệu không hợp lệ. Vui lòng nhập lại!");
} else {
    let period;
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    let hour12;
    if (hour % 12 === 0) {
        hour12 = 12;
    } else {
        hour12 = hour % 12;
    }

    let minuteStr = minute.toString();
    if (minute < 10) {
        minuteStr = "0" + minute;
    }

    let secondStr = second.toString();
    if (second < 10) {
        secondStr = "0" + second;
    }

    let hourStr = hour12.toString();
    if (hour12 < 10) {
        hourStr = "0" + hour12;
    }

    let time12 = hourStr + ":" + minuteStr + ":" + secondStr + " " + period;

    document.write("<b>Giờ 12h:</b> " + time12);
}
