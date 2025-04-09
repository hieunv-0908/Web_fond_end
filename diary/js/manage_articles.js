document.addEventListener("DOMContentLoaded", function () {
  renderArticleTable();
});

function renderArticleTable() {
  const table = document.querySelector("#container_main_manage_articles table");
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  table.innerHTML = `
      <tr>
        <th>Ảnh</th>
        <th>Tiêu đề</th>
        <th>Chủ đề</th>
        <th>Nội dung</th>
        <th>Trạng thái</th>
        <th>Chỉnh sửa trạng thái</th>
        <th>Hành động</th>
      </tr>
    `;

  articles.forEach((article) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
          ${
            article.image
              ? `<img src="${article.image}" style="width: 80px; height: auto; object-fit: cover; border-radius: 4px;">`
              : "Không có ảnh"
          }
        </td>
        <td>${article.title}</td>
        <td>${article.category || "Không rõ"}</td>
        <td style="max-width: 200px;">${article.content}</td>
        <td>${article.status || "public"}</td>
        <td>
          <select onchange="updateStatus(${article.id}, this.value)">
            <option value="public" ${
              article.status === "public" ? "selected" : ""
            }>public</option>
            <option value="private" ${
              article.status === "private" ? "selected" : ""
            }>private</option>
          </select>
        </td>
        <td>
          <button onclick="deleteArticle(${
            article.id
          })" style="color: red;">🗑 Xoá</button>
        </td>
      `;

    table.appendChild(row);
  });
}

function updateStatus(articleId, newStatus) {
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  const index = articles.findIndex((a) => a.id === articleId);

  if (index !== -1) {
    articles[index].status = newStatus;
    localStorage.setItem("articles", JSON.stringify(articles));
    alert("Đã cập nhật trạng thái bài viết.");
  }
}

function deleteArticle(articleId) {
  if (!confirm("Bạn có chắc muốn xoá bài viết này không?")) return;

  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles = articles.filter((a) => a.id !== articleId);
  localStorage.setItem("articles", JSON.stringify(articles));
  renderArticleTable();
}
