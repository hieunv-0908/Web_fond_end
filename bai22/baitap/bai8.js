let arr = [34, 23, 23, 32, 5, 5, 1, 1, 23, 1, 1];
let arrTemp = [];
let count = 1;
let number;
let countMax = 0;
let numberMin;
for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
            arrTemp[i] = arr[i];
        }
    }
    if (count > countMax) {
        countMax = count;
        numberMin = number;
    } else if (count == countMax) {
        for(let i = 0; i < arrTemp.length; i++) {
            for (let j = i + 1; j < arrTemp.length; j++) {
                if (arrTemp[i] < arrTemp[j]) {
                    numberMin = arrTemp[i];
                } else {
                    numberMin = arrTemp[j];
                }

            }
        }
    }
    count = 1;
}

document.write("Số lần xuất hiện nhiều nhất là: " + countMax + " lần với số " + numberMin); 