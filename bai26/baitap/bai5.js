let array = [];
let n = +prompt("Moi nhap vao so luong phan tu trong mang");
if (n < 0) {
  console.log("dau vao loi");
} else if (n == 0) {
    console.log("mang rong");
}else {
    for (let i = 0; i < n; i++) {
        let element_array_temp=+prompt();
        if(isNaN(element_array_temp)){
            i--;
            console.log("dau vao loi");
        }else{
            array.push(element_array_temp);
        }
    }
}

let array_temp=Math.max(...array);
let maxNumbers = array.filter(num => num==array_temp);
console.log(maxNumbers);
