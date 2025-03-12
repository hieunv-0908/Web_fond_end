let array = prompt("Mời nhập vào email:");
if (array.includes("@") && !array.includes(" ")) {
    console.log("email hợp lệ.");
}else {
    console.log("email không hợ lệ.");
}
