let string = prompt("Nhập vào chuỗi:");
function isPalindrome() {
    let flag = 1;
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    if (flag) {
        alert("Đây là chuỗi đối xứng.");
    } else {
        alert("Đây không phải là chuỗi đối xứng.");
    }
}
isPalindrome();

