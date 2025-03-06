let array = [1, 2, 3, 4, 5];
let userInput = prompt("Nhập vào một giá trị:");
for (let i = 0; i < array.length; i++) {
    if (array[i] == userInput) {
        document.write("Bingo!!!!!!!!");
        break;
    }
    if (i == array.length - 1) {
        document.write("Chúc bạn may mắn lần sau");
    }
    
}
