
let array = [];
let n = +prompt("Mời nhập vào số phần tử của mảng:");
if (n <= 0 || isNaN(n)) {
    alert("Số phần tử cần nhập vào không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        array[i]= +prompt(`Mời nhập vào phần tử thứ ${i + 1}`);
    }
    alert(min_number(array));
}

function min_number(array_function = []) {
    if (!Array.isArray(array_function)) {
        alert("Dữ liện không hợp lệ.");
        return;
    } else if (array_function.length == 0) {
        alert("Mảng rỗng");
        return;
    } else {
        let min_number = array_function[0];
        for (let i = 0; i < array_function.length; i++) {
            if (min_number > array_function[i]) {
                min_number = array_function[i];
            }
        }
        return min_number;
    }

}


