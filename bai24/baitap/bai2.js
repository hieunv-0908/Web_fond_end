let array = [];
let choice
do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm số chẵn lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xoá phần tử tại vị trí chỉ định\n" +
        "6.  Tìm phần tử lớn thứ 2 trong mảng\n" +
        "7. Thoát\n" +
        "===========================================\n" +
        "Lựa chọn của bạn:"
    );
    switch (choice) {
        case 1:
            let n = +prompt("Mời bạn nhập vào số phần tử muốn nhập vào mảng:");
            if (n < 0 || n == 0 || isNaN(n)) {
                alert("Số phần tử muốn nhập lỗi!!!");
            } else {
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
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
            let even_Number_Array = [];
            let odd_Number_Array = [];
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 == 0) {
                        even_Number_Array.push(array[i]);
                    } else {
                        odd_Number_Array.push(array[i]);
                    }
                }
                alert("Even=" + even_Number_Array + " \n" + "Odd=" + odd_Number_Array + "\n");
            }

            break;

        case 4:
            let sum = 0;
            let average;
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                average = sum / array.length;
                alert("Average: " + average + " ")
            }
            break;

        case 5:
            let number_Assign = +prompt("Mời nhập vào vị trí bạn muốn xoá:");
            if (array.length == 0) {
                alert("Mảng rỗng");
            } else {
                if (isNaN(number_Assign)) {
                    alert("ikejfknsjd");
                    break;
                } else if (array.length == 0) {
                    alert("Mảng rỗng");
                } else if (number_Assign > array.length || number_Assign < 0) {
                    alert("Vị trí phần tử muốn xoá lỗi!!!");

                } else {
                    array.splice(number_Assign, 1);
                }
            }
            break;

        case 6:
            let second_Max_Number;
            array = array.sort((a, b) => a - b);
            second_Max_Number = array[array.length-2];
            alert(second_Max_Number);
            break;

        case 7:
            alert("Thoát trương trình!!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!!!!");
            break;
    }
} while (choice != 7)