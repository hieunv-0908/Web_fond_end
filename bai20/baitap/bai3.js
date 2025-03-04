let input = +prompt("Mời nhập vào một số nguyên bất kì:");
let stringTemp = "";
if (input <= 0 || !Number.isInteger(input)) {
    document.write("Có vẻ bạn nhập sai định dạng yêu cầu.");
} else {
    input = input + "";
    for (let i = 0; i < input.length; i++) {
        stringTemp += input[input.length - 1 - i];
    }

    document.write(stringTemp);
    if (input === stringTemp) {
        document.write(input,"Đây là một số đối xứng.");
    } else {
        document.write("Đây không là một số đối xứng.");
    }
}

