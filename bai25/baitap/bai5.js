function countPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        console.error("Dữ liệu không hợp lệ. Vui lòng nhập một mảng.");
        return 0;
    }

    let count = 0;
    for (let item of arr) {
        if (Number.isInteger(item) && item > 0) {
            count++;
        }
    }
    return count;
}

console.log(countPositiveIntegers([1, -2, 3.5, 4, 0, -6, 7]));
console.log(countPositiveIntegers(["a", 3, 5, -1, {}, 10]));
console.log(countPositiveIntegers([]));
console.log(countPositiveIntegers(123));