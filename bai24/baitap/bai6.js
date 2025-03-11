let array = "";
let choice;
do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một kí tự trong chuỗi.\n" +
        "5. Kiểm tra chuỗi có phải chuỗi chuỗi đối xứng không\n" +
        "6. Chuyển đổi các kí tự đầy tiên thành kí tự viaats hoa\n" +
        "7. Thoát chương trình\n" +
        "===========================================\n" +
        "Lựa chọn của bạn:"
    );
    switch (choice) {
        case 1:
            array = prompt("Mời nhập vào chuỗi:");
            break;
        case 2:
            alert(array);
            break;

        case 3:
            let len = array.length.trim();
            alert("ĐỘ dài"+len+"");
            break;

        case 4:
            
            break;

        case 5:
            
            break;

        case 6:
            
            break;


        case 7:

            break;
        default:
            alert("Lựa chon có lỗi vui lòng nhập lại.");


    }
} while (choice != 7)