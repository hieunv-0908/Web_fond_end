// Khi trang load xong sẽ gọi hàm hiển thị chi tiết bài viết
window.onload = loadArticleDetails;

function loadArticleDetails() {
  // Lấy ID bài viết được chọn từ localStorage
  const articleId = localStorage.getItem("selectedArticleId");

  // Lấy danh sách bài viết và chuyên mục từ localStorage
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  // Tìm bài viết tương ứng theo ID
  const article = articles.find((a) => a.id === parseInt(articleId));

  // Nếu không tìm thấy bài viết, hiển thị thông báo lỗi và thoát hàm
  if (!article) {
    document.body.innerHTML = "<h2>Bài viết không tồn tại!</h2>";
    return;
  }

  // Lấy phần tử HTML để hiển thị nội dung bài viết
  const container = document.getElementById("article_detail_container");

  // Tìm chuyên mục tương ứng với bài viết dựa trên entry_id hoặc tên category
  const entry = entries.find(
    (e) => e.id === article.entry_id || article.category === e.name
  );

  // Gán HTML hiển thị chi tiết bài viết vào container
  container.innerHTML = `
    <!-- Nút quay lại trang chủ -->
    <div class="back-button" onclick="window.location.href='home.html'">
      <i class="fa-solid fa-arrow-left"></i> Back
    </div>

    <!-- Phần đầu bài viết: avatar, tiêu đề, tác giả và thời gian đăng -->
    <div class="post-header">
      <img src="https://i.pravatar.cc/50?u=${article.author}" class="avatar" />
      <div>
        <h2>${article.title}</h2>
        <p><strong>${article.author}</strong> • ${
    article.createdAt || "Unknown"
  }</p>
      </div>
    </div>

    <!-- Nếu bài viết có ảnh, hiển thị ảnh -->
    <div class="post-image-container">
      ${
        article.image
          ? `<img src="${article.image}" alt="Ảnh bài viết" class="post-image" />`
          : ""
      }
    </div>

    <!-- Nội dung chính của bài viết -->
    <div class="post-body">
      <p>${article.content}</p>
    </div>

    <!-- Hiển thị chuyên mục của bài viết -->
    <div class="post-meta">
      <span class="category-tag">${
        article.category || entry?.name || "Uncategorized"
      }</span>
    </div>

    <!-- Hiển thị lượt thích và bình luận (tạm thời là số giả lập) -->
    <div class="post-actions">
      <span><i class="fa-solid fa-thumbs-up"></i> 15 Likes</span>
      <span><i class="fa-solid fa-comment-dots"></i> 6 Comments</span>
    </div>

    <!-- Phần bình luận: có 2 bình luận mẫu -->
    <div class="comments-section">
      <h3>Comments</h3>

      <div class="comment">
        <img class="avatar" src="https://i.pravatar.cc/32?u=user1" />
        <div class="comment-body">
          <p class="comment-text">Very good!</p>
          <span class="comment-actions">👍 4 · 💬 2</span>
        </div>
      </div>

      <div class="comment">
        <img class="avatar" src="https://i.pravatar.cc/32?u=user2" />
        <div class="comment-body">
          <p class="comment-text">Hello Rikkei!</p>
          <span class="comment-actions">👍 5 · 💬 1</span>
        </div>
      </div>
    </div>
  `;
}
