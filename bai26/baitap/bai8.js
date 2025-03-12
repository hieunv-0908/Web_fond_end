function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function processArray(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
  
    let oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);
    return oddPrimes;
  }
  
  let numbers = [];
  let n = +prompt("Nhập số lượng phần tử trong mảng (từ 10 đến 20):");
  
  if (isNaN(n) || n < 10 || n > 20) {
    console.log("Dữ liệu không hợp lệ");
  } else {
    for (let i = 0; i < n; i++) {
      let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
      if (isNaN(num)) {
        console.log("Dữ liệu không hợp lệ");
        numbers = null;
        break;
      }
      numbers.push(num);
    }
  
    if (numbers) console.log(processArray(numbers));
  }