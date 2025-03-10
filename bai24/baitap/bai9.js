let inputString = "";
let choice;

do {
    choice = +prompt(
        "MENU\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Đếm số lượng các ký tự là chữ và số trong chuỗi\n" +
        "4. Chuyển đổi viết hoa ↔ viết thường\n" +
        "5. Trộn lẫn chuỗi với một chuỗi khác\n" +
        "6. Sắp xếp từ theo độ dài\n" +
        "7. Thoát chương trình\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            inputString = prompt("Nhập vào chuỗi ký tự:");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + inputString);
            break;
        case 3:
            let letterCount = 0, digitCount = 0;
            for (let i = 0; i < inputString.length; i++) {
                if ((inputString[i] >= 'a' && inputString[i] <= 'z') || (inputString[i] >= 'A' && inputString[i] <= 'Z')) {
                    letterCount++;
                } else if (inputString[i] >= '0' && inputString[i] <= '9') {
                    digitCount++;
                }
            }
            alert("Chữ cái: " + letterCount + "\nSố: " + digitCount);
            break;
        case 4:
            let toggledString = "";
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] >= 'a' && inputString[i] <= 'z') {
                    toggledString += inputString[i].toUpperCase();
                } else if (inputString[i] >= 'A' && inputString[i] <= 'Z') {
                    toggledString += inputString[i].toLowerCase();
                } else {
                    toggledString += inputString[i];
                }
            }
            alert("Chuỗi sau khi chuyển đổi: " + toggledString);
            break;
        case 5:
            let secondString = prompt("Nhập vào chuỗi thứ hai:");
            let mixedString = "";
            let maxLength = Math.max(inputString.length, secondString.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < inputString.length) mixedString += inputString[i];
                if (i < secondString.length) mixedString += secondString[i];
            }
            alert("Chuỗi sau khi trộn: " + mixedString);
            break;
        case 6:
            let words = inputString.split(" ");
            for (let i = 0; i < words.length - 1; i++) {
                for (let j = i + 1; j < words.length; j++) {
                    if (words[i].length > words[j].length) {
                        let temp = words[i];
                        words[i] = words[j];
                        words[j] = temp;
                    }
                }
            }
            alert("Các từ sau khi sắp xếp theo độ dài: " + words.join(" "));
            break;
        case 7:
            alert("Chương trình kết thúc.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 7);
