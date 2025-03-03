let enter = prompt("Nhập một ký tự:");

if (enter.length > 1) {
    document.write("Đây không phải một chữ cái. ");
    if (/\d/.test(enter)) {
        document.write("Đây là một chuỗi ký tự có chứa số.");
    } else {
        document.write("Đây là một chuỗi ký tự.");
    }
} else if (enter.length === 1 && isNaN(enter)) {
    document.write(enter + " là một chữ cái.");
} else {
    document.write("Đây là một số.");
}  