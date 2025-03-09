let arr = [];
do {
    let select = +prompt("1. Thêm phần tử vào mảng. 2. Hiển thị mảng<br> 3. Thêm phần tử.<br> 4. Sửa phần tử.<br> 5. Xoá phần tử.<br> 6. Thoát<br> Mời bạn nhập vào lựa chọn:");
    switch (select) {
        case 1:
            let n = +prompt("Nhập vào số phần tử của mảng:");
            if (n <= 0 || isNaN(n) || !Number.isInteger(n)) {
                alert("Số phần tử không hợp lệ!");
                break;
            } else {
                for (let i = 0; i < n; i++) {
                    arr[i] = prompt("Nhập vào phần tử thứ " + i + ":");
                }
            }
            break;

        case 2:
            if (arr.length === 0) {
                alert("Mảng rỗng!");
            } else {
                alert("Mảng vừa nhập là: " + arr);
            }
            break;

        case 3:
            let select_index_add = +prompt("Nhập vào vị trí cần thêm:");
            let value_add = prompt("Nhập vào giá trị cần thêm:");
            if (select_index_add < 0 || select_index_add > arr.length || isNaN(select_index_add) || !Number.isInteger(select_index_add)) {
                alert("Vị trí không hợp lệ!");
                break;
            } else {
                arr.splice(select_index_add, 0, value_add);
            }
            break;

        case 4:

            let select_index_edit = +prompt("Nhập vào vị trí cần sửa:");
            let value_edit = prompt("Nhập vào giá trị cần sửa:");
            if (select_index_edit < 0 || select_index_edit > arr.length || isNaN(select_index_edit) || !Number.isInteger(select_index_edit)) {
                alert("Vị trí không hợp lệ!");
                break;
            } else {
                arr.splice(select_index_edit, 1, value_edit);
            }
            break;

        case 5:
            let select_index_delete = +prompt("Nhập vào vị trí cần xóa:");
            if (select_index_delete < 0 || select_index_delete > arr.length || isNaN(select_index_delete) || !Number.isInteger(select_index_delete)) {
                alert("Vị trí không hợp lệ!");
                break;
            } else {
                arr.splice(select_index_delete, 1);
            }
            break;

        case 6:
            document.write("Cảm ơn bạn đã sử dụng dịch vụ!");
            // window.close();
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
    if (select==6) {
        break;
    }
} while (true);


