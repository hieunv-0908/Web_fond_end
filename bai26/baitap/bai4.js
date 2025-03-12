let array = [];
let n = +prompt("Moi nhap vao so luong phan tu trong mang:");
for (let i = 0; i < n; i++) {
  array.push(+prompt(`Element ${i + 1}`));
}
let array_temp = array.filter((arr) => arr >= 2 && arr % 2 != 0);
console.log(array_temp);