let user_status_container = document.getElementById("user_status_container");
let user = JSON.parse(localStorage.getItem("user")) || null;
if (!user) {
  user_status_container.innerHTML = `<a href="login.html"><button id=button_sign_up>Đăng nhập</button></a>   <a href="register.html"><button id=button_sign_in>Đăng ký</button></a>`;
} else {
  user_status_container.innerHTML = ` <img src="../assets/images/avata_admin_test.png" alt="" onclick="showUserMenu()" id="user_avata" />`;
}
document.addEventListener("DOMContentLoaded", function () {
  renderHomeArticles();
});

function renderHomeArticles() {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  const lineOne = document.getElementById("line_one");
  const lineTwo = document.getElementById("line_two");

  lineOne.innerHTML = "";
  lineTwo.innerHTML = "";

  articles.forEach((article, index) => {
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

    if (index < 3) {
      lineOne.insertAdjacentHTML("beforeend", postHTML);
    } else if (index < 6) {
      lineTwo.insertAdjacentHTML("beforeend", postHTML);
    }
  });
}

function viewArticle(id) {
  localStorage.setItem("selectedArticleId", id);
  window.location.href = "article_details.html";
}

function showUserMenu() {
  const userMenu = document.getElementById("user_dropdown_menu");
  if (userMenu.style.display === "flex") {
    userMenu.style.display = "none";
  } else {
    userMenu.style.display = "flex";
  }
}
