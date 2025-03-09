let arr = [1, 2, 3, 4, 5, 8, 7, 6, 9, 12];
let numMax;
let indexMax = 0;
numMax = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (numMax < arr[i]) {
        numMax = arr[i];
        indexMax = i;
    }
}

document.write("Số lớn nhất trong dẫy là " + numMax + " ở vị trí thứ " + indexMax + " ");
