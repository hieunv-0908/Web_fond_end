function login() {
  let emailElement = document.getElementById("input_email");
  let passElement = document.getElementById("input_pass");
  // let notification = document.getElementById("notification");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let emailInput = emailElement.value.trim();
  let passInput = passElement.value.trim();

  if (emailInput === "" || passInput === "") {
    showNotification("Vui lòng điền đầy đủ thông tin!", "red");
    return;
  }

  if (!emailElement.checkValidity()) {
    showNotification("Email không hợp lệ!", "red");
    return;
  }

  let user = users.find(
    (user) => user.email === emailInput && user.password === passInput
  );

  if (!user) {
    showNotification("Email hoặc mật khẩu sai!", "red");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  showNotification("Đăng nhập thành công!", "green");

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
}

function showNotification(message, color) {
  let notification = document.getElementById("notification");
  notification.innerHTML = message;
  notification.style.color = color;
  notification.style.fontWeight = "bold";
}
