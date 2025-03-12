function isEmail(email) {
    let at_index = email.indexOf("@");
    let dot_index = email.indexOf(".");

    if (at_index > 0 && dot_index > at_index + 1 && dot_index < email.length - 1 && !email.includes(" ")) {
        return true;
    }
    return false;
}
let users = [];
do {
    let email = prompt("Nhập vào email đăng kí:");
    if (email == "end") {
        break;
    } else if (isEmail(email)) {
        if (users.includes(email)) {
            alert("Tài khoản đã được đăng kí.");
            continue;
        }
        alert("Email hợp lệ.");
        users.push(email);
    } else {
        alert("Email không hợp lệ.");
    }
} while (true);
