let count = 0;
let number = [];
let numberTemp = [];
for (let i = 0; i < 10; i++) {
    number[i] = +prompt("Nhập số thứ " + (i + 1));
    if (number[i] > 10) {
        numberTemp.push(number[i]);
        count++; 
    }
}
if (count === 0 || numberTemp.length === 0) {
    console.log("Không có số nào lớn hơn hoặc bằng 10");
} else {
    console.log("Số lượng phần tử lớn hơn hoặc bằng 10 là: " + count);
    console.log("Các phần tử lớn hơn hoặc bằng 10 là: " + numberTemp);
}
