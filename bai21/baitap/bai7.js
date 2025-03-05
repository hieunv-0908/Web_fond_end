let principal = parseFloat(prompt("Nhập số tiền gửi ban đầu: "));
let interestRate = parseFloat(prompt("Nhập lãi suất tháng (%): ")) / 100;
let months = parseInt(prompt("Nhập số tháng gửi: "));

let totalAmount = principal * Math.pow((1 + interestRate), months);
let interestEarned = totalAmount - principal;

console.log(`Số tiền lãi sau ${months} tháng: ${interestEarned.toFixed(2)}`);
console.log(`Tổng số tiền nhận được: ${totalAmount.toFixed(2)}`);