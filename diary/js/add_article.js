document
  .getElementById("article_image")
  .addEventListener("change", previewImage);
document.getElementById("button_add").addEventListener("click", addArticle);

function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const preview = document.getElementById("preview_image");
    preview.src = e.target.result;
    preview.style.display = "block";
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function addArticle() {
  const title = document.getElementById("input_title").value.trim();
  const category = document.getElementById("article_category").value.trim();
  const mood = document.getElementById("mood").value.trim();
  const content = document.getElementById("content").value.trim();
  const image = document.getElementById("preview_image").src;

  const statusEls = document.querySelectorAll(".status");
  let status = "";
  statusEls.forEach((radio) => {
    if (radio.checked) status = radio.value;
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  if (!user) {
    alert("Vui lòng đăng nhập!");
    return (window.location.href = "login.html");
  }

  if (!title || !category || !mood || !content || !status) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const newArticle = {
    id: articles.length ? articles[articles.length - 1].id + 1 : 1,
    title,
    category,
    mood,
    content,
    image,
    status,
    author: user.name,
    createdAt: new Date().toLocaleString(),
  };

  articles.push(newArticle);
  localStorage.setItem("articles", JSON.stringify(articles));

  alert("Đăng bài thành công!");
  window.location.href = "home.html";
}
