let array = [];
let n = +prompt("Mời nhập vào số lượng phần tử trong mảng:");
for (let i = 0; i < n; i++) {
  let element_array_temp = Number(prompt(`Mời nhập vào phần tử thứ ${i + 1} `));
  if (isNaN(element_array_temp)) {
    console.log("Đầu vào lỗi!!");
    i--;
  } else {
    array.push(element_array_temp);
  }
}
let array_temp = array.filter((item) => item >= 10);
console.log("Mảng sau khi thay đổi",array_temp);
