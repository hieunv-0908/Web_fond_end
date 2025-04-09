document.addEventListener("DOMContentLoaded", function () {
  setupEvents();
  renderUsers();
});

let currentPage = 1;
const usersPerPage = 5;

function setupEvents() {
  document
    .getElementById("input_search_manage")
    .addEventListener("input", function () {
      currentPage = 1;
      renderUsers();
    });

  document.getElementById("previous").addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderUsers();
    }
  });

  document.getElementById("next").addEventListener("click", function (e) {
    e.preventDefault();
    const totalUsers = getFilteredUsers().length;
    const totalPages = Math.ceil(totalUsers / usersPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderUsers();
    }
  });
}

function getFilteredUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const search = document
    .getElementById("input_search_manage")
    .value.toLowerCase();

  return users.filter(
    (user) =>
      (user.name || "").toLowerCase().includes(search) ||
      (user.email || "").toLowerCase().includes(search)
  );
}

function renderUsers() {
  const table = document.getElementById("table_users");
  const users = getFilteredUsers();

  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;
  const usersToDisplay = users.slice(start, end);

  // Reset table
  table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Email address</th>
        <th>Active</th>
        <th>Hành động</th>
      </tr>
    `;

  usersToDisplay.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.name || `${user.last_name} ${user.first_name}`}</td>
        <td>Active</td>
        <td>${user.email}</td>
        <td>✅</td>
        <td><button onclick="deleteUser(${
          user.id
        })" style="color: red;">🗑 Xoá</button></td>
      `;
    table.appendChild(row);
  });

  updatePagination(users.length);
  updateUserCount(users.length);
}

function deleteUser(userId) {
  if (!confirm("Bạn có chắc muốn xoá người dùng này không?")) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function updateUserCount(count) {
  const span = document.getElementById("number_users");
  if (span) span.textContent = `${count} users`;
}

function updatePagination(totalUsers) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const pageContainer = document.getElementById("page-numbers");
  pageContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    if (i === currentPage) pageLink.classList.add("active");
    pageLink.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      renderUsers();
    });
    pageContainer.appendChild(pageLink);
  }
}
