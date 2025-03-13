const PI = Math.PI;

let circleArea = (radius) => PI * radius * radius;
let circlePerimeter = (radius) => 2 * PI * radius;
let rectangleArea = (length, width) => length * width;
let rectanglePerimeter = (length, width) => 2 * (length + width);

let choice;
do {
  choice = +prompt(
    "Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát"
  );

  switch (choice) {
    case 1:
      let r1 = +prompt("Nhập bán kính hình tròn:");
      alert(`Diện tích hình tròn: ${circleArea(r1).toFixed(2)}`);
      break;
    case 2:
      let r2 = +prompt("Nhập bán kính hình tròn:");
      alert(`Chu vi hình tròn: ${circlePerimeter(r2).toFixed(2)}`);
      break;
    case 3:
      let l1 = +prompt("Nhập chiều dài hình chữ nhật:");
      let w1 = +prompt("Nhập chiều rộng hình chữ nhật:");
      alert(`Diện tích hình chữ nhật: ${rectangleArea(l1, w1).toFixed(2)}`);
      break;
    case 4:
      let l2 = +prompt("Nhập chiều dài hình chữ nhật:");
      let w2 = +prompt("Nhập chiều rộng hình chữ nhật:");
      alert(`Chu vi hình chữ nhật: ${rectanglePerimeter(l2, w2).toFixed(2)}`);
      break;
    case 5:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ!");
  }
} while (choice !== 5);
