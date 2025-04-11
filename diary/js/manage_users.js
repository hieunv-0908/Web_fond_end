document.addEventListener("DOMContentLoaded", function () {
  initData();
  setupEvents();
  renderUsers();
});

let currentPage = 1;
const usersPerPage = 5;

function initData() {
  if (!localStorage.getItem("users")) {
    const mockUsers = Array.from({ length: 25 }, (_, i) => {
      const number = (i + 1).toString().padStart(2, "0");
      return {
        id: i + 1,
        name: `User ${number}`,
        email: `user${i + 1}@example.com`,
        isActive: "unlock",
      };
    });
    localStorage.setItem("users", JSON.stringify(mockUsers));
  }
}

function setupEvents() {
  const searchInput = document.getElementById("input_search_manage");
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(() => {
        currentPage = 1;
        renderUsers();
      }, 300)
    );
  }

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

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

function getFilteredUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const search = document
    .getElementById("input_search_manage")
    .value.toLowerCase()
    .trim();

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

  renderTableHeader(table);

  if (usersToDisplay.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `<td colspan="5" style="text-align:center;">Không tìm thấy người dùng nào.</td>`;
    table.appendChild(noDataRow);
  } else {
    usersToDisplay.forEach((user) => {
      table.appendChild(createUserRow(user));
    });
  }

  updatePagination(users.length);
  updateUserCount(users.length);
}

function renderTableHeader(table) {
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Status <i class="fa-solid fa-arrow-down"></i></th>
      <th>Email address</th>
      <th>
      Active 
      <span>sort by name</span>
      <i class="fa-solid fa-angles-up" onclick="sort_gradually_increase()"></i>
      <i class="fa-solid fa-angles-down" onclick="sort_gradually_decrease()"></i></th>
    </tr>
  `;
}

function createUserRow(user) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${user.name || `${user.last_name} ${user.first_name}`}</td>
    <td>${user.status || "Active"}</td>
    <td>${user.email}</td>
    <td><button id=button_block onclick="block_user(${
      user.id
    })">block</button> <button id=button_unlock onclick="unlock_user(${
    user.id
  })">unlock</button></td>
  `;
  return row;
}

function updateUserCount(count) {
  const span = document.getElementById("number_users");
  if (span) span.textContent = `${count} users`;
}

function updatePagination(totalUsers) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const pageContainer = document.getElementById("page_numbers");
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

function sort_gradually_increase() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.sort((a, b) => a.name.localeCompare(b.name));
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function sort_gradually_decrease() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.sort((a, b) => b.name.localeCompare(a.name));
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function block_user(id_user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id_user) {
      users[i].isActive = "block";
      localStorage.setItem("users", JSON.stringify(users));
      return;
    }
  }
}

function unlock_user(id_user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id_user) {
      users[i].isActive = "unlock";
      localStorage.setItem("users", JSON.stringify(users));
      return;
    }
  }
}
