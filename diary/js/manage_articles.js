const addArticleBtn = document.getElementById("add_article_manage");
const articleModal = document.getElementById("articleModal");
const closeModalBtn = document.querySelector(".close-button");
const articleForm = document.getElementById("articleForm");
const articleTableBody = document.getElementById("article-table-body");
const deleteConfirmBox = document.getElementById("deleteConfirmBox");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
const submit_modal = document.getElementById("submit_modal");

let articles = JSON.parse(localStorage.getItem("articles")) || [];
let categories = JSON.parse(localStorage.getItem("categories"));
let current_page = 1;
const articles_per_page = 5;

let currentEditId = null;
let deleteTargetId = null;

function add_option_categories() {
  let select_category = document.getElementById("select_category");
  select_category.innerHTML = '<option value="">-- Chọn chủ đề --</option>';
  for (let i = 0; i < categories.length; i++) {
    select_category.innerHTML += `<option value="${categories[i].name}">${categories[i].name}</option>`;
  }
}

function saveArticles() {
  localStorage.setItem("articles", JSON.stringify(articles));
}

function resetForm() {
  articleForm.reset();
  document.getElementById("modal-article-id").value = "";
  currentEditId = null;
}

function openModal(isEdit = false, article = {}) {
  articleModal.classList.remove("hidden");
  document.getElementById("modal-title").innerText = isEdit
    ? "Sửa bài viết"
    : "Thêm bài viết";
  if (isEdit) {
    document.getElementById("modal-title-input").value = article.title || "";
    document.getElementById("select_category").value = article.category || "";
    document.getElementById("modal-content-input").value =
      article.content || "";
    document.getElementById("modal-status-input").value =
      article.status || "public";
    document.getElementById("modal-article-id").value = article.id;
  }
}

function closeModal() {
  articleModal.classList.add("hidden");
  resetForm();
}

function openDeleteModal(id) {
  deleteTargetId = id;
  deleteConfirmBox.classList.remove("hidden");
}

function closeDeleteModal() {
  deleteConfirmBox.classList.add("hidden");
  deleteTargetId = null;
}

function renderArticles() {
  articleTableBody.innerHTML = "";
  articles.forEach((article) => {
    const tr = document.createElement("tr");

    const imgCell = document.createElement("td");
    imgCell.innerHTML = article.image
      ? `<img src="${article.image}" alt="thumb" width="80" />`
      : "No image";

    const titleCell = document.createElement("td");
    titleCell.innerText = article.title;

    const categoryCell = document.createElement("td");
    categoryCell.innerText = article.category;

    const contentCell = document.createElement("td");
    contentCell.innerText = article.content;

    const statusCell = document.createElement("td");
    statusCell.innerText = article.status;

    const changeStatusCell = document.createElement("td");
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = article.status === "public" ? "Ẩn" : "Công khai";
    toggleBtn.onclick = () => {
      article.status = article.status === "public" ? "private" : "public";
      saveArticles();
      renderArticles();
    };
    changeStatusCell.appendChild(toggleBtn);

    const actionCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.onclick = () => {
      openModal(true, article);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.onclick = () => openDeleteModal(article.id);

    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);

    tr.appendChild(imgCell);
    tr.appendChild(titleCell);
    tr.appendChild(categoryCell);
    tr.appendChild(contentCell);
    tr.appendChild(statusCell);
    tr.appendChild(changeStatusCell);
    tr.appendChild(actionCell);

    articleTableBody.appendChild(tr);
  });
}

addArticleBtn.onclick = () => openModal(false);

closeModalBtn.onclick = closeModal;

window.onclick = (event) => {
  if (event.target === articleModal) {
    closeModal();
  }
};

cancelDeleteBtn.onclick = closeDeleteModal;

confirmDeleteBtn.onclick = () => {
  if (deleteTargetId) {
    articles = articles.filter((article) => article.id !== deleteTargetId);
    saveArticles();
    renderArticles();
    closeDeleteModal();
  }
};

articleForm.onsubmit = (e) => {
  e.preventDefault();

  const id =
    document.getElementById("modal-article-id").value || Date.now().toString();
  const title = document.getElementById("modal-title-input").value;
  const category = document.getElementById("select_category").value;
  const content = document.getElementById("modal-content-input").value;
  const status = document.getElementById("modal-status-input").value;

  const imageInput = document.getElementById("modal-image-input");
  let imageURL = "";

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageURL = e.target.result;
      saveArticle({ id, title, category, content, status, image: imageURL });
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const existing = articles.find((a) => a.id === id);
    imageURL = existing ? existing.image : "";
    saveArticle({ id, title, category, content, status, image: imageURL });
    closeModal();
  }
};

function saveArticle(articleObj) {
  const index = articles.findIndex((a) => a.id === articleObj.id);
  if (index > -1) {
    articles[index] = articleObj;
  } else {
    articles.unshift(articleObj);
  }
  saveArticles();
  renderArticles();
}

// function add_article(){
//   let modal_title_input = document.getElementById("modal-title-input").value.trim();
//   let select_category = document.getElementById("select_category").value.trim();
//   let modal_image_input = document.getElementById("modal-image-input").value.trim();
//   let modal_content_input = document.getElementById("modal-content-input").value.trim();
//   let modal_status_input = document.getElementById("modal-status-input").value.trim();
//   let temp_article = {
//     id
//     title:modal_title_input ,
//     categories:select_category,
//     img: modal_image_input,
//     content:modal_content_input,
//     status:modal_status_input,
//   }
//   articles.push(temp_article);
//   localStorage.setItem("articles",JSON.stringify(articles));
//   renderArticles();
// }

add_option_categories();
renderArticles();
