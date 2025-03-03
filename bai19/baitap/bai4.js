let num = +prompt("MờI nhậP vào một số bất kì-Enter random num please");
if (num % 3 == 0 && num % 5 == 0) {
    document.write(`Số ${num} chia hết cho cả 5 và 3`);
} else {
    document.write(`Số ${num} không chia hết cho cả 5 và 3`);
}