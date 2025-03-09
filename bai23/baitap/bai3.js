let arr = [];
let n = +prompt("Mời bạn nhập vào số phần tử muốn nhập vào mảng:");
let count_Num_Nigative = 0;

if (n == 0) {
    alert("Mảng không có phần tử nào.");
} else if (n < 0 || isNaN(n) || !Number.isInteger(n)) {
    alert("Số lượng phần tử không hợp lệ.");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời nhập vào vị trí thứ :${i+1} `);
        if (arr[i] < 0 && Number.isInteger(arr[i])) {
            count_Num_Nigative++;
        }
    }

    if (count_Num_Nigative == 0) {
        alert("Mảng không có phần tử nào là số nguyên âm.");
    } else {
        alert("Mảng chứa "+count_Num_Nigative+" phần tử là số nguyên âm.");
    }
}





