let numberFirst = +prompt("nhap vao so thu nhat");
let numberSecond = +prompt("nhap vao so thu hai");

let min = Math.min(numberFirst, numberSecond);
let max = Math.max(numberFirst, numberSecond);

let numberRandom = Math.random(max, min) * (max - min) + min;
document.write(numberRandom);