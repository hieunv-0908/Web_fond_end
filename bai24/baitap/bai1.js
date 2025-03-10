let array = [];
let choice
do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6.  Sắp xếp mảng tăng dần\n" +
        "7. Thoát\n" +
        "============================================\n" +
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
            let min_Number;
            let max_Number;
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                array = array.sort((a, b) => a - b);
                min_Number = array[0];
                max_Number = array[array.length - 1];
                alert("Max=" + max_Number + " \n" + "Min=" + min_Number + "\n");
            }

            break;

        case 4:
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            alert("Sum: " + sum + " ")
            break;

        case 5:
            let number_Search = +prompt("Mời nhập vào số bạn muốn kiểm tra:");
            let count = 0;
            if (isNaN(number_Search)) {
                break;
            } else if (array.length == 0) {
                alert("Mảng rỗng");
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == number_Search) {
                        count++;
                    }
                }
                if (count == 0) {
                    alert("Phần tử " + number_Search + " không xuất hiện trong mảng.");
                } else {
                    alert("Số lần xuất hiện của phàn tử " + number_Search + " là " + count + " lần.");
                }

            }

            break;

        case 6:
            array = array.sort((a, b) => a - b);
            break;

        case 7:
            alert("Thoát trương trình!!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!!!!");
            break;
    }
} while (choice != 7)