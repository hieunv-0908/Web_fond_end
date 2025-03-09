let arr = [];
let choice;

do {
    choice = +prompt(
        "================== MENU ===================\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n" +
        "4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n" +
        "5. In ra các số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập một số và đếm số lần xuất hiện trong mảng\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Xóa một phần tử theo giá trị\n" +
        "9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n" +
        "0. Thoát\n" +
        "============================================\n" +
        "Lựa chọn của bạn:"
    );

    if (choice === 1) {
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
    } else if (choice === 2) {
        alert("Các phần tử trong mảng: " + arr.join(", "));
    } else if (choice === 3) {
        let evenNumbers = [];
        let evenSum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]);
                evenSum += arr[i];
            }
        }
        evenNumbers.sort((a, b) => b - a);
        alert("Các số chẵn: " + evenNumbers.join(", ") + "\nTổng: " + evenSum);
    } else if (choice === 4) {
        if (arr.length === 0) {
            alert("Mảng trống.");
        } else {
            let max = arr[0], min = arr[0], indexMax = 0, indexMin = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    indexMax = i;
                }
                if (arr[i] < min) {
                    min = arr[i];
                    indexMin = i;
                }
            }
            alert("Số lớn nhất: " + max + " ở vị trí " + indexMax +
                "\nSố nhỏ nhất: " + min + " ở vị trí " + indexMin);
        }
    } else if (choice === 5) {
        let primeNumbers = [];
        let primeSum = 0;
        for (let i = 0; i < arr.length; i++) {
            let isPrime = arr[i] > 1;
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumbers.push(arr[i]);
                primeSum += arr[i];
            }
        }
        alert("Các số nguyên tố: " + primeNumbers.join(", ") + "\nTổng: " + primeSum);
    } else if (choice === 6) {
        let searchNumber = +prompt("Nhập số cần thống kê:");
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchNumber) count++;
        }
        alert(`Số ${searchNumber} xuất hiện ${count} lần trong mảng.`);
    } else if (choice === 7) {
        let insertValue = +prompt("Nhập giá trị cần thêm:");
        let position = +prompt("Nhập vị trí muốn thêm:");
        if (position < 0 || position > arr.length) {
            alert("Vị trí không hợp lệ.");
        } else {
            for (let i = arr.length; i > position; i--) {
                arr[i] = arr[i - 1];
            }
            arr[position] = insertValue;
            alert("Mảng sau khi thêm: " + arr.join(", "));
        }
    } else if (choice === 8) {
        let deleteValue = +prompt("Nhập giá trị cần xóa:");
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== deleteValue) {
                newArr.push(arr[i]);
            }
        }
        arr = newArr;
        alert("Mảng sau khi xóa: " + arr.join(", "));
    } else if (choice === 9) {
        let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để sắp xếp giảm dần:");
        if (order === "asc") {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
        } else if (order === "desc") {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] < arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            alert("Mảng sau khi sắp xếp giảm dần: " + arr.join(", "));
        } else {
            alert("Lựa chọn không hợp lệ.");
        }
    } else if (choice === 0) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 0);
