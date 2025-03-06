let userInput = prompt("Mời nhập vào chuỗi số nguyên bất kì:");
let number = Number(userInput);
let isNegative = number < 0;
let reversedString;
console.log("You entered: " + userInput);

if (!isNaN(number) && Number.isInteger(number) && number !== 0 && userInput.trim() !== "") {
    let numberArray = userInput.replace('-', '').split('').map(Number);
    numberArray = numberArray.reverse();
    reversedString = (isNegative ? '-' : '') + numberArray.join('');
    document.write("Chuỗi sau khi đảo ngược: " + reversedString);
} else {
    alert("Dãy số không hợp lệ!!");
}