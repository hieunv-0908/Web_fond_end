let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log("Xe khi chưa cập nhật",{...car});

car.color="red";
car.year="2022"
console.log(car);
console.log("Xe khi đã update",{...car});



