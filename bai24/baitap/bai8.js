let inputString = "";
let choice;

do {
    choice = +prompt(
        "MENU\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n" +
        "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n" +
        "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n" +
        "6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n" +
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
            let words = [];
            let word = "";
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] !== ' ') {
                    word += inputString[i].toLowerCase();
                } else if (word !== "") {
                    words.push(word);
                    word = "";
                }
            }
            if (word !== "") words.push(word);

            let wordCount = {};
            for (let i = 0; i < words.length; i++) {
                if (wordCount[words[i]]) {
                    wordCount[words[i]]++;
                } else {
                    wordCount[words[i]] = 1;
                }
            }

            let result = "";
            for (let key in wordCount) {
                if (wordCount[key] > 1) {
                    result += key + ": " + wordCount[key] + "\n";
                }
            }
            alert("Các từ trùng lặp và số lần xuất hiện:\n" + result);
            break;
        case 4:
            let minWord = "", maxWord = "";
            word = "";
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] !== ' ') {
                    word += inputString[i];
                } else if (word !== "") {
                    if (minWord === "" || word.length < minWord.length) minWord = word;
                    if (maxWord === "" || word.length > maxWord.length) maxWord = word;
                    word = "";
                }
            }
            if (word !== "") {
                if (minWord === "" || word.length < minWord.length) minWord = word;
                if (maxWord === "" || word.length > maxWord.length) maxWord = word;
            }
            alert("Từ ngắn nhất: " + minWord + "\nTừ dài nhất: " + maxWord);
            break;
        case 5:
            let charCount = {};
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] !== ' ') {
                    if (charCount[inputString[i]]) {
                        charCount[inputString[i]]++;
                    } else {
                        charCount[inputString[i]] = 1;
                    }
                }
            }

            let maxOccurrences = 0;
            let resultChars = "";
            for (let key in charCount) {
                if (charCount[key] > maxOccurrences) {
                    maxOccurrences = charCount[key];
                    resultChars = key + ": " + charCount[key] + "\n";
                } else if (charCount[key] === maxOccurrences) {
                    resultChars += key + ": " + charCount[key] + "\n";
                }
            }
            alert("Ký tự xuất hiện nhiều nhất:\n" + resultChars);
            break;
        case 6:
            let snakeCaseString = "";
            for (let i = 0; i < inputString.length; i++) {
                let char = inputString[i].toLowerCase();
                if (char !== ' ') {
                    snakeCaseString += char;
                } else if (i !== 0 && snakeCaseString[snakeCaseString.length - 1] !== '_') {
                    snakeCaseString += '_';
                }
            }
            alert("Chuỗi dạng snake_case: " + snakeCaseString);
            break;
        case 7:
            alert("Chương trình kết thúc.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 7);