let users = [];

function register() {
    let name = prompt("Nhập tên của bạn:");
    let email = prompt("Nhập email của bạn:");
    let password = prompt("Nhập mật khẩu của bạn:");

    if (!validateEmail(email)) {
        console.log("Email không hợp lệ! Hãy nhập email chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }
    
    if (!validatePassword(password)) {
        console.log("Mật khẩu phải có ít nhất 6 ký tự, chứa ký tự đặc biệt và một chữ cái viết hoa.");
        return;
    }
    
    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại! Vui lòng sử dụng email khác.");
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
        console.log("Đăng nhập thành công! Thông tin người dùng:", user);
    } else {
        console.log("Email hoặc mật khẩu không đúng!");
    }
}

function validateEmail(email) {
    return /^[^@]+@[^@]+\.(com|vn)$/.test(email);
}

function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password);
}

function main() {
    let choice;
    do {
        choice = +prompt("1. Đăng ký\n2. Đăng nhập\n3. Thoát\nMời bạn chọn:");
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
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 3);
}

main();