let users = []; 

function main() {
  let choice;
  do {
    choice = +prompt(
      "1. Đăng ký\n2. Đăng nhập\n3. Thoát\nMời bạn chọn:"
    );

    switch (choice) {
      case 1:
        register();
        break;
      case 2:
        login();
        break;
      case 3:
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (choice !== 3);
}

function register() {
  let name = prompt("Nhập tên:");
  let email = prompt("Nhập email:");
  let password = prompt("Nhập mật khẩu:");

  if (!isValidEmail(email)) {
    console.log("Email không hợp lệ! Phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
    return;
  }
  
  if (!isValidPassword(password)) {
    console.log("Mật khẩu không hợp lệ! Phải có ít nhất 6 ký tự, gồm chữ hoa và ký tự đặc biệt.");
    return;
  }
  
  if (users.some(user => user.email === email)) {
    console.log("Email đã tồn tại! Hãy chọn email khác.");
    return;
  }

  users.push({ name, email, password });
  console.log("Đăng ký thành công!");
}

function login() {
  let email = prompt("Nhập email:");
  let password = prompt("Nhập mật khẩu:");

  let user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    console.log(`Đăng nhập thành công! Chào mừng ${user.name}.`);
  } else {
    console.log("Đăng nhập thất bại! Kiểm tra lại email hoặc mật khẩu.");
  }
}

function isValidEmail(email) {
  return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function isValidPassword(password) {
  if (password.length < 6) return false;
  
  let hasUpperCase = false, hasSpecialChar = false;
  let specialChars = "!@#$%^&*()_+";

  for (let char of password) {
    if (char >= "A" && char <= "Z") hasUpperCase = true;
    if (specialChars.includes(char)) hasSpecialChar = true;
  }

  return hasUpperCase && hasSpecialChar;
}

main();
