let arr = [];
let n = +prompt("Mời bạn nhập vào số lượng phần tử trong mảng :");
if (n === 0) {
    alert("Mảng không có phần tử nào.");
} else if (n < 0) {
    alert("Số lượng phần tử trong mảng không được nhỏ hơn 0.");
} else if (isNaN(n)) {
    alert("Số lượng phần tử trong mảng không hợp lệ.");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời bạn nhập vào phàn tử thứ ${i + 1} (NHập vào -1000 để dừng trương trình)`);
        if (isNaN(arr[i])) {
            i--;
        } else if (arr[i] === -1000) {
            break;
        }
    }
    let num_Max = arr[0];
    let index_Max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (num_Max < arr[i + 1]) {
            num_Max = arr[i + 1];
            index_Max = i + 1;
        }
    }
    arr.splice(index_Max, 1);
    num_Max = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (num_Max < arr[i + 1]) {
            num_Max = arr[i + 1];
            index_Max = i + 1;
        }
    }
    alert(num_Max);
}