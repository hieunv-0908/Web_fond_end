document.getElementById("article_image").addEventListener("change", previewImage); // lấy ảnh của bài viết
document.getElementById("button_add").addEventListener("click", addArticle); // lây nút thêm của bài viết

// hàm thêm chủ đề vào select
function add_option_category() {
  const categories = JSON.parse(localStorage.getItem("categories")) || []; // lấy chủ đề từ trên localstorage
  const selectElement = document.getElementById("select_add_article"); // lấy ô select trong html ra ngoài

  if (!selectElement) return; // nếu không có ô select thì dừng thực hiện hàm để tránh các trường hợp lỗi hoặc quên select trong html

  selectElement.innerHTML = '<option value="">-- Chọn chủ đề --</option>'; // làm trống option hoàn toàn tránh bị trùng lặp 

  // sử dụng forEach để lấy ra các chủ đề của bài viết trong danh sách chủ đề bài viết để đưa vào select    
  categories.forEach((category) => { // lấy từ danh sách chủ đề với tham số là catogory
    const option = document.createElement("option"); // khai báo một biến option và gán cho nó một thẻ option được tạo ra bởi crtElement
    option.value = category.name; // gán cho option một value là têm của chủ đề bài viết để có thể lựa chọn trong select
    option.textContent = category.name; // đưa một đoạn text vào trong thẻ option là tên của chủ đề <option></option>
    selectElement.appendChild(option); //đẩy thẻ option vào trong thẻ select
  });
}

//hàm xem trước hình ảnh khi thêm ảnh để đăng bài
function previewImage(event) { // nhận sự kiện thêm ảnh của người dùng
  const file = event.target.files[0]; // lấy file đầu tiên từ ô input khi thực hiện hành động taget
  const reader = new FileReader(); // tạo một biến chuyển đổi file thành chuỗi đường dẫn base 64 để hiển thị ra ảnh trên màn hình

  reader.onload = function (e) { // in ra màn hình ảnh sau khi thực hiện chuyển đổi sang dạng base 64
    const preview = document.getElementById("preview_image"); // lấy ra thẻ chứa ảnh trong html 
    preview.src = e.target.result; // gán đường dẫ vào thuộc tình src
    preview.style.display = "block"; // đổi display thành block
  };

  if (file) { // kiểm tra xem đã lấy ảnh thành công chưa
    reader.readAsDataURL(file); // đọc file chuyển thành chuỗi base 64
  }
}

// thêm bài viết
function addArticle() {
  const modal = document.getElementById("modal"); // lấy ra thẻ chứa xác nhận
  const modal_button = document.getElementById("modal_button"); // lấy ra nút xác nhận 
  const title = document.getElementById("input_title").value.trim(); // lấy ra giá trị tiêu đề xác nhận
  const category = document.getElementById("select_add_article").value.trim(); // lấy ra giá trị của lựa chọn chủ đề 
  const mood = document.getElementById("mood").value.trim(); // lấy tra gí trọ của môd
  const content = document.getElementById("content").value.trim(); // lấy ra content
  const image = document.getElementById("preview_image").src; // lấy ra src của nhành ảnh 

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

click_button_modal();
add_option_category();