function isArithmeticSequence(array) {
  if (array.length < 2) {
    return false;
  }

  let diff = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== diff) {
      return false;
    }
  }
  return true;
}

function findMissingNumber(array) {
  let diff = (array[array.length - 1] - array[0]) / array.length;

  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] !== diff) {
      return array[i - 1] + diff;
    }
  }
  return null;
}

console.log(isArithmeticSequence([2, 4, 6, 8, 10]));
console.log(isArithmeticSequence([3, 6, 9, 12, 15]));
console.log(isArithmeticSequence([1, 2, 4, 8, 16]));

console.log(findMissingNumber([2, 4, 8, 10]));
console.log(findMissingNumber([1, 3, 5, 9, 11]));
