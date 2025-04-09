document.addEventListener("DOMContentLoaded", function () {
  renderCategoryList();

  const addBtn = document.querySelector("#add_category button");
  const input = document.getElementById("input_add_category_name");
  const searchInput = document.getElementById("input_search_manage");

  addBtn.addEventListener("click", function () {
    const name = input.value.trim();
    if (!name) {
      alert("Vui lòng nhập tên category!");
      return;
    }

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    const exist = entries.some(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );

    if (exist) {
      alert("Category đã tồn tại!");
      return;
    }

    const newEntry = {
      id: entries.length ? entries[entries.length - 1].id + 1 : 1,
      name,
    };

    entries.push(newEntry);
    localStorage.setItem("entries", JSON.stringify(entries));

    input.value = "";
    renderCategoryList();
  });

  searchInput.addEventListener("input", renderCategoryList);
});

function renderCategoryList() {
  const table = document.querySelector("#add_category table");
  const searchValue = document
    .getElementById("input_search_manage")
    .value.trim()
    .toLowerCase();
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  // Clear all rows except the header
  table.innerHTML = `
      <tr>
        <th>#</th>
        <th>Category Name</th>
        <th>Actions</th>
      </tr>
    `;

  const filteredEntries = entries.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue)
  );

  filteredEntries.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${entry.name}</td>
        <td>
          <button onclick="deleteCategory(${entry.id})">🗑 Xoá</button>
        </td>
      `;

    table.appendChild(row);
  });
}

function deleteCategory(id) {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  if (!confirm("Bạn có chắc muốn xoá category này không?")) return;

  entries = entries.filter((e) => e.id !== id);
  localStorage.setItem("entries", JSON.stringify(entries));
  renderCategoryList();
}
