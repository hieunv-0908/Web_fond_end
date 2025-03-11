let array = [];
for (let i = 0; i < 2; i++) {
    array[i] = +prompt(`Mời nhập vào phần tử thứ ${i + 1}`);
}
alert(sum_number(array));

function sum_number(array_function = [], sum = 0) {
    if (!Array.isArray(array_function)) {
        alert("Đầu vào lỗi!!");
    } else {
        for (let i = 0; i < array_function.length; i++) {
            if (isNaN(array_function[i]) || !Number.isInteger(array_function[i])) {
                return ("Dữ liệu không hợp lệ.");
            } else {
                sum += array[i]; 
            }
        }
        return sum;
    }
}
