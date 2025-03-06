let array = [];
let countEven = 0;
let countOdd = 0;
alert("Nhập vào 5 số nguyên bất kì:");
for (let i = 0; i < 5; i++) {
    array[i] = +prompt("Nhập số thứ " + (i + 1) + ":");
    if (array[i] === 0) {
    } else if (array[i] < 0) {
        if ( Math.abs(array[i]) % 2 === 0) {
            countEven++;
        } else {
            countOdd++; 
        }
    } else if(array[i] > 0) {
        if (array[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}
document.write("Số lượng số chẵn trong dãy số là: " + countEven + "<br>");  
document.write("Số lượng số lẻ trong dãy số là: " + countOdd);  