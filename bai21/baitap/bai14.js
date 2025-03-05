var width = parseInt(prompt("Nhập chiều ngang của hình chữ nhật:"));
var height = parseInt(prompt("Nhập chiều dọc của hình chữ nhật:"));

for (var i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        document.write("*".repeat(width) + "<br>");
    } else {
        document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
    }
}