alert("pass:admin.01");
let pass = "admin.01";
let passTemp = prompt("Mời bạn nhập vào mật khẩu:");

if (passTemp.localeCompare(pass)===0) {
    alert("Bạn đã nhập đúng mật khẩu.");
} else {
    alert("Bạn đã nhập sai mật khẩu.");
}