let employees = [];

function addEmployee() {
  let name = prompt("Nhập tên nhân viên:");
  let position = prompt("Nhập vị trí công việc:");
  let salary = +prompt("Nhập mức lương:");
  let newEmployee = { id: employees.length + 1, name, position, salary };
  employees.push(newEmployee);
  console.log("Danh sách nhân viên:", employees);
}

function deleteEmployee() {
  let id = +prompt("Nhập ID nhân viên muốn xóa:");
  let index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
    console.log("Đã xóa nhân viên. Danh sách còn lại:", employees);
  } else {
    console.log("Không tìm thấy nhân viên!");
  }
}

function updateSalary() {
  let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
  let employee = employees.find(emp => emp.id === id);
  if (employee) {
    employee.salary = +prompt("Nhập mức lương mới:");
    console.log("Danh sách sau khi cập nhật:", employees);
  } else {
    console.log("Không tìm thấy nhân viên!");
  }
}

function searchEmployee() {
  let name = prompt("Nhập tên nhân viên cần tìm:").toLowerCase();
  let results = employees.filter(emp => emp.name.toLowerCase().includes(name));
  console.log("Nhân viên tìm thấy:", results);
}

function menu() {
  let choice;
  do {
    choice = +prompt(
      "1. Thêm nhân viên\n2. Xóa nhân viên\n3. Cập nhật lương\n4. Tìm kiếm nhân viên\n5. Thoát\nChọn:"
    );
    switch (choice) {
      case 1: addEmployee(); break;
      case 2: deleteEmployee(); break;
      case 3: updateSalary(); break;
      case 4: searchEmployee(); break;
      case 5: console.log("Thoát chương trình!"); break;
      default: console.log("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 5);
}

menu();