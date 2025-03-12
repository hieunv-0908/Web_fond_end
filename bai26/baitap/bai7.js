function processArray(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
  
    let squaredEvenNumbers = arr
      .map(num => num ** 2)
      .filter(num => num % 2 === 0);
  
    return squaredEvenNumbers;
  }
  
  let numbers = [];
  
  for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    if (isNaN(num)) {
      console.log("Dữ liệu không hợp lệ");
      numbers = null;
      break;
    }
    numbers.push(num);
  }
  
  if (numbers) console.log(processArray(numbers));