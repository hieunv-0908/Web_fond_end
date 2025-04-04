const ARTICLES_PER_PAGE = 5;
let currentPage = 1;

function getArticles() {
  return JSON.parse(localStorage.getItem("articles")) || [];
}

function renderArticles() {
  const articles = getArticles();
  const tbody = document.getElementById("article-table-body");
  tbody.innerHTML = "";

  if (articles.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="4" style="text-align: center; color: gray">No articles available.</td></tr>';
    return;
  }

  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const end = start + ARTICLES_PER_PAGE;
  const pageArticles = articles.slice(start, end);

  pageArticles.forEach((article, index) => {
    const row = `
      <tr>
        <td>${start + index + 1}</td>
        <td>${article.title}</td>
        <td>${article.category}</td>
        <td>
          <button onclick="editArticle(${start + index})">Edit</button>
          <button onclick="deleteArticle(${start + index})">Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  renderPagination(articles.length);
}

function renderPagination(totalArticles) {
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);
  const pagination = document.querySelector(".pagination");

  pagination.innerHTML = "";

  // Previous
  const prev = document.createElement("a");
  prev.textContent = "← Previous";
  prev.href = "#";
  prev.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderArticles();
    }
  };
  pagination.appendChild(prev);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement("a");
    page.textContent = i;
    page.href = "#";
    if (i === currentPage) page.classList.add("active");
    page.onclick = () => {
      currentPage = i;
      renderArticles();
    };
    pagination.appendChild(page);
  }

  // Next
  const next = document.createElement("a");
  next.textContent = "Next →";
  next.href = "#";
  next.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderArticles();
    }
  };
  pagination.appendChild(next);
}

function addArticle() {
  const title = document.getElementById("article-title").value.trim();
  const desc = document.getElementById("article-description").value.trim();
  const category = document.getElementById("article-category").value;

  if (!title || !desc || !category) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const articles = getArticles();
  articles.push({ title, description: desc, category });
  localStorage.setItem("articles", JSON.stringify(articles));
  alert("Thêm bài viết thành công!");
  currentPage = Math.ceil(articles.length / ARTICLES_PER_PAGE); // Nhảy đến trang cuối
  renderArticles();
}

function deleteArticle(index) {
  let articles = getArticles();
  if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
    articles.splice(index, 1);
    localStorage.setItem("articles", JSON.stringify(articles));
    // Nếu xóa hết ở trang cuối thì quay lại trang trước
    const maxPage = Math.ceil(articles.length / ARTICLES_PER_PAGE);
    if (currentPage > maxPage) currentPage = maxPage;
    renderArticles();
  }
}

function editArticle(index) {
  alert("Chức năng chỉnh sửa sẽ được bổ sung sau 😄");
}

document.addEventListener("DOMContentLoaded", () => {
  renderArticles();
});