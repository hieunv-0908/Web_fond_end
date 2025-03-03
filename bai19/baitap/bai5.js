let input = prompt("Enter charcater string radom:");
let inputSpace = /\s/;
if (inputSpace.test(input)) {
    document.write("Chuỗi có chứa dấu cách");
} else {
    document.write("Chuỗi không chứa dấu cách");
    
}
