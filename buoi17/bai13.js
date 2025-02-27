let money = parseFloat(prompt("Nhập số tiền gốc:"));
let month = parseInt(prompt("Nhập số tháng gửi:"));
let annualInterestRate = 4.3;
let monthlyInterestRate = annualInterestRate / 100 / 12;

let moneyInterestRate = money * monthlyInterestRate * month; // Tiền lãi
document.write("Tiền lãi sau " + month + " tháng là: " + moneyInterestRate.toFixed(2) + " VND");

