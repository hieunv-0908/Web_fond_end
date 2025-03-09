let arr = [];
let choice;

do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            let n = +prompt("Nhập số lượng phần tử:");
            if (n < 0 || isNaN(n)) {
                alert("Số lượng phần tử không hợp lệ.");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    let value;
                    do {
                        value = prompt(`Nhập phần tử thứ ${i + 1}:`);
                        if (isNaN(value) || value.trim() === "") {
                            alert("Vui lòng nhập một số hợp lệ.");
                        }
                    } while (isNaN(value) || value.trim() === "");

                    arr[i] = +value;
                }
            }
            break;

        case 2:
            alert("Các phần tử trong mảng: " + arr.join(", "));
            break;

        case 3:
            let evenNumbers = arr.filter(num => num % 2 === 0);
            let evenSum = evenNumbers.reduce((sum, num) => sum + num, 0);
            alert("Các số chẵn: " + evenNumbers.join(", ") + "\nTổng: " + evenSum);
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng trống.");
            } else {
                let max = Math.max(...arr);
                let min = Math.min(...arr);
                alert("Số lớn nhất: " + max + "\nSố nhỏ nhất: " + min);
            }
            break;

        case 5:
            let primeNumbers = arr.filter(num => isPrime(num));
            let primeSum = primeNumbers.reduce((sum, num) => sum + num, 0);
            alert("Các số nguyên tố: " + primeNumbers.join(", ") + "\nTổng: " + primeSum);
            break;

        case 6:
            let searchNumber = +prompt("Nhập số cần thống kê:");
            let count = arr.filter(num => num === searchNumber).length;
            alert(`Số ${searchNumber} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
            let insertValue = +prompt("Nhập giá trị cần thêm:");
            let position = +prompt("Nhập vị trí muốn thêm:");
            if (position < 0 || position > arr.length) {
                alert("Vị trí không hợp lệ.");
            } else {
                arr.splice(position, 0, insertValue);
                alert("Mảng sau khi thêm: " + arr.join(", "));
            }
            break;

        case 8:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 8);