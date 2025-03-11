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
        "4. Tính tổng các phần tử trên đường chéo chinh.\n" +
        "5. Tính tổng các phần tử trên đường chéo phụ.\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột \n" +
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
            let sum_mainDiagonal_diagonal = 0;
            if (cols != row) {
                alert("Không thể tính tổng vì mảng không phải matrix vuông.");
            } else {
                for (let i = 0; i < row; i++) {
                    sum_mainDiagonal_diagonal += array[i][i];
                }
            }
            alert("Số tổng đường chéo chính:" + sum_mainDiagonal_diagonal + "");
            break;

        case 5:
            let sum_secondary_diagonal = 0;
            if (cols != row) {
                alert("Không thể tính tổng vì mảng không phải matrix vuông.");
            } else {
                for (let i = 0; i < row; i++) {
                    sum_secondary_diagonal += array[i][cols - 1 - i];
                }
                alert("Số tổng đường chéo phụ:" + sum_secondary_diagonal + "")
            }
            break;
        
        case 6:
            let select = +prompt("MỜi bạn nhập lựa chọn tính tổng hàng hoặc cột (1.Hàng 2.Cột):");
            switch (select) {
                case 1:
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
                
                case 2:
                    let selected_cols = +prompt("Mời nhập vào cột muốn tính trung bình cộng:");
                    if (selected_cols < 0 || selected_cols >= cols || isNaN(selected_cols)) {
                        alert("Hàng nhập vào không hợp lệ!!");
                    } else {
                        let sum = 0;
                        let average = 0;
                        for (let i = 0; i < cols; i++) {
                            sum += array[i][selected_cols];
                        }
                        average = sum / row;
                        alert("Trung bình cộng của phần tử trong hàng " + selected_cols + ":" + average + "");
                    }
                    break;
                default:
                    break;
            }
            break;


        case 7:

            break;
        default:
            alert("Lựa chon có lỗi vui lòng nhập lại.");


    }
} while (choice != 7)