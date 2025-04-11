document.addEventListener("DOMContentLoaded", function () {
  renderHomeArticles();
  renderFilterCategories(); // Gọi ở đây nè
});

let user_status_container = document.getElementById("user_status_container");
let user = JSON.parse(localStorage.getItem("user")) || null;
if (!user) {
  user_status_container.innerHTML = `<a href="login.html"><button id=button_sign_up>Đăng nhập</button></a>   <a href="register.html"><button id=button_sign_in>Đăng ký</button></a>`;
} else {
  user_status_container.innerHTML = ` <img src="../assets/images/avata_admin_test.png" alt="" onclick="showUserMenu()" id="user_avata" />`;
}
document.addEventListener("DOMContentLoaded", function () {
  renderHomeArticles();
});

function renderHomeArticles(category = null) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  const lineOne = document.getElementById("line_one");
  const lineTwo = document.getElementById("line_two");

  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";

  const filtered = category
    ? articles.filter((a) => a.category === category)
    : articles;

  filtered.forEach((article, index) => {
    const postHTML = `
      <div class="post_card" onclick="viewArticle(${article.id})">
        <img src="${article.image}" alt="Article Image" />
        <div>
          <span class="date">Date: ${article.createdAt || "Unknown"}</span>
          <div>
            <span>${article.title}</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <p>${article.content.slice(0, 100)}...</p>
          <span class="category">${article.category}</span>
        </div>
      </div>
    `;

    if (index < 3) {
      lineOne.insertAdjacentHTML("beforeend", postHTML);
    } else if (index < 6) {
      lineTwo.insertAdjacentHTML("beforeend", postHTML);
    }
  });
}

function renderFilterCategories() {
  const filterContainer = document.getElementById("filter_categories");
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  filterContainer.innerHTML = `
    ${categories
      .map(
        (c) =>
          `<span class="filter_item" data-category="${c.name}">${c.name}</span>`
      )
      .join(" &bull; ")}
    <button id="clear_filter" style="margin-left: 10px;">Clear</button>
  `;
  document.querySelectorAll(".filter_item").forEach((item) => {
    item.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-category");
      renderHomeArticles(selectedCategory);
    });
  });

  document.getElementById("clear_filter").addEventListener("click", () => {
    renderHomeArticles();
  });
}

document.getElementById("clear_filter").addEventListener("click", function () {
  renderHomeArticles();
});

function viewArticle(id) {
  localStorage.setItem("selectedArticleId", id);
  window.location.href = "article_details.html";
}

function showUserMenu() {
  const userMenu = document.getElementById("user_dropdown_menu");
  if (userMenu.style.display === "flex") {
    userMenu.style.display = "none";
  } else {
    userMenu.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderHomeArticles();
  renderFilterCategories();
});

let currentPage = 1;
const articlesPerPage = 6;

function renderPagination(totalArticles, category) {
  const pageContainer = document.getElementById("page");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  pageContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = "button_number_page";
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.style.backgroundColor = "#6941c6";
      pageButton.style.color = "#fff";
    }
    pageButton.addEventListener("click", () => {
      renderHomeArticles(category, i);
    });
    pageContainer.appendChild(pageButton);
  }

  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      renderHomeArticles(category, currentPage - 1);
    }
  });

  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      renderHomeArticles(category, currentPage + 1);
    }
  });
}

function renderHomeArticles(category = null, page = 1) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const lineOne = document.getElementById("line_one");
  const lineTwo = document.getElementById("line_two");

  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";

  const filtered = category
    ? articles.filter((a) => a.category === category)
    : articles;

  currentPage = page;
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filtered.slice(startIndex, endIndex);

  paginatedArticles.forEach((article, index) => {
    const postHTML = `
      <div class="post_card" onclick="viewArticle(${article.id})">
        <img src="${article.image}" alt="Article Image" />
        <div>
          <span class="date">Date: ${article.createdAt || "Unknown"}</span>
          <div>
            <span>${article.title}</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
          <p>${article.content.slice(0, 100)}...</p>
          <span class="category">${article.category}</span>
        </div>
      </div>
    `;

    if (index < 3) {
      lineOne.insertAdjacentHTML("beforeend", postHTML);
    } else {
      lineTwo.insertAdjacentHTML("beforeend", postHTML);
    }
  });

  renderPagination(filtered.length, category);
}

function logout() {
  let profile_logout = document.getElementById("profile_logout");
  let modal_confirm_logout = document.getElementById("modal_confirm_logout");
  if (modal_confirm_logout.style.display === "flex") {
    modal_confirm_logout.style.display = "none";
  } else {
    modal_confirm_logout.style.display = "flex";
  }
  // modal_confirm_logout.classList.add("hidden");
  localStorage.removeItem("user");
  window.location.replace("regist.html");
}

function toggle_modal_logout() {
  let modal_confirm_logout = document.getElementById("modal_confirm_logout");
  if (modal_confirm_logout.style.display === "flex") {
    modal_confirm_logout.style.display = "none";
  } else {
    modal_confirm_logout.style.display = "flex";
  }
}
