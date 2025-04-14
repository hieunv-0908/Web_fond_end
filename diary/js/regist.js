function isValidEmail(email) {
  // Kiểm tra xem email có chứa khoảng trắng không
  if (email.includes(" ")) return false;

  // Kiểm tra email có chứa đúng 1 dấu @
  let atIndex = email.indexOf("@"); // Lấy vị trí của dấu @
  if (atIndex === -1 || email.lastIndexOf("@") !== atIndex) return false; // Nếu không có dấu @ hoặc có nhiều hơn 1 dấu @ thì không hợp lệ

  // Kiểm tra email không bắt đầu hoặc kết thúc bằng @ hoặc .
  if (
    email.startsWith("@") || // Kiểm tra xem email có bắt đầu bằng @ không
    email.endsWith("@") || // Kiểm tra xem email có kết thúc bằng @ không
    email.startsWith(".") || // Kiểm tra xem email có bắt đầu bằng . không
    email.endsWith(".") // Kiểm tra xem email có kết thúc bằng . không
  )
    return false;

  // Kiểm tra email có ít nhất 1 dấu . sau dấu @
  let dotIndex = email.lastIndexOf("."); // Lấy vị trí dấu . cuối cùng trong email
  if (dotIndex < atIndex + 2) return false; // Nếu dấu . xuất hiện quá gần dấu @ thì không hợp lệ

  // Kiểm tra phần domain (sau dấu .) phải dài ít nhất 2 ký tự và toàn là chữ cái
  let domain = email.substring(dotIndex + 1); // Lấy phần domain sau dấu .
  if (domain.length < 2) return false; // Kiểm tra độ dài của domain

  // Kiểm tra xem domain có phải là chữ cái không (không chứa số hoặc ký tự đặc biệt)
  for (let i = 0; i < domain.length; i++) {
    let char = domain[i];
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      return false; // Nếu gặp ký tự không phải là chữ cái thì trả về false
    }
  }

  // Kiểm tra xem email có chứa 2 dấu chấm liền nhau không
  if (email.includes("..")) return false; // Nếu email chứa ".." thì không hợp lệ

  return true; // Nếu không có lỗi gì thì trả về true (email hợp lệ)
}

function sign_up() {
  // Lấy các giá trị nhập vào từ các input trên trang web
  let first_name_input = document.getElementById("first_name");
  let last_name_input = document.getElementById("last_name");
  let email_element = document.getElementById("email_input");
  let pass_input = document.getElementById("pass_input").value.trim();
  let confirm_pass_input = document
    .getElementById("confirm_pass_input")
    .value.trim();
  let notification_name = document.getElementsByClassName("notification_name");

  // Lấy thông tin nhập vào từ các input
  let first_name = first_name_input.value.trim();
  let last_name = last_name_input.value.trim();
  let email_input = email_element.value.trim();

  // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
  if (
    first_name === "" ||
    last_name === "" ||
    email_input === "" ||
    pass_input === "" ||
    confirm_pass_input === ""
  ) {
    notification_name[0].innerHTML = "Vui lòng nhập đầy đủ thông tin."; // Thông báo nếu thiếu thông tin
    return;
  } else {
    notification_name[0].innerHTML = ""; // Nếu đầy đủ thông tin thì xóa thông báo lỗi
  }

  // Kiểm tra xem email có hợp lệ không
  if (!isValidEmail(email_input)) {
    notification_name[0].innerHTML = "Email không hợp lệ."; // Thông báo lỗi nếu email không hợp lệ
    return;
  }

  // Kiểm tra độ dài mật khẩu (từ 6 đến 15 ký tự)
  if (pass_input.length > 15 || pass_input.length < 6) {
    notification_name[0].innerHTML = "Mật khẩu phải từ 6 đến 15 ký tự."; // Thông báo nếu mật khẩu không hợp lệ
    return;
  }

  // Kiểm tra xem mật khẩu và mật khẩu nhập lại có khớp không
  if (pass_input !== confirm_pass_input) {
    notification_name[0].innerHTML = "Mật khẩu nhập lại không khớp."; // Thông báo nếu mật khẩu không khớp
    return;
  }

  // Lấy danh sách người dùng đã lưu trong localStorage, nếu không có thì khởi tạo mảng rỗng
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra xem email đã tồn tại trong danh sách người dùng chưa
  if (users.some((user) => user.email === email_input)) {
    notification_name[0].innerHTML =
      "Email đã tồn tại, vui lòng chọn email khác."; // Thông báo nếu email đã tồn tại
    return;
  }

  // Tạo một đối tượng user mới với thông tin từ form
  let user = {
    id: users.length + 1, // Đặt id cho người dùng mới (số lượng người dùng hiện tại + 1)
    first_name: first_name, // Tên người dùng
    last_name: last_name, // Họ người dùng
    name: last_name + " " + first_name, // Tên đầy đủ (họ và tên)
    email: email_input, // Email người dùng
    password: pass_input, // Mật khẩu người dùng
  };

  // Thêm người dùng vào danh sách
  users.push(user);

  // Lưu danh sách người dùng vào localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Thông báo đăng ký thành công
  notification_name[0].innerHTML = "Đăng ký thành công!";

  // Sau 1 giây, chuyển hướng người dùng sang trang đăng nhập
  setTimeout(() => {
    window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
  }, 1000);
}
