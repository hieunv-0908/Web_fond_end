const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

let num = parseInt(prompt("Nhập số từ 0 đến 999:"));
let words = "";

if (isNaN(num) || num < 0 || num > 999) {
    words = "Vui lòng nhập số hợp lệ!";
} else if (num === 0) {
    words = "không";
} else {
    if (num >= 100) {
        words += ones[Math.floor(num / 100)] + " trăm ";
        num %= 100;
    }
    if (num >= 10 && num < 20) {
        words += teens[num - 10];
    } else {
        if (num >= 20) {
            words += tens[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num > 0) {
            words += ones[num];
        }
    }
}

alert(words.trim());
