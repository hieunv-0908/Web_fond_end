// Lấy các phần tử từ DOM
const input = document.getElementById("input_add_category_name"); // Ô nhập tên category mới
const addBtn = document.querySelector("#add_category button"); // Nút thêm category
const table = document.getElementById("table_category"); // Bảng hiển thị category
const searchInput = document.getElementById("input_search_manage_category"); // Ô tìm kiếm
const editInput = document.getElementById("edit_category_name"); // Ô chỉnh sửa tên category

// Lấy các modal
const modalDelete = document.getElementById("modal_confirm_delete"); // Modal xác nhận xoá
const modalEdit = document.getElementById("modal_edit_category"); // Modal chỉnh sửa

// Lấy danh sách category từ localStorage hoặc khởi tạo mảng rỗng nếu chưa có
let categoryList = JSON.parse(localStorage.getItem("categories")) || []; // lấy danh sách chủ đề từ local
let selectedCategoryId = null; // Lưu ID của category được chọn để xoá/chỉnh sửa

// Chuyển đổi category dạng string sang object có id nếu dữ liệu cũ trong localStorage không chuẩn
categoryList = categoryList.map((cat) => {
  // tạo id và name cho các phần được lấy ra từ trên local tránh lỗi không có name và id
  if (typeof cat === "string") {
    return { id: Date.now() + Math.random(), name: cat };
  }
  return cat;
});
// Cập nhật lại dữ liệu sau khi chuyển đổi
localStorage.setItem("categories", JSON.stringify(categoryList)); // lưu lại thông tin vừa chuyển dổi vào lại local

// Hàm tạo ID ngẫu nhiên cho category
function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// Hàm hiển thị danh sách category trong bảng, có thể lọc theo từ khoá
function renderTable(filter = "") {
  // Xoá tất cả các dòng trừ dòng tiêu đề
  while (table.rows.length > 1) table.deleteRow(1);

  // Lọc và hiển thị các category khớp từ khoá
  categoryList
    .filter((cat) => cat.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((cat, index) => {
      const row = table.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td id="category-name-${cat.id}">${cat.name}</td>
        <td>
          <button onclick="openEditModal(${
            cat.id
          })"><i class="fa fa-edit"></i></button>
          <button onclick="openDeleteModal(${
            cat.id
          })" style="color:red;"><i class="fa fa-trash"></i></button>
        </td>
      `;
    });
}

// Hàm thêm category mới
function addCategory() {
  const name = input.value.trim();
  if (!name) return; // Không thêm nếu ô trống

  categoryList.push({ id: generateId(), name }); // Thêm vào mảng
  localStorage.setItem("categories", JSON.stringify(categoryList)); // Cập nhật localStorage
  input.value = ""; // Xoá ô nhập
  renderTable(searchInput.value); // Hiển thị lại bảng theo 
}

// Tìm category theo ID
function findCategory(id) {
  return categoryList.find((cat) => cat.id === id);
}

// Mở modal xác nhận xoá
function openDeleteModal(id) {
  selectedCategoryId = id;
  modalDelete.classList.remove("hidden");
}

// Đóng modal xác nhận xoá
function closeDeleteModal() {
  modalDelete.classList.add("hidden");
}

// Khi bấm xác nhận xoá trong modal
document.getElementById("confirm_delete_btn").onclick = function () {
  categoryList = categoryList.filter((cat) => cat.id !== selectedCategoryId); // Xoá khỏi danh sách
  localStorage.setItem("categories", JSON.stringify(categoryList)); // Cập nhật localStorage
  renderTable(searchInput.value); // Vẽ lại bảng
  closeDeleteModal(); // Đóng modal
};

// Mở modal chỉnh sửa
function openEditModal(id) {
  const cat = findCategory(id);
  if (!cat) return;
  selectedCategoryId = id;
  editInput.value = cat.name; // Gán tên hiện tại vào ô nhập
  modalEdit.classList.remove("hidden");
}

// Đóng modal chỉnh sửa
function closeEditModal() {
  modalEdit.classList.add("hidden");
}

// Khi bấm nút lưu trong modal chỉnh sửa
document.getElementById("save_edit_btn").onclick = function () {
  const newName = editInput.value.trim();
  if (!newName) return;

  const cat = findCategory(selectedCategoryId);
  if (cat) cat.name = newName; // Cập nhật tên mới

  localStorage.setItem("categories", JSON.stringify(categoryList)); // Lưu lại
  renderTable(searchInput.value); // Vẽ lại bảng
  closeEditModal(); // Đóng modal
};

// Gán sự kiện click và tìm kiếm
addBtn.addEventListener("click", addCategory);
searchInput.addEventListener("input", () => renderTable(searchInput.value));

// Lần đầu load trang sẽ hiển thị bảng
renderTable();

// Gán hàm cho window để có thể gọi từ HTML onclick
window.openDeleteModal = openDeleteModal;
window.openEditModal = openEditModal;
window.closeDeleteModal = closeDeleteModal;
window.closeEditModal = closeEditModal;
