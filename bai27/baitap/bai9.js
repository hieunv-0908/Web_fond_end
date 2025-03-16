let array = [];
let n = +prompt("Mời nhập vào số lượng phần tử cần them vào trong mảng.");
let even_array = [];
let array_even_index=0;
for (let i = 0; i < n; i++) {
  let array_element_temp = +prompt(`Mời nhập vào phần tử thứ:${i + 1}`);
  if (isNaN(array_element_temp)) {
    console.log("Đầu vào không hợp lệ.");
  } else {
    array.push(array_element_temp);
  }
}
even_array = array.filter((element) => element % 2 === 0);
even_array.sort((a, b) => a - b);
console.log(even_array);
for (let index in array) {
  if (array[index] % 2 == 0) {
    array[index] = even_array[array_even_index];
    array_even_index++;
  }
}
console.log(array);
