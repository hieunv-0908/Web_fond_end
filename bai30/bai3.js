let store = [
    { id: 1, name: "iPhone 13", price: 20000000, quantity: 10, brand: "Apple" },
    { id: 2, name: "Samsung Galaxy S21", price: 18000000, quantity: 5, brand: "Samsung" },
    { id: 3, name: "Xiaomi Mi 11", price: 15000000, quantity: 8, brand: "Xiaomi" }
];

let cart = [];

function show_phone_by_brand() {
    let brand_search = prompt("Nhập vào hãng điện thoại muốn tìm:");
    let filtered_phones = store.filter(phone => phone.brand.toLowerCase() === brand_search.toLowerCase());
    console.log(filtered_phones.length ? filtered_phones : "Không tìm thấy điện thoại thuộc hãng này.");
}

function add_phone() {
    let new_phone = {
        id: store.length ? store[store.length - 1].id + 1 : 1,
        name: prompt("Nhập vào tên điện thoại mới:"),
        price: +prompt("Nhập vào giá điện thoại:"),
        quantity: +prompt("Nhập vào số lượng điện thoại:"),
        brand: prompt("Nhập vào hãng điện thoại:")
    };
    store.push(new_phone);
    console.log("Thêm điện thoại thành công.");
}

function search_phone() {
    let search_type = +prompt("1. Tìm theo tên, 2. Tìm theo ID");
    if (search_type === 1) {
        let name_search = prompt("Nhập tên điện thoại:").toLowerCase();
        let results = store.filter(phone => phone.name.toLowerCase().includes(name_search));
        console.log(results.length ? results : "Không tìm thấy điện thoại.");
    } else if (search_type === 2) {
        let id_search = +prompt("Nhập ID điện thoại:");
        let phone = store.find(phone => phone.id === id_search);
        console.log(phone ? phone : "Không tìm thấy điện thoại.");
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

function sort_price() {
    let sort_order = +prompt("1. Tăng dần, 2. Giảm dần");
    if (sort_order === 1) {
        store.sort((a, b) => a.price - b.price);
    } else if (sort_order === 2) {
        store.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách điện thoại sau khi sắp xếp:", store);
}

function buy_phone() {
    let id_need_buy = +prompt("Nhập ID điện thoại muốn mua:");
    let quantity_buy = +prompt("Nhập số lượng muốn mua:");
    let phone = store.find(phone => phone.id === id_need_buy);
    
    if (!phone) {
        console.log("Điện thoại không tồn tại!");
        return;
    }
    
    if (phone.quantity < quantity_buy) {
        console.log("Không đủ số lượng điện thoại trong kho!");
        return;
    }
    
    phone.quantity -= quantity_buy;
    let cartItem = cart.find(item => item.id === id_need_buy);
    
    if (cartItem) {
        cartItem.quantity += quantity_buy;
    } else {
        cart.push({ id: phone.id, name: phone.name, quantity: quantity_buy, price: phone.price });
    }
    
    console.log(`Mua thành công ${quantity_buy} chiếc '${phone.name}'.`);
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống, không thể thanh toán.");
        return;
    }
    let total_price = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    cart = [];
    console.log(`Thanh toán thành công! Tổng số tiền: ${total_price} VND`);
}

function total_phone_value() {
    let total_value = store.reduce((sum, phone) => sum + phone.quantity * phone.price, 0);
    console.log(`Tổng số tiền của điện thoại trong kho: ${total_value} VND`);
}

function total_phones_by_brand() {
    let brand_count = {};
    store.forEach(phone => {
        brand_count[phone.brand] = (brand_count[phone.brand] || 0) + phone.quantity;
    });
    console.log("Tổng số lượng điện thoại theo từng hãng:", brand_count);
}

function main() {
    let choice;
    do {
        choice = +prompt(
            "1. Hiển thị danh sách điện thoại theo hãng\n" +
            "2. Thêm điện thoại mới vào cửa hàng\n" +
            "3. Tìm kiếm điện thoại theo tên hoặc ID\n" +
            "4. Mua điện thoại\n" +
            "5. Sắp xếp điện thoại theo giá\n" +
            "6. Thanh toán giỏ hàng\n" +
            "7. Hiển thị tổng số tiền của các điện thoại trong kho\n" +
            "8. Hiển thị tổng số lượng điện thoại theo từng hãng\n" +
            "9. Thoát"
        );
        switch (choice) {
            case 1:
                show_phone_by_brand();
                break;
            case 2:
                add_phone();
                break;
            case 3:
                search_phone();
                break;
            case 4:
                buy_phone();
                break;
            case 5:
                sort_price();
                break;
            case 6:
                checkout();
                break;
            case 7:
                total_phone_value();
                break;
            case 8:
                total_phones_by_brand();
                break;
            case 9:
                return;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (true);
}

main();
