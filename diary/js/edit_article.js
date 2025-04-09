document.addEventListener("DOMContentLoaded", function () {
  const articleId = localStorage.getItem("editArticleId");
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) {
    alert("Không tìm thấy bài viết để chỉnh sửa!");
    window.location.href = "manage_articles.html";
    return;
  }

  // Gán dữ liệu cũ vào form
  document.getElementById("edit_title").value = article.title;
  document.getElementById("edit_category").value = article.category || "";
  document.getElementById("edit_mood").value = article.mood || "";
  document.getElementById("edit_content").value = article.content;
  document.querySelector(`#edit_preview`).src = article.image || "";
  if (article.image)
    document.querySelector(`#edit_preview`).style.display = "block";

  document.querySelectorAll("input[name='edit_status']").forEach((el) => {
    if (el.value === article.status) el.checked = true;
  });

  // Xử lý hiển thị ảnh mới nếu có chọn lại
  document
    .getElementById("edit_image")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const preview = document.getElementById("edit_preview");
        preview.src = e.target.result;
        preview.style.display = "block";
      };

      if (file) reader.readAsDataURL(file);
    });
});

function saveEdit() {
  const articleId = parseInt(localStorage.getItem("editArticleId"));
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const index = articles.findIndex((a) => a.id === articleId);

  if (index === -1) {
    alert("Không tìm thấy bài viết để cập nhật!");
    return;
  }

  const updatedArticle = {
    ...articles[index],
    title: document.getElementById("edit_title").value.trim(),
    category: document.getElementById("edit_category").value.trim(),
    mood: document.getElementById("edit_mood").value.trim(),
    content: document.getElementById("edit_content").value.trim(),
    image: document.getElementById("edit_preview").src,
    status:
      document.querySelector("input[name='edit_status']:checked")?.value ||
      "public",
  };

  articles[index] = updatedArticle;
  localStorage.setItem("articles", JSON.stringify(articles));

  alert("Đã cập nhật bài viết thành công!");
  window.location.href = "manage_articles.html";
}
