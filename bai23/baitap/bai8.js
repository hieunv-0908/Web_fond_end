let n = +prompt("Nhập số lượng phần tử của mảng:");
let arr = [];

if (n < 0 || isNaN(n)) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    }

    let isFibonacci = true;

    if (n === 0) {
        isFibonacci = false;
    } else if (n === 1) {
        isFibonacci = arr[0] === 0;
    } else if (n === 2) {
        isFibonacci = arr[0] === 0 && arr[1] === 1;
    } else {
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }

    if (isFibonacci) {
        alert("Là dãy số Fibonacci");
    } else {
        alert("Không phải dãy số Fibonacci");
    }
}