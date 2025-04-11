
const input = document.getElementById("input_add_category_name");
const addBtn = document.querySelector("#add_category button");
const table = document.getElementById("table_category");
const searchInput = document.getElementById("input_search_manage_category");
const editInput = document.getElementById("edit_category_name");

const modalDelete = document.getElementById("modal_confirm_delete");
const modalEdit = document.getElementById("modal_edit_category");

let categoryList = JSON.parse(localStorage.getItem("categories")) || [];
let selectedCategoryId = null;

categoryList = categoryList.map((cat) => {
  if (typeof cat === "string") {
    return { id: Date.now() + Math.random(), name: cat };
  }
  return cat;
});
localStorage.setItem("categories", JSON.stringify(categoryList));

function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

function renderTable(filter = "") {
  while (table.rows.length > 1) table.deleteRow(1);

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

function addCategory() {
  const name = input.value.trim();
  if (!name) return;

  categoryList.push({ id: generateId(), name });
  localStorage.setItem("categories", JSON.stringify(categoryList));
  input.value = "";
  renderTable(searchInput.value);
}

function findCategory(id) {
  return categoryList.find((cat) => cat.id === id);
}

function openDeleteModal(id) {
  selectedCategoryId = id;
  modalDelete.classList.remove("hidden");
}

function closeDeleteModal() {
  modalDelete.classList.add("hidden");
}

document.getElementById("confirm_delete_btn").onclick = function () {
  categoryList = categoryList.filter((cat) => cat.id !== selectedCategoryId);
  localStorage.setItem("categories", JSON.stringify(categoryList));
  renderTable(searchInput.value);
  closeDeleteModal();
};

function openEditModal(id) {
  const cat = findCategory(id);
  if (!cat) return;
  selectedCategoryId = id;
  editInput.value = cat.name;
  modalEdit.classList.remove("hidden");
}

function closeEditModal() {
  modalEdit.classList.add("hidden");
}

document.getElementById("save_edit_btn").onclick = function () {
  const newName = editInput.value.trim();
  if (!newName) return;

  const cat = findCategory(selectedCategoryId);
  if (cat) cat.name = newName;

  localStorage.setItem("categories", JSON.stringify(categoryList));
  renderTable(searchInput.value);
  closeEditModal();
};

addBtn.addEventListener("click", addCategory);
searchInput.addEventListener("input", () => renderTable(searchInput.value));

renderTable();

window.openDeleteModal = openDeleteModal;
window.openEditModal = openEditModal;
window.closeDeleteModal = closeDeleteModal;
window.closeEditModal = closeEditModal;
