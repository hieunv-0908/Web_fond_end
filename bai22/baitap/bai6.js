let numbers = [-5, 12, 8, 20, 33, 7, 5, 42, 12, 12];
let input = +prompt("Nhập vào một số nguyên bất kì muốn đếm:");
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
        count++;
    }
}
document.write("Số lần xuất hiện của số " + input + " trong dãy số là: " + count);  