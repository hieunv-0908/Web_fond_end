let array = [];
let string = "abc";
let n = +prompt(`Mời nhập vào số lượng phần tử trong mảng:`);
if (array.length != 0 || Array.isArray(array)) {
  for (let i = 0; i < n; i++) {
    let str_element_array = prompt(`Mời nhập vào vị trí thứ ${i + 1}`);
    array.push(str_element_array);
  }
  let array_temp = array.filter((str) => str.length > 5);
  console.log(array_temp);
} else {
  console.log("Mảng Rỗng.");
}

if (string.length == 0 || !Array.isArray(string)) {
  console.log("Không phải mảng.");
} else {
  for (let i = 0; i < n; i++) {
    let str_element_array = prompt(`Mời nhập vào vị trí thứ ${i + 1}`);
    array.push(str_element_array);
  }
  let array_temp = array.filter((str) => str.length > 5);
  console.log(array_temp);
}
