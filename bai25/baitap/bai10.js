let store = [
  ["Bún thịt nứng", 10, 30000],
  ["Bánh mì", 12, 12000],
  ["Bánh bao", 5, 8000],
  ["Cơm rang thập cẩm", 30, 25000],
];

let cart = [];
do {
  let cart = [];
  let choic = +prompt("Mời nhập vào lựa chọn.\n 1.Xem sản phẩn");
  switch (choic) {
    case 1:
      buy_item(store);
      break;

    case 2:
      by_iten(store);
      break;
    default:
      break;
  }
} while (choic != 4);

function show_item(store) {
  if (Array.isArray(store)) {
    for (let i = 0; i < store.length; i++) {
      console.log(
        `Sản phẩn thứ ${i + 1} tên ${store[i][0]} \n Giá: ${
          store[i][3]
        } \n Số lượng${store[i][2]}`
      );
    }
  } else {
    console.log("Không phải mảng!!");
  }
}
function buy_item(store) {
  let name_item_buy = prompt("Mời nhập vào têm sản phẩm muốn mua.");
  let flag = -1;
  for (let i = 0; i < store.length; i++) {
    if (name_item_buy == store[i][0]) {
      flag = i;
      break;
    }
  }
  if (flag == 1) {
    cart.push(store[flag]);
  } else {
    console.log("Không có sản phân trong cửa hàng");
  }
}


