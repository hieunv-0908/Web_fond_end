function splitArrayIntoChunks(array, n) {
  if (n <= 0) {
    return [];
  }
  let result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 3;
console.log(splitArrayIntoChunks(arr, chunkSize));
