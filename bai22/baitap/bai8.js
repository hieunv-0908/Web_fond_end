    let arr = [34, 1, 23, 32, 5, 62, 78, 1, 45, 90, 1];
    let count = 1;
    let number;
    let countMax = 0;
    let numberMax;
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > countMax) {
            countMax = count;
            numberMax = number;
        }
        count = 1;
    }
    document.write("Số lần xuất hiện nhiều nhất là: " + countMax + " lần với số " + numberMax); 