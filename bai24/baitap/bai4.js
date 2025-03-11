let array = [];
let choice;
let rever_Array;
let row;
let cols;
do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chie số của nó.\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "===========================================\n" +
        "Lựa chọn của bạn:"
    );
    switch (choice) {
        case 1:
            row = +prompt("Nhập vào hàng.");
            cols = +prompt("Nhập vào cột.");
            array = new Array(row);
            for (let i = 0; i < row; i++) {
                array[i] = new Array(cols);

            }
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < cols; j++) {
                    array[i][j] = +prompt("Mời nhập vào " + row * cols + " phần tử: ");
                }
            }
            break;
        case 2:
            if (array.length == 0) {
                alert("Mảng rỗng.");
            } else {
                let title = "Mảng 2 chiều \n";
                for (let i = 0; i < array.length; i++) {
                    title += array[i].join(" ") + "\n";
                }
                alert(title);
            }
            break;

        case 3:
            let sum = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += array[i][j];
                }
            }
            alert(sum);
            break;

        case 4:
            let number_Max = array[0][0];
            let row_max = 0;
            let cols_max = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < cols; j++) {
                    if (array[i][j] > number_Max) {
                        number_Max = array[i][j];
                        row_max = i;
                        cols_max = j;
                    }
                }
            }
            alert("Số lớn nhất" + number_Max + " ở vị trí " + row_max + "." + cols_max + "")
            break;

        case 5:
            let selected_row = +prompt("Mời nhập vào hàng muốn tính trung bình cộng:");
            if (selected_row >= row || selected_row < 0 || isNaN(selected_row)) {
                alert("Hàng nhập vào không hợp lệ!!")
            } else {
                let sum = 0;
                let average = 0;
                for (let i = 0; i < cols; i++) {
                    sum += array[selected_row][i];
                }
                average = sum / cols;

                alert("Trung bình cộng của phần tử trong hàng " + selected_row + ":" + average + "");
            }
            break;

        case 6:
            if (array.length === 0) {
                alert("Mảng chưa có dữ liệu!");
            } else {
                array.reverse(); 
                let result = "Mảng sau khi đảo ngược hàng:\n";
                for (let i = 0; i < array.length; i++) {
                    result += array[i].join(" ") + "\n"; 
                }
                alert(result);
            }
            break;
        
        case 7:

            break;
        default:
            alert("Lựa chon có lỗi vui lòng nhập lại.");


    }
} while (choice != 7)