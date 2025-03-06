let arr = [34, 7, 23, 32, 5, 62, 78, 1, 45, 90,100];
document.write("Dãy số ban đầu: " + arr.join(", ") + "<br>");   
arr.sort((a, b) => a - b);
document.write("Dãy số sau khi sắp xếp giảm dần là: " + arr.join(", "));    