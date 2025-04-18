// Khi DOM được tải xong, hiển thị bài viết và bộ lọc danh mục
document.addEventListener("DOMContentLoaded", function () {
  renderHomeArticles();
  renderFilterCategories(); // Gọi filter ngay khi trang tải
});

// Xử lý trạng thái đăng nhập của user
let user_status_container = document.getElementById("user_status_container");
let user = JSON.parse(localStorage.getItem("user")) || null;
if (!user) {
  // Nếu chưa đăng nhập, hiển thị nút đăng nhập và đăng ký
  user_status_container.innerHTML = `
    <a href="login.html"><button id=button_sign_up>Đăng nhập</button></a>   
    <a href="register.html"><button id=button_sign_in>Đăng ký</button></a>`;
} else {
  // Nếu đã đăng nhập, hiển thị avatar
  user_status_container.innerHTML = `
    <img src="../assets/images/avata_admin_test.png" alt="" onclick="showUserMenu()" id="user_avata" />`;
}

// Hàm hiển thị bài viết (có thể lọc theo category và phân trang)
function renderHomeArticles(category = null, page = 1) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const lineOne = document.getElementById("line_one");
  const lineTwo = document.getElementById("line_two");

  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";

  // Lọc bài viết nếu có category
  const filtered = category
    ? articles.filter((a) => a.category === category)
    : articles;

  // Phân trang
  currentPage = page;
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filtered.slice(startIndex, endIndex);

  // Hiển thị bài viết thành từng dòng
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

    // Dòng đầu và dòng hai
    if (index < 3) {
      lineOne.insertAdjacentHTML("beforeend", postHTML);
    } else {
      lineTwo.insertAdjacentHTML("beforeend", postHTML);
    }
  });

  // Gọi hàm phân trang
  renderPagination(filtered.length, category);
}

// Hiển thị danh sách bộ lọc theo category
function renderFilterCategories() {
  const filterContainer = document.getElementById("filter_categories");
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  // Tạo các nút filter từ danh sách category
  filterContainer.innerHTML = `
    ${categories
      .map(
        (c) =>
          `<span class="filter_item" data-category="${c.name}">${c.name}</span>`
      )
      .join(" &bull; ")}
    <button id="clear_filter" style="margin-left: 10px;">Clear</button>
  `;

  // Gán sự kiện click cho từng filter item
  document.querySelectorAll(".filter_item").forEach((item) => {
    item.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-category");
      renderHomeArticles(selectedCategory);
    });
  });

  // Gán sự kiện click cho nút xoá bộ lọc
  document.getElementById("clear_filter").addEventListener("click", () => {
    renderHomeArticles();
  });
}

// Xem chi tiết bài viết
function viewArticle(id) {
  localStorage.setItem("selectedArticleId", id);
  window.location.href = "article_details.html";
}

// Hiển thị menu user (dropdown)
function showUserMenu() {
  const userMenu = document.getElementById("user_dropdown_menu");
  if (userMenu.style.display === "flex") {
    userMenu.style.display = "none";
  } else {
    userMenu.style.display = "flex";
  }
}

// Biến phân trang
let currentPage = 1;
const articlesPerPage = 5;

// Hiển thị thanh phân trang
function renderPagination(totalArticles, category) {
  const pageContainer = document.getElementById("page");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  pageContainer.innerHTML = "";

  // Tạo các nút số trang
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

  // Xử lý nút prev
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      renderHomeArticles(category, currentPage - 1);
    }
  });

  // Xử lý nút next
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      renderHomeArticles(category, currentPage + 1);
    }
  });
}

// Hiển thị hoặc ẩn modal xác nhận đăng xuất
function toggle_modal_logout() {
  let modal_confirm_logout = document.getElementById("modal_confirm_logout");
  if (modal_confirm_logout.style.display === "flex") {
    modal_confirm_logout.style.display = "none";
  } else {
    modal_confirm_logout.style.display = "flex";
  }
}

// Xử lý logout user
function logout() {
  let modal_confirm_logout = document.getElementById("modal_confirm_logout");

  // Ẩn modal logout nếu đang mở
  if (modal_confirm_logout.style.display === "flex") {
    modal_confirm_logout.style.display = "none";
  } else {
    modal_confirm_logout.style.display = "flex";
  }

  // Xoá user khỏi localStorage và chuyển trang
  localStorage.removeItem("user");
  window.location.replace("regist.html");
}
