let numbers = [];

let inputNumbers = () => {
  let n = +prompt("Nhập số lượng số nguyên:");
  numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(+prompt(`Nhập số nguyên thứ ${i + 1}:`));
  }
};

let calculateAverage = () => {
  if (numbers.length === 0) {
    alert("Danh sách rỗng!");
    return;
  }
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  alert(`Trung bình các số: ${(sum / numbers.length).toFixed(2)}`);
};

let findLargestEven = () => {
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) {
    alert("Không có số chẵn trong danh sách!");
    return;
  }
  alert(`Số chẵn lớn nhất: ${Math.max(...evenNumbers)}`);
};

let findSmallestOdd = () => {
  let oddNumbers = numbers.filter(num => num % 2 !== 0);
  if (oddNumbers.length === 0) {
    alert("Không có số lẻ trong danh sách!");
    return;
  }
  alert(`Số lẻ nhỏ nhất: ${Math.min(...oddNumbers)}`);
};

let choice;
do {
  choice = +prompt(
    "Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát"
  );
  
  switch (choice) {
    case 1:
      inputNumbers();
      break;
    case 2:
      calculateAverage();
      break;
    case 3:
      findLargestEven();
      break;
    case 4:
      findSmallestOdd();
      break;
    case 5:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== 5);

