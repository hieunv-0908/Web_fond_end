let str = prompt("Mời nhập vào một chuỗi:");
let aCharacter = prompt("Mời bạn vào một ký tự:");
let flaf = 0;
if (aCharacter.length > 1) {
    document.write("Bạn nhập sai định dạng rồi nhé.");
} else {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === aCharacter) {
            flaf = 1;
        }
        
    }
}
if (flaf === 1) {
    document.write("Đã tìm thấy và có tồn tại.");
} else {
    document.write("Không tìm thấy có thể kí tự không tồn tại.");
}