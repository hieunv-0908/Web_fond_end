let userInput = prompt("Mời nhập vào chuỗi số nguyên bất kì:");
if (userInput !== 0 && !isNaN(userInput) && Number.isInteger(+userInput) && userInput.trim() !== "") {
    userInput = userInput.split('').map(Number);
    let max = userInput[0];
    for (let i = 1; i < userInput.length; i++) {
        if (userInput[i] > max) {
            max = userInput[i];
        }
    }
    alert("Số lớn nhất trong chuỗi số là: " + max);
} else{
    alert("Dãy số không hợp lệ!");
}