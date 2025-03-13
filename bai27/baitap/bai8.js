let number_max = (number) => {
  if (isNaN(number)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  let digit = (number + "").split("");
  for (let i = 0; i < digit.length - 1; i++) {
    for (let j = 0; j < digit.length - 1 - i; j++) {
      if (digit[j] < digit[j + 1]) {
        let temp = digit[j];
        digit[j] = digit[j + 1];
        digit[j + 1] = temp;
      }
    }
  }
  return parseInt(digit.join(""));
};

let number = +prompt("Nhập vào số nguyên:");
console.log(number_max(number));
