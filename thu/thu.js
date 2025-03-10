let n = +prompt("n:");
let array = [];

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt(`array[${i}]:`);
        array.push(num);
    }

    let max1 = 0, max2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max1) {
            max2 = max1;
            max1 = array[i];
        }
    }

    alert("Số lớn thứ hai là: " + max2);

}