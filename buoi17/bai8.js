let date1 = prompt();
let date2 = prompt();
let date = Math.abs(new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24); 
console.log(date);

