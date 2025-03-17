let products = [];
let currentId = 1;

function main() {
  let choice;
  do {
    choice = +prompt(
      "1. Thêm sản phẩm\n" +
        "2. Hiển thị tất cả sản phẩm\n" +
        "3. Hiển thị chi tiết sản phẩm theo ID\n" +
        "4. Cập nhật sản phẩm theo ID\n" +
        "5. Xóa sản phẩm theo ID\n" +
        "6. Lọc sản phẩm theo khoảng giá\n" +
        "7. Thoát\n" +
        "Mời bạn chọn: "
    );
    switch (choice) {
      case 1:
        addProduct();
        break;
      case 2:
        showAllProducts();
        break;
      case 3:
        showProductById();
        break;
      case 4:
        updateProductById();
        break;
      case 5:
        deleteProductById();
        break;
      case 6:
        filterProductsByPrice();
        break;
      case 7:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (choice !== 7);
}

function addProduct() {
  let name = prompt("Nhập tên sản phẩm:");
  let price = parseFloat(prompt("Nhập giá sản phẩm:"));
  let category = prompt("Nhập danh mục sản phẩm:");
  let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));

  let product = { id: currentId++, name, price, category, quantity };
  products.push(product);
  console.log("Thêm sản phẩm thành công.");
}

function showAllProducts() {
  console.log("Danh sách sản phẩm:", products);
}

function showProductById() {
  let id = parseInt(prompt("Nhập ID sản phẩm:"));
  let product = products.find((p) => p.id === id);
  product ? console.log("Chi tiết sản phẩm:", product) : console.log("Không tìm thấy sản phẩm.");
}

function updateProductById() {
  let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
  let product = products.find((p) => p.id === id);
  if (product) {
    product.name = prompt("Nhập tên mới:", product.name) || product.name;
    product.price = parseFloat(prompt("Nhập giá mới:", product.price)) || product.price;
    product.category = prompt("Nhập danh mục mới:", product.category) || product.category;
    product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity)) || product.quantity;
    console.log("Cập nhật sản phẩm thành công.");
  } else {
    console.log("Không tìm thấy sản phẩm.");
  }
}

function deleteProductById() {
  let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
  let index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    console.log("Xóa sản phẩm thành công.");
  } else {
    console.log("Không tìm thấy sản phẩm.");
  }
}

function filterProductsByPrice() {
  let minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
  let maxPrice = parseFloat(prompt("Nhập giá tối đa:"));
  let filteredProducts = products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
  console.log("Sản phẩm trong khoảng giá:", filteredProducts);
}

main();