let string = prompt("Mời nhập vào chuỗi:");

function upper_case_firt(string) {
    string = string.split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    let result = string.join(" ");
    return result;
}

alert("Chuỗi sau khi viết hoa chữ cái đầu: " + upper_case_firt(string) + "");
