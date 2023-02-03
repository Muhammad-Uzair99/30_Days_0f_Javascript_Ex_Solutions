/*
  Ex 01. Declare a variable named challenge and assign it to an initial value 
  '30 Days Of JavaScript'.
*/

let challenge = "30 Days Of JavaScript";

/*
  Ex 02. Print the string on the browser console using console.log()
*/

console.log(challenge);

/*
  Ex 03. Print the length of the string on the browser console using console.log()
*/

console.log(challenge.length);

/*
  Ex 04. Change all the string characters to capital letters using toUpperCase() method
*/

console.log(challenge.toUpperCase());

/*
 Ex 06. Change all the string characters to lowercase letters using toLowerCase() method
*/

console.log(challenge.toLowerCase());

/*
 Ex 07. Cut (slice) out the first word of the string using substr() or substring() method
*/

console.log(challenge.substr(3, 4));
         // OR
console.log(challenge.substring(3, 7));

/*
 Ex 08. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
*/

console.log(challenge.substring(3));

/*
  Ex 09. Check if the string contains a word Script using includes() method
*/

console.log(challenge.includes("Script"));

/*
  Ex 10. Split the string into an array using split() method
*/

console.log(challenge.split());

/*
  Ex 11. Split the string 30 Days Of JavaScript at the space using split() method
*/

console.log(challenge.split(' '));

/*
  Ex 12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the 
  comma and change it to an array.
*/

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));
         // OR
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(","));

/*
  Ex 13. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
*/

console.log(challenge.replace("JavaScript", "Python"));

/*
  Ex 14. What is character at index 15 in '30 Days Of JavaScript' string? Use 
  charAt() method.
*/

console.log(challenge.charAt(15));

/*
  Ex 15. What is the character code of J in '30 Days Of JavaScript' string using 
  charCodeAt()
*/

console.log(challenge.charCodeAt(challenge.length-10));
         // OR
console.log(challenge.charCodeAt(11));
         // OR
console.log(challenge.charCodeAt(challenge.indexOf("J")));

/*
  Ex 16. Use indexOf to determine the position of the first occurrence of a in 30 
  Days Of JavaScript
*/

console.log(challenge.indexOf("a"));

/*
  Ex 17. Use lastIndexOf to determine the position of the last occurrence of a in 
  30 Days Of JavaScript.
*/

console.log(challenge.lastIndexOf("a"));

/*
  Ex 18. Use indexOf to find the position of the first occurrence of the word 
  because in the following sentence:'You cannot end a sentence with because because 
  because is a conjunction'
*/

console.log('You cannot end a sentence with because because because \
is a conjunction'.indexOf("because"));

/*
  Ex 19. Use lastIndexOf to find the position of the last occurrence of the word because 
  in the following sentence:'You cannot end a sentence with because because because is 
  a conjunction'
*/

console.log('You cannot end a sentence with because because because \
is a conjunction'.lastIndexOf("because"));


/*
  Ex 20. Use search to find the position of the first occurrence of the word because in 
  the following sentence:'You cannot end a sentence with because because because is a 
  conjunction'
*/

console.log('You cannot end a sentence with because because because \
is a conjunction'.search("because"));


/*
  Ex 21. Use trim() to remove any trailing whitespace at the beginning and the end of a 
  string.E.g ' 30 Days Of JavaScript '.
*/

console.log(' 30 Days Of JavaScript '.trim());


/*
  Ex 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result 
  true
*/

console.log(challenge.startsWith("30"));

/*
  Ex 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result 
  true
*/

console.log(challenge.endsWith("Script"));

/*
  Ex 23. Use match() method to find all the a’s in 30 Days Of JavaScript
*/

console.log(challenge.match(/a/gi));

/*
  Ex 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 
  '30 Days Of JavaScript'
*/

let string = "30 Days of";
console.log(string.concat("JavaScript"));

/*
  Ex 25. Use repeat() method to print 30 Days Of JavaScript 2 times
*/

console.log(challenge.repeat(2));