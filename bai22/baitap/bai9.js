let array = [7, 7, 8, 9, 8, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            array.splice(j, 1);
            j--;
        }
    }
}
document.write("Dãy số sau khi loại bỏ các số trùng lặp là: " + array);