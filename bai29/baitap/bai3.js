let menu = {};

function addDish() {
    let category = prompt("Nhập danh mục món ăn (VD: Món chính, Đồ uống...):");
    if (!menu[category]) {
        menu[category] = [];
    }
    let dish = {
        name: prompt("Nhập tên món ăn:"),
        price: parseFloat(prompt("Nhập giá món ăn:")),
        description: prompt("Nhập mô tả món ăn:")
    };
    menu[category].push(dish);
    console.log("Món ăn đã được thêm thành công!");
}

function removeDish() {
    let name = prompt("Nhập tên món ăn cần xóa:");
    for (let category in menu) {
        menu[category] = menu[category].filter(dish => dish.name !== name);
    }
    console.log("Đã xóa món ăn nếu tồn tại!");
}

function updateDish() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            dish.name = prompt("Nhập tên mới:") || dish.name;
            dish.price = parseFloat(prompt("Nhập giá mới:")) || dish.price;
            dish.description = prompt("Nhập mô tả mới:") || dish.description;
            console.log("Đã cập nhật món ăn!");
            return;
        }
    }
    console.log("Không tìm thấy món ăn!");
}

function showMenu() {
    console.log("--- MENU NHÀ HÀNG ---");
    for (let category in menu) {
        console.log(`\n${category}:`);
        menu[category].forEach(dish => {
            console.log(`- ${dish.name} | ${dish.price} VNĐ | ${dish.description}`);
        });
    }
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            console.log(`Tìm thấy: ${dish.name} - ${dish.price} VNĐ - ${dish.description}`);
            return;
        }
    }
    console.log("Không tìm thấy món ăn!");
}

function main() {
    let choice;
    do {
        choice = prompt("1. Thêm món ăn\n2. Xóa món ăn\n3. Cập nhật món ăn\n4. Hiển thị menu\n5. Tìm kiếm món ăn\n6. Thoát\nNhập lựa chọn của bạn:");
        switch (choice) {
            case "1":
                addDish();
                break;
            case "2":
                removeDish();
                break;
            case "3":
                updateDish();
                break;
            case "4":
                showMenu();
                break;
            case "5":
                searchDish();
                break;
        }
    } while (choice !== "6");
}

main();
