let result = "javascript" + 5;
// Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi, JavaScript sẽ nối chuỗi
document.write(result,"<br>");

result = "javascript" - 1;
//  Dấu - yêu cầu cả hai toán hạng phải là số.
// "javascript" không thể chuyển thành số → Kết quả là NaN.
document.write(result, "<br>");

result = "3" + 2;
// "3" là chuỗi, + sẽ nối chuỗi với số 2 thành "32".
document.write(result, "<br>");

result = "5" - 4;
// Khi dùng -, JavaScript cố gắng chuyển "5" thành số (5) → 5 - 4 = 1.
document.write(result, "<br>");

result = isNaN( "123");
// "123" có thể chuyển thành số (123), không phải NaN, nên isNaN("123") trả về false.
document.write(result, "<br>");

result = isNaN("hello");
// "hello" không thể chuyển thành số → Kết quả là NaN → isNaN("hello") trả về true.
document.write(result, "<br>");

result = Number.isNaN("123");
// Number.isNaN("123") kiểm tra xem giá trị có chính xác là NaN hay không.
// "123" là chuỗi nhưng không phải NaN, nên kết quả là false.
document.write(result, "<br>");

result = Number.isNaN(NaN);
// Number.isNaN(NaN) kiểm tra xem giá trị có phải NaN không → Kết quả là true.
document.write(result, "<br>");