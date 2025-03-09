let array = [7, 7, 8, 9, 8, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 14, 14, 56, 56, 71, 34, 71, 34];//7 8 9 1 10 14 56 71 34
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            array.splice(j, 1);
            j--;
        }
    }
}
for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
alert("Dãy số sau khi loại bỏ các số trùng lặp là: " + array);
// sort((a, b) => b - a)

