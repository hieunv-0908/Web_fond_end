function sumPrice(cart) {
  let sumPrice = 0;
  for (const element of cart) {
    sumPrice += element.Price;
  }
  return sumPrice;
}



const cart = [
  { Name: "Mèn mén", Price: 30000, quantity: 2 },
  { Name: "Mì tôm", Price: 5000, quantity: 1 },
  { Name: "Bánh bao", Price: 15000, quantity: 3 },
];
console.log(sumPrice(cart));


