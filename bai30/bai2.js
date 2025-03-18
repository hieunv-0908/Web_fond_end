let library = [
    { id: 1, name: "JavaScript Basics", price: 200, quantity: 10, category: "Programming" },
    { id: 2, name: "Advanced Java", price: 300, quantity: 5, category: "Programming" },
    { id: 3, name: "Python for Beginners", price: 250, quantity: 8, category: "Programming" }
];

let cart = [];

function show_book_category() {
    let category_search = prompt("Nhập vào thể loại sách muốn tìm:");
    let filtered_books = library.filter(book => book.category.toLowerCase() === category_search.toLowerCase());
    
    if (filtered_books.length === 0) {
        console.log("Không tìm thấy sách thuộc thể loại này.");
    } else {
        console.log("Danh sách sách trong thể loại:", filtered_books);
    }
}

function add_book() {
    let new_book = {
        id: library.length ? library[library.length - 1].id + 1 : 1,
        name: prompt("Mời nhập vào tên sách mới muốn thêm:"),
        price: +prompt("Mời nhập vào giá của sách mới:"),
        quantity: +prompt("Mời nhập vào số lượng sách thêm vào:"),
        category: prompt("Mời nhập vào thể loại sách:")
    };
    library.push(new_book);
    console.log("Thêm sách thành công.");
}

function search_book_name_id() {
    let search_type = +prompt("1. Tìm theo tên, 2. Tìm theo ID");
    if (search_type === 1) {
        let name_search = prompt("Nhập tên sách:").toLowerCase();
        let results = library.filter(book => book.name.toLowerCase().includes(name_search));
        console.log(results.length ? results : "Không tìm thấy sách.");
    } else if (search_type === 2) {
        let id_search = +prompt("Nhập ID sách:");
        let book = library.find(book => book.id === id_search);
        console.log(book ? book : "Không tìm thấy sách.");
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

function sort_price() {
    let sort_order = +prompt("1. Tăng dần, 2. Giảm dần");
    if (sort_order === 1) {
        library.sort((a, b) => a.price - b.price);
    } else if (sort_order === 2) {
        library.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách sách sau khi sắp xếp:", library);
}

function buy_book_by_id() {
    let id_need_buy = +prompt("Mời nhập vào id sách muốn mua:");
    let quantity_buy = +prompt("Mời nhập số lượng muốn mua:");
    let book = library.find(book => book.id === id_need_buy);
    
    if (!book) {
        console.log("Sách không tồn tại!");
        return;
    }
    
    if (book.quantity < quantity_buy) {
        console.log("Không đủ số lượng sách trong kho!");
        return;
    }
    
    book.quantity -= quantity_buy;
    let cartItem = cart.find(item => item.id === id_need_buy);
    
    if (cartItem) {
        cartItem.quantity += quantity_buy;
    } else {
        cart.push({ id: book.id, name: book.name, quantity: quantity_buy, price: book.price });
    }
    
    console.log(`Mua thành công ${quantity_buy} cuốn '${book.name}'.`);
}

function calculate_cart() {
    let total_quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let total_price = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    console.log(`Tổng số sách đã mua: ${total_quantity}, Tổng tiền: ${total_price}`);
}

function total_books_in_stock() {
    let total_stock = library.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số sách trong kho: ${total_stock}`);
}

function main() {
    let choice;
    do {
        choice = +prompt(
            "1. Hiển thị danh sách sách theo thể loại\n" +
            "2. Thêm sách mới vào kho\n" +
            "3. Tìm kiếm sách theo tên hoặc ID\n" +
            "4. Mua sách\n" +
            "5. Sắp xếp sách theo giá\n" +
            "6. Tính tổng số sách đã mua và tổng tiền\n" +
            "7. Hiển thị tổng số sách trong kho\n" +
            "8. Thoát"
        );
        switch (choice) {
            case 1:
                show_book_category();
                break;
            case 2:
                add_book();
                break;
            case 3:
                search_book_name_id();
                break;
            case 4:
                buy_book_by_id();
                break;
            case 5:
                sort_price();
                break;
            case 6:
                calculate_cart();
                break;
            case 7:
                total_books_in_stock();
                break;
            case 8:
                return;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (true);
}

main();
