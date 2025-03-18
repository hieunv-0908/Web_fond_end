let cart = [];
let choice;
let products = [
  {
    id: 1,
    name: "Mèn mén",
    price: 20000,
    quanity: 20,
    category: "Món ăn dân tộc Mông.",
  },
  {
    id: 2,
    name: "Mứt",
    price: 80000,
    quanity: 21,
    category: "Món ăn dân tộc Kinh.",
  },
  {
    id: 3,
    name: "Cơm lam",
    price: 40000,
    quanity: 15,
    category: "Món ăn dân tộc Mông.",
  },
  {
    id: 4,
    name: "Bánh đậu xanh",
    price: 60000,
    quanity: 30,
    category: "Món ăn dân tộc Kinh.",
  },
];

function main() {
  do {
    choice = +prompt(
      "Mời nhập vào chức năng muốn thực hiện.\n 1.Tìm kiếm sản phẩm thei danh mục. \n 2.Chọn sản phẩm bằng id. \n 3.Sắp xếp sản phẩm theo giá(Tăng hoặc gimr dần). \n 4.Tính số tiền thanh toán trong giảo hàng.\n 5.Thoát."
    );
    switch (choice) {
      case 1:
        search_by_category();
        break;

      case 2:
        buy_products_by_id();
        break;

      case 3:
        sort_price();
        break;

      case 4:
        total_monney_cart();
        break;

      case 5:
        break;

      default:
        break;
    }
    if (choice == 5) {
      break;
    }
  } while (true);
}

function search_by_category() {
  let have_products = false;
  let search_category = prompt("Mời nhập danh mục cần tìm.");
  search_category = search_category.toLowerCase();
  products.forEach((element) => {
    if (element.category.toLowerCase() == search_category) {
      console.log(element);
      have_products = true;
    }
  });
  if (have_products == false) {
    console.log("Cửa hàng không có sản phẩm.");
  }
}

function buy_products_by_id() {
  let id_product_wish_buy = +prompt("Mời nhập vào id món ăn muốn mua.");
  let quanity_product_wish_buy;
  let index_product = products.findIndex(
    (product) => product.id == id_product_wish_buy
  );

  if (index_product == -1) {
    console.log("Không tìm thấy sản phẩm.");
  } else {
    console.log("Mời nhập vào số lượng sản phẩm muốn mua.");
    quanity_product_wish_buy = +prompt("Mời nhập vào số lượng sản phẩm.");
    if (products[index_product].quanity < quanity_product_wish_buy) {
      console.log("Không đủ sản phẩm.Còn", products[index_product].quanity);
    } else {
      products[index_product].quanity -= quanity_product_wish_buy;
      let search_in_cart = cart.findIndex(
        (item) => item.id == id_product_wish_buy
      );
      if (search_in_cart == -1) {
        console.log("Sản phẩn chưa có trong giỏ hàng.");
        console.log("Đang được cập nhật....");

        cart.push({
          id: id_product_wish_buy,
          name: products[index_product].name,
          quanity: quanity_product_wish_buy,
          price: products[index_product].price,
          category: products[index_product].category,
        });
        console.log("Cập nhật thành công.");
      } else {
        console.log("sản phẩn đã có trong giỏ hàng.");
        console.log("Đang cập nhật số lưỢng sản phẩm.");
        cart[search_in_cart].quanity += quanity_product_wish_buy;
        console.log("Cập nhật thành công.");
      }
    }
  }
}

function sort_price() {
  let choice_sort = +prompt(
    "Mời nhập vào kiểu sắp xếp.(1.Tăng dần;2.Giảm dần.)"
  );
  if (choice_sort == 1) {
    products.sort((a, b) => a.price - b.price);
    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
    }
  } else if (choice_sort == 2) {
    products.sort((a, b) => b.price - a.price);
    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
    }
  }
}

function total_monney_cart() {
  let total = cart.reduce((total,item)=>total + item.price*item.quanity,0);
  console.log("Tổng số tiền cần trả là:", total);
}

main();
