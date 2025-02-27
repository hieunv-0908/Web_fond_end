const r = parseFloat(prompt("Nhập bán kính: "));
const h = parseFloat(prompt("Nhập chiều cao: "));
const pi = Math.PI;

const chuViDay = 2 * pi * r;
document.write("Chu vi đáy: " + chuViDay.toFixed(2));

const dienTichXungQuanh = 2 * pi * r * h;
document.write("<br></br> Diện tích xung quanh: " + dienTichXungQuanh.toFixed(2));

const dienTichToanPhan = dienTichXungQuanh + 2 * pi * r * r;
document.write("<br></br> Diện tích toàn phần: " + dienTichToanPhan.toFixed(2));

const theTich = pi * r * r * h;
document.write("<br></br> Thể tích hình trụ: " + theTich.toFixed(2));