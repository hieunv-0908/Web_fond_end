let array = [];
let n = +prompt("Mời nhập vào số phần tử của mảng:");
if (n <= 0 || isNaN(n)) {
    alert("Số phần tử cần nhập vào không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        array[i] = +prompt(`Mời nhập vào phần tử thứ ${i + 1}`);
    }
    alert(even_number(array));
}

function even_number(array_function = []) {
    let arrayTemp = [];
    if (array_function.length = 0) {
        alert("Mảng rỗng.");
    } else if (!Array.isArray(array_function) || array_function < 0) {
        alert("Đầu vào lỗi!!");
    } else {
        for (let i = 0; i < array_function.length; i++) {
            if (array_function[i] % 2 == 0) {
                arrayTemp.push(array_function[i]);
            }
        }
        return arrayTemp;
    }
}
    
