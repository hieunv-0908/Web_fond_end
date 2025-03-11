function pass(string) {
    let is_number = 0;
    let is_upper_case = 0;
    let is_lower_case = 0;
    let is_special_character = 0;
    let special_chars = "!@#$%^&*()_+{}[]:;<>,.?/~`";

    if (string.length < 8) {
        return false; // Mật khẩu quá ngắn
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (!isNaN(char) && char >= '0' && char <= '9') {
            is_number++;
        }
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            is_upper_case++;
        }
        if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            is_lower_case++;
        }
        if (special_chars.includes(char)) {
            is_special_character++;
        }
    }

    return is_number > 0 && is_upper_case > 0 && is_lower_case > 0 && is_special_character > 0;
}

let string = prompt("Mời nhập vào password");
if (pass(string)) {
    alert("Mật khẩu hợp lệ!");
} else {
    alert("Mật khẩu không hợp lệ! (Cần ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt)");
}