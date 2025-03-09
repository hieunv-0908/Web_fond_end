let arr = [];
let n = +prompt("Mời bạn nhập vào số lượng phần tử trong mảng:");
if (isNaN(n) || n < 0) {
    alert("Số lượng phần tử trong mảng không hợp lệ.");
} else if (n === 0) {
    alert("Mảng không có phần tử nào.");
} else {
    for (let i = 0; i < n; i++) {
        let num = prompt(`Mời bạn nhập vào phần tử thứ ${i + 1} (Nhập -1000 để dừng chương trình)`);
        num = num.trim();
        if (num === "-1000") break;
        num = +num;
        if (!isNaN(num)) {
            arr.push(num);
        } else {
            alert("Vui lòng nhập số hợp lệ!");
            i--;
        }
    }

    if (arr.length < 2) {
        alert("Không có số lớn thứ hai vì mảng có ít hơn hai phần tử hợp lệ.");
    } else {
        let max1 = -Infinity, max2 = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2 && arr[i] < max1) {
                max2 = arr[i];
            }
        }
        if (max2 === -Infinity) {
            alert("Không có số lớn thứ hai vì tất cả phần tử đều giống nhau.");
        } else {
            alert("Số lớn thứ hai là: " + max2);
        }
    }
}
