/* 
    Ex 02. Rmove all the punctuations and change the string to array 
    and count the number of words in the array
*/
let text = `I love teaching and empowering people. I teach HTML, CSS, \
JS, React, Python.`;

let words = text.replace(/[,]/g, '').replace(/[.]/g, '').split(' ');

console.log(words)
console.log(words.length)

/*
    Ex 03. In the following shopping cart add, remove, edit items
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

/*
    Ex 04. add 'Meat' in the beginning of your shopping cart if it 
    has not been already added
*/
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

/*
    Ex 05. Add Sugar at the end of you shopping cart if it has not 
    been already added
*/
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);

/*
    Ex 06. Remove 'Honey' if you are allergic to honey
*/

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

/*
    Ex 07. Modify Tea to 'Green Tea'
*/

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1 , "Green Tea");
console.log(shoppingCart);