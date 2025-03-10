let arr = [];
let n = +prompt("Mời bạn nhập vào Số lượng phần tử kí tự trong mảng.");
let arr_Number = [];
if (n == 0) {
    alert("Không có ký tự nào là kí tự số.");
} else if (n < 0 || isNaN(n)) {
    alert("Số lượng kí tự nhập vào không hợp lệ.");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
        if (arr[i].length == 1) {
            if (!isNaN(+arr[i])) {
                arr_Number.push(arr[i]);
            }
        }
    }
}
alert(arr_Number);