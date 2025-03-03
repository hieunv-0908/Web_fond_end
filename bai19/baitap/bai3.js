let vnd;
let usd;
let select = +prompt("Mời nhập vào phương án chuyển đổi-Please enter your conversion plan (1.VND--->USD 2.USD--->VND)");
switch (select) {
    case 1:
        vnd = +prompt("MờI nhập vào số tiền VND-Please enter the amount in VND:");
        usd = vnd / 23000;
        usd = usd.toLocaleString("en-US", { style: "currency" , currency: "USD" });
        document.write("USD "+usd+"");
        break;
    case 2:
        usd = +prompt("MờI nhập vào số tiền USD-Please enter the amount in USD:");
        vnd = usd * 23000;
        vnd = vnd.toLocaleString("vn-VN", { style: "currency", currency: "VND" });
        document.write("VND " + vnd + "");
        break;
    default:
        document.write("Lựa chọn không hợp lệ.");
        break;
}