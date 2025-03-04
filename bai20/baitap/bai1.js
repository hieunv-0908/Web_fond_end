let enter = +prompt("Mời nhập vào một số bất kì lớn hơn không:");
let sum = 0;
if (enter <= 0) {
    document.write("Có vẻ bạn nhập không đúng yêu cầu.");
} else if (Number.isInteger(enter)) {
    for (let i = 0; i <= enter; i++) {
        sum = i + sum;
    }
    document.write("Sum:", sum);
} else {
    document.write("Có vẻ bạn nhập không đúng yêu cầu.");
}