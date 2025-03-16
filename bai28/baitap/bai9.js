let books = [];
let idCounter = 1;

function addBook() {
  let title = prompt("Nhập tên sách:");
  let author = prompt("Nhập tên tác giả:");
  let year = +prompt("Nhập năm xuất bản:");
  let price = +prompt("Nhập giá sách:");
  let isAvailable = true;

  let newBook = { id: idCounter++, title, author, year, price, isAvailable };
  books.push(newBook);
  console.log("Danh sách sách sau khi thêm:", books);
}

function displayBooks() {
  console.log("Danh sách sách trong thư viện:", books);
}

function searchBook() {
  let title = prompt("Nhập tiêu đề sách cần tìm:").toLowerCase();
  let results = books.filter(book => book.title.toLowerCase().includes(title));
  console.log("Kết quả tìm kiếm:", results);
}

function updateBookStatus() {
  let id = +prompt("Nhập ID sách cần cập nhật trạng thái:");
  let book = books.find(book => book.id === id);
  if (book) {
    book.isAvailable = !book.isAvailable;
    console.log("Trạng thái sách sau khi cập nhật:", books);
  } else {
    console.log("Không tìm thấy sách!");
  }
}

function deleteBook() {
  let id = +prompt("Nhập ID sách cần xóa:");
  let index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    console.log("Danh sách sách sau khi xóa:", books);
  } else {
    console.log("Không tìm thấy sách!");
  }
}

function sortBooksByPrice() {
  books.sort((a, b) => a.price - b.price);
  console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần:", books);
}

function menu() {
  let choice;
  do {
    choice = +prompt(
      "1. Thêm sách mới\n2. Hiển thị danh sách\n3. Tìm kiếm sách\n4. Cập nhật trạng thái\n5. Xóa sách\n6. Sắp xếp sách theo giá\n7. Thoát\nNhập lựa chọn:" 
    );
    switch (choice) {
      case 1: addBook(); break;
      case 2: displayBooks(); break;
      case 3: searchBook(); break;
      case 4: updateBookStatus(); break;
      case 5: deleteBook(); break;
      case 6: sortBooksByPrice(); break;
      case 7: console.log("Thoát chương trình!"); break;
      default: console.log("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 7);
}

menu();