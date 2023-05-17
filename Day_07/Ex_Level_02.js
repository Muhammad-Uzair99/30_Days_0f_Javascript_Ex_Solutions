/*
    Ex 01. Linear equation is calculated as follows: 
    ax + by + c = 0
    Write a function which calculates value of a linear equation, solveLinEquation.
*/
let solveLinEquation = (a = 0, b = 0, c = 0, x = 0, y = 0) => (a*x) + (b*y) + c;
console.log(solveLinEquation(2, 4, 3, 6, 5));

/*
    Ex 02. Quadratic equation is calculated as follows: 
    ax2 + bx + c = 0
    Write a function which calculates value or values of a quadratic equation, 
    solveQuadEquation.
*/
let solveQuadEquation = (a, b, c) => {
    if (a == null && b == null && c == null) {
        return '{0}';
    }
    return `{${(-b + Math.sqrt( b*b - 4*a*c )) / (2*a)}, ${(-b - Math.sqrt( b*b - 4*a*c )) / (2*a)}}`
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12)); 
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));

/*
    Ex 03. Declare a function name printArray. It takes array as a parameter and 
    it prints out each value of the array.
*/
let printArray = (arr) => console.log(...arr);
printArray([1, 2, 3, 4]);

/*
    Ex 04. Write a function name showDateTime which shows time in this format: 
    08/01/2020 04:08 using the Date object.
        showDateTime()
        08/01/2020 04:08
*/

let showDateTime = () => {
    let date = new Date();
    console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString('en-US', {hour12: false})}`);
}
showDateTime();

/*
    Ex 05. Declare a function name swapValues. This function swaps value of x to y.
        swapValues(3, 4) // x => 4, y=>3
        swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x , y) {
    let a = x;
    x = y;
    y = a;
    console.log(`x=${x}, y=${y}`);
}
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

/*
    Ex 06. Declare a function name reverseArray. It takes array as a parameter and 
    it returns the reverse of the array (don't use method).
        console.log(reverseArray([1, 2, 3, 4, 5]))
        //[5, 4, 3, 2, 1]
        console.log(reverseArray(['A', 'B', 'C']))
        //['C', 'B', 'A']
*/
let reverseArray = arr => {
    let revArr = [];
    for (let i = arr.length-1; i >=0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

/*
    Ex 07. Declare a function name capitalizeArray. It takes array as a parameter 
    and it returns the - capitalizedarray.
*/
function capitalizeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
console.log(capitalizeArray(['xwx','getve']));

/*
    Ex 08. Declare a function name addItem. It takes an item parameter and it 
    returns an array after adding the item
*/
function addItem(item) {
    return [item];
}
console.log(addItem('apple'));

/*
    Ex 09. Declare a function name removeItem. It takes an index parameter and it 
    returns an array after removing an item
*/
let testArr = ['apple', 'banana', 'guava', 'mango', 'graps']
function removeItem(index) {
    testArr.splice(index, 1);
    return testArr;
}
console.log(removeItem(1));

/*
    Ex 10. Declare a function name sumOfNumbers. It takes a number parameter and 
    it adds all the numbers in that range.
*/
function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(4));

/*
    Ex 11. Declare a function name sumOfOdds. It takes a number parameter and it 
    adds all the odd numbers in that - range.
*/
function sumOfOdds(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if(i%2 != 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(5));

/*
    Ex 12. Declare a function name sumOfEven. It takes a number parameter and it 
    adds all the even numbers in that - range.

*/
function sumOfEven(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if(i%2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEven(5));

/*
    Ex 13. Declare a function name evensAndOdds . It takes a positive integer as 
    parameter and it counts number of evens and odds in the number.
        evensAndOdds(100);
        The number of odds are 50.
        The number of evens are 51.
*/
function evensAndOdds(num) {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i <= num; i++) {
        if(i%2 == 0) {
            evens++;
        } else {
            odds++;
        }
    }
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
}
evensAndOdds(100);

/*
    Ex 14. Write a function which takes any number of arguments and return the sum 
    of the arguments
        sum(1, 2, 3) // -> 6
        sum(1, 2, 3, 4) // -> 10
*/
let sum = (...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

/*
    Ex 15. Write a function which generates a randomUserIp.
*/
function randomUserIp() {
    let ip = [];
    for (let i = 0; i < 4 ; i++) {
        ip.push(Math.floor(Math.random() * 256));
    }
    return ip.join(".");
}
console.log(randomUserIp());

/*
    Ex 16. Write a function which generates a randomMacAddress.
*/
function randomMacAddress() {
    let string = "0123456789ABCDEF";
    let macIP = []
    for (let i = 0; i < 6; i++) {
        macIP.push(
            string[Math.floor(Math.random() * string.length)] + string[Math.floor(Math.random() * string.length)]
        );
    }
    return macIP.join(":");
}
console.log(randomMacAddress());

/*
    Ex 17. Declare a function name randomHexaNumberGenerator. When this function 
    is called it generates a random hexadecimal number. The function return the 
    hexadecimal number.
        console.log(randomHexaNumberGenerator());
        '#ee33df'
*/
function randomHexaNumberGenerator() {
    let string = "0123456789ABCDEF";
    let hex = ["#"];
    for (let i = 0; i < 6; i++) {
        hex.push(
            string[Math.floor(Math.random() * string.length)]
        );
    }
    return hex.join("");
}
console.log(randomHexaNumberGenerator());

/*
    Ex 18. Declare a function name userIdGenerator. When this function is called 
    it generates seven character id. The function return the id.
        console.log(userIdGenerator());
        41XTDbE
*/
function userIdGenerator() {
    let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = [];
    for (let i = 0; i < 7; i++) {
        pass.push(str[Math.floor( Math.random() * str.length)]);
    }
    return pass.join("");
}
console.log(userIdGenerator());