const product1 = {
    productName: 'Pizza',
    priceUnit: 59.90,
    quantityBuy: 2,
};

product1.priceTotal = (product1.priceUnit * product1.quantityBuy).toFixed(2);

const product2 = {
    productName: 'Pudim',
    priceUnit: 19.20,
    quantityBuy: 2,
};

product2.priceTotal = (product2.priceUnit * product2.quantityBuy).toFixed(2);

const product3 = {
    productName: 'Suco',
    priceUnit: 9.10,
    quantityBuy: 3,
};

product3.priceTotal = (product3.priceUnit * product3.quantityBuy).toFixed(2);
let finalPrice = (
    parseFloat(product1.priceTotal) + 
    parseFloat(product2.priceTotal) + 
    parseFloat(product3.priceTotal)
  ).toFixed(2);

const card = {
    clientName: 'Ricardo',
    age: 39,
    products: [product1, product2, product3]
};
card[`clientName`]= "Ricardo Galvão";

console.log(card.clientName);
console.log(card.age)
card[`age`] = 38
console.log(card.age)
console.log(product1.productName)
console.log(product3.priceUnit)
