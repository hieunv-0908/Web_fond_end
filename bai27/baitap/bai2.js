let inputStudents = (array) => {
    let n = +prompt("Mời nhập vào số lượng phần tử cần thêm.");
    for (let i = 0; i < n; i++) {
      array.push(prompt(`Mời nhập vào tên đầy đủ của học sinh thứ ${i + 1}`));
    }
  };
  
  let printfStudents = (array) => {
    if (array.length == 0) {
      alert("Danh sách rỗng!!");
    } else {
      array.forEach((name_student_array, index) => {
        console.log(`${index + 1}.${name_student_array} `);
      });
    }
  };
  
  let search_name_student = (array) => {
    if (array.length == 0) {
      console.log("Mảng rỗng");
    } else {
      let name_search = prompt("Mời nhập vào tên muốn tìm kiếm:");
      if (array.some((is_in_array) => is_in_array === name_search)) {
        alert("Sinh viên có trong danh sách.");
        console.log(name_search);
      } else {
        alert("Sinh viên không có trong danh sách.");
      }
    }
  };
  
  let delete_student = (array) => {
    if (array.length == 0) {
      alert("Danh sách rỗng, không thể xóa!");
      return;
    }
    let name_delete = prompt("Mời nhập vào tên sinh viên cần xóa:");
    let index = array.indexOf(name_delete);
    if (index !== -1) {
      array.splice(index, 1);
      alert("Đã xóa sinh viên khỏi danh sách.");
    } else {
      alert("Không tìm thấy sinh viên trong danh sách.");
    }
  };
  
  let array = [];
  let choice;
  do {
    choice = +prompt(
      "1.Nhập danh sách sinh viên.\n2.Hiển thị danh sách sinh viên.\n3.Tìm sinh viên theo tên.\n4.Xóa sinh viên khỏi danh sách.\n5.Thoát."
    );
    switch (choice) {
      case 1:
        inputStudents(array);
        break;
      case 2:
        printfStudents(array);
        break;
      case 3:
        search_name_student(array);
        break;
      case 4:
        delete_student(array);
        break;
      case 5:
        break;
      default:
        alert("Lựa chọn không hợp lệ!!!");
        break;
    }
  } while (choice != 5);