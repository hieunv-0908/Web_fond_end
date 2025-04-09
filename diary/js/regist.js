function sign_up() {
  let first_name_input = document.getElementById("first_name");
  let last_name_input = document.getElementById("last_name");
  let email_element = document.getElementById("email_input");
  let pass_input = document.getElementById("pass_input").value.trim();
  let confirm_pass_input = document.getElementById("confirm_pass_input").value.trim();

  let notification_name = document.getElementsByClassName("notification_name");

  let first_name = first_name_input.value.trim();
  let last_name = last_name_input.value.trim();
  let email_input = email_element.value.trim();

  if (
    first_name === "" ||
    last_name === "" ||
    email_input === "" ||
    pass_input === "" ||
    confirm_pass_input === ""
  ) {
    notification_name[0].innerHTML = "Vui lòng nhập đầy đủ thông tin.";
    return;
  } else {
    notification_name[0].innerHTML = "";
  }

  if (!email_element.checkValidity()) {
    notification_name[0].innerHTML = "Email không hợp lệ.";
    return;
  }

  if (pass_input.length > 15 || pass_input.length < 6) {
    notification_name[0].innerHTML =
      "Mật khẩu không được quá 15 ký tự hoặc không được nhỏ hơn 6 kí tự.";
    return;
  }

  if (pass_input !== confirm_pass_input) {
    notification_name[0].innerHTML = "Mật khẩu nhập lại không khớp.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = {
    id: users.length + 1,
    first_name: first_name,
    last_name: last_name,
    name: last_name + " " + first_name,
    email: email_input,
    password: pass_input,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  notification_name[0].innerHTML = "Đăng ký thành công!";
  window.location.href = "login.html";
}
