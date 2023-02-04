/*
  Ex 01. Declare firstName, lastName, country, city, age, isMarried, 
  year variable and assign value to it and use the typeof operator to 
  check different data types.
*/

let firstName = "Muhammad",
    lastName = "Uzair",
    countary = "Pakistan",
    city = "Islamabad",
    age = 23,
    isMarried = false,
    year = 2023;
console.log(typeof(firstName), typeof(lastName), typeof(countary), 
typeof(city), typeof(age), typeof(isMarried), typeof(year));

/*
  Ex 02. Check if type of '10' is equal to 10
*/

console.log('10' === 10);
        //OR
console.log(typeof('10') == typeof(10));

/*
  Ex 03. Check if parseInt('9.8') is equal to 10
*/

console.log(parseInt('9.8') == 10);

/*
  Ex 04. Boolean value is either true or false.
*/

console.log(true || false);

/*
  Ex 05. Write three JavaScript statement which provide truthy value.
*/

console.log(0 == false);
console.log(1 == true);
console.log('1' == true);

/*
  Ex 06. Write three JavaScript statement which provide falsy value.
*/

console.log(9.999999999999999 == 10);
console.log('' == true);
console.log(5 <= 4.9999999999);

/*
  Ex 07-18. Figure out the result of the following comparison expression 
  first without using console.log(). After you decide the result 
  confirm it using console.log()
*/

console.log("Solution to Ex 07-18");
//console.log(4 > 3)  //true
//console.log(4 >= 3)  //true
//console.log(4 < 3)  //false
//console.log(4 <= 3)  //false
//console.log(4 == 4)  //true
//console.log(4 === 4)  //true
//console.log(4 != 4)  //false
//console.log(4 !== 4)  //false
//console.log(4 != '4')  //false
//console.log(4 == '4')  //true
//console.log(4 === '4')  //false

/*
  Ex 19. Find the length of python and jargon and make a falsy 
  comparison statement.
*/

console.log('python'.length > 'jargon'.length);

/*
  Ex 20-31. Figure out the result of the following expressions first 
  without using console.log(). After you decide the result confirm it 
  by using console.log()
*/

console.log("Solution to Ex 20-31");
//console.log(4 > 3 && 10 < 12)  //true
//console.log(4 > 3 && 10 > 12)  //false
//console.log(4 > 3 || 10 < 12)  //true
//console.log(4 > 3 || 10 > 12)  //true
//console.log(!(4 > 3))  //false
//console.log(!(4 < 3))  //true
//console.log(!(false))  //true
//console.log(!(4 > 3 && 10 < 12))  //false
//console.log(!(4 > 3 && 10 > 12))  //true
//console.log(!(4 === '4'))  //true

//There is no 'on' in both dragon and python  //true
//console.log('dragon'.includes('on') && 'python'.includes('on'));

/*
    Ex 32-39. Use the Date object to do the following activities
*/

let date = new Date();

//  What is the year today?
console.log(date.getFullYear());

//  What is the month today as a number?
console.log(date.getMonth() + 1);

//  What is the date today?
console.log(date.getDate());

//  What is the day today as a number?
console.log(date.getDay());

//  What is the hours now?
console.log(date.getHours());

//  What is the minutes now?
console.log(date.getMinutes());

//  Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());
       //OR
console.log(Date.now());
