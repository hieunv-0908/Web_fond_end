function main() {
  let choice;
  do {
    choice = +prompt(
      "1. Thêm đối tượng Contact vào danh sách liên hệ.\n" +
        "2. Hiển thị danh sách danh bạ.\n" +
        "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
        "4. Cập nhật thông tin Contact(name, email, phone) theo id.\n" +
        "5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.\n" +
        "6. Thoát\n" +
        "_______________\nMời bạn nhập vào lựa chọn của bạn:\n_______________\n"
    );
    switch (choice) {
      case 1:
        add_contact();
        break;
      case 2:
        show_contacts();
        break;
      case 3:
        search_phoneNumber();
        break;
      case 4:
        update_contact();
        break;
      case 5:
        delete_contact();
        break;
      case 6:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
        break;
    }
  } while (choice != 6);
}

function add_contact() {
  let n = +prompt("Mời nhập vào số lượng phần tử cần thêm:");
  for (let i = 0; i < n; i++) {
    let contact_temp = {
      id: ++current_length,
      name: prompt(`Mời nhập vào tên của contact thứ ${i}`),
      email: prompt(`Mời nhập vào email của contact thứ ${i}`),
      phoneNumber: prompt(`Mời nhập vào phoneNumber của contact thứ ${i}`),
    };
    contacts.push(contact_temp);
  }
}

function show_contacts() {
  console.log("Danh sách danh bạ:");
  contacts.forEach((contact) => {
    console.log(
      `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phoneNumber}`
    );
  });
}

function search_phoneNumber() {
  let search_phoneNumber = prompt("Nhập số điện thoại cần tìm:");
  let result = contacts.filter(
    (contact) => contact.phoneNumber === search_phoneNumber
  );
  if (result.length > 0) {
    console.log("Tài khoản tìm thấy", result);
  } else {
    console.log("Không tìm thấy số điện thoại trong danh bạ.");
  }
}

function update_contact() {
  let id = +prompt("Nhập ID của contact cần cập nhật:");
  let contact = contacts.find((c) => c.id === id);
  if (contact) {
    contact.name = prompt("Nhập tên mới:", contact.name);
    contact.email = prompt("Nhập email mới:", contact.email);
    contact.phoneNumber = prompt(
      "Nhập số điện thoại mới:",
      contact.phoneNumber
    );
    console.log("Cập nhật thành công!");
  } else {
    console.log("Không tìm thấy contact với ID này.");
  }
}

function delete_contact() {
  let id = +prompt("Nhập ID của contact cần xóa:");
  let index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Xóa thành công!");
  } else {
    console.log("Không tìm thấy contact với ID này.");
  }
}

let contacts = [];
let current_length = 0;

main();
