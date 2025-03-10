let array = [];
let choice;
let rever_Array;
do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng số nguyên\n" +
        "3. Tìm số lớn nhất và chỉ số của nso\n" +
        "4. TỔng và trung tbình cộngc ủa các số nguyên\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có là số đối xứng\n" +
        "7. Thoát\n" +
        "===========================================\n" +
        "Lựa chọn của bạn:"
    );
    switch (choice) {
        case 1:
            let n = +prompt("Mời bạn nhập vào số phần tử muốn nhập vào mảng:");
            if (n < 0 || n == 0 || isNaN(n) && !Number.isInteger) {
                alert("Số phần tử muốn nhập lỗi!!!");
            } else {
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
                    if (!Number.isInteger(array[i])) {
                        break;
                    }
                }
            }
            break;
        case 2:
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                alert("Các phần tử trong mảng: " + array + "");
            }
            break;
        case 3:
            let number_Max = array[0];
            let index_Max;
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                for (let i = 1; i < array.length; i++) {
                    if (number_Max < array[i]) {
                        number_Max = array[i];
                        index_Max = i;
                    }
                }
                alert("SỐ lớn nhất:" + number_Max + " chỉ số " + index_Max + "");
            }

            break;
        case 4:
            let sum = 0;
            let average;
            let count_average = 0;
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > 0) {
                        sum += array[i];
                        count_average++;
                    }
                }
                average = sum / count_average;
                alert("Sum " + sum + " Average: " + average.toFixed(2) + " ")
            }
            break;
        case 5:
            rever_Array = array.reverse();
            if (array.length == 0) {
                alert("Mảng rỗng");
            } else {
                alert(rever_Array);
            }
            break;
        case 6:
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                let isSymmetric = true; 
                for (let i = 0; i < Math.floor(array.length / 2); i++) {
                    if (array[i] !== array[array.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }

                if (isSymmetric) {
                    alert("Mảng đối xứng.");
                } else {
                    alert("Mảng không đối xứng.");
                }
            }
            break;
        case 7:
            alert("Thoát trương trình!!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!!!!");
            break;
    }
} while (choice != 7)