function processArray(arr) {
    if (!Array.isArray(arr)) return "Dữ liệu không hợp lệ";
    if (arr.length === 0) return "Mảng không có dữ liệu";
  
    let totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
  
    return `totalEven = ${totalEven}\ntotalOdd = ${totalOdd}`;
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