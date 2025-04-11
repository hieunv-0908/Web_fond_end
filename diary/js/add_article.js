document
  .getElementById("article_image")
  .addEventListener("change", previewImage);
document.getElementById("button_add").addEventListener("click", addArticle);

function add_option_category() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const selectElement = document.getElementById("select_add_article");

  if (!selectElement) return;

  selectElement.innerHTML = '<option value="">-- Chọn chủ đề --</option>';

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    selectElement.appendChild(option);
  });
}

//xem trước hình ảnh
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

// thêm bài viết
function addArticle() {
  const modal = document.getElementById("modal");
  const modal_button = document.getElementById("modal_button");
  const title = document.getElementById("input_title").value.trim();
  const category = document.getElementById("select_add_article").value.trim();
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
    // modal.style.display = "flex";
    modal.innerHTML = `<span>Không có thông tin của người dùng nào</span>`;
    return (window.location.href = "login.html");
  }

  if (!title || !category || !mood || !content || !status) {
    modal.style.display = "flex";
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

  modal.innerHTML = `<span>Đăng bài thành công</span>`;
  window.location.href = "home.html";
}

function click_button_modal() {
  const modal_button = document.getElementById("modal_button");
  modal_button.addEventListener("click", function () {
    modal.style.display = "none";
  })
}

click_button_modal()
add_option_category();