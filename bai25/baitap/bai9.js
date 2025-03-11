function isEmail(email) {
    let at_index = email.indexOf("@");
    let dot_index = email.indexOf(".");

    if (at_index > 0 && dot_index > at_index + 1 && dot_index < email.length - 1 && !email.includes(" ")) {
        return true;
    }
    return false;
}
let users = [];
let i = 0;
do {
    let flag = 1;
    let email = prompt("Nhập vào email đăng kí:");
    if (email == "end") {
        break;
    } else if (isEmail(email)) {
        if (users.includes(email)) {
            alert("Tài khoản đã được đăng kí.");
            flag = 0;
            continue;
        }
        alert("Email hợp lệ.");
        users.push(email);
        i++;

    } else {
        alert("Email không hợp lệ.");
    }
} while (true);
