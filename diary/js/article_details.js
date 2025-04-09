if (!localStorage.getItem("entries")) {
  const entries = [
    { id: 1, name: "Nhật ký học tập" },
    { id: 2, name: "Nhật ký mục tiêu" },
    { id: 3, name: "Trải nghiệm sống" },
  ];
  localStorage.setItem("entries", JSON.stringify(entries));
}
function loadArticleDetails() {
  const articleId = localStorage.getItem("selectedArticleId");
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) {
    document.body.innerHTML = "<h2>Bài viết không tồn tại!</h2>";
    return;
  }

  const container = document.getElementById("article_detail_container");
  if (!container) return;

  const entry = entries.find(
    (e) => e.id === article.entry_id || article.category === e.name
  );

  container.innerHTML = `
      <h2>${article.title}</h2>
      <p><strong>Tác giả:</strong> ${article.author}</p>
      <p><strong>Chủ đề:</strong> ${
        entry ? entry.name : article.category || "Không xác định"
      }</p>
      <p><strong>Tâm trạng:</strong> ${article.mood || "Không có"}</p>
      <p><strong>Trạng thái:</strong> ${article.status || "public"}</p>
      <p><strong>Thời gian:</strong> ${article.createdAt || "Không rõ"}</p>
      ${
        article.image
          ? `<img src="${article.image}" alt="Bài viết" style="max-width: 400px; margin: 16px 0;" />`
          : ""
      }
      <div style="margin-top: 16px;">${article.content}</div>
    `;
}

window.onload = loadArticleDetails;
