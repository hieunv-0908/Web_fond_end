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
  const entry = entries.find(
    (e) => e.id === article.entry_id || article.category === e.name
  );

  container.innerHTML = `
    <div class="post-header">
      <img src="https://i.pravatar.cc/40?u=${article.author}" class="avatar" />
      <h3 class="post-title">${article.title}</h3>
    </div>
    <div class="post-content">
      <p><strong>${article.author}</strong> • ${article.createdAt}</p>
      <p>${article.content}</p>
      ${article.image ? `<img class="post-image" src="${article.image}" alt="Ảnh bài viết" />` : ""}
    </div>
    <div class="post-actions">
      <span>15 Like 👍</span>
      <span>6 Replies 💬</span>
    </div>
    <div class="view-comments">View all 12 comments ▼</div>

    <div class="comment">
      <img class="avatar" src="https://i.pravatar.cc/32?u=user1" />
      <div>
        <div class="comment-text">very good!</div>
        <div class="comment-actions">15 Like · 6 Replies</div>
      </div>
    </div>
    <div class="comment">
      <img class="avatar" src="https://i.pravatar.cc/32?u=user2" />
      <div>
        <div class="comment-text">hello rikkei!</div>
        <div class="comment-actions">15 Like · 6 Replies</div>
      </div>
    </div>
  `;
}

window.onload = loadArticleDetails;
