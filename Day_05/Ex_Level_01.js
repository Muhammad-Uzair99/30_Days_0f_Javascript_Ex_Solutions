const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
/*
  Ex 01. Declare an empty array
*/

let emptyArr = new Array();
console.log(emptyArr);

/*
  Ex 02. Declare an array with more than 5 number of elements
*/

let myArr = [0, 1, 2, 3, 4, 5, 6];

/*
  Ex 03. Find the length of your array
*/

console.log(myArr.length); //7

/*
  Ex 04. Get the first item, the middle item and the last item of the array
*/

console.log(myArr[0],
            myArr[(myArr.length - 1) / 2 ],
            myArr[myArr.length - 1]
            );

/*
  Ex 05. Declare an array called mixedDataTypes, put different data types in 
  the array and find the length of the array. The array size should be 
  greater than 5
*/

let mixedDataTypes = [1, "str", null, undefined, true, ["arr"], {"key": "value"}];
console.log(mixedDataTypes);

/*
  Ex 06. Declare an array variable name itCompanies and assign initial values 
  Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
*/

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/*
  Ex 07. Print the array using console.log()
*/

console.log(itCompanies);

/*
  Ex 08. Print the number of companies in the array
*/

console.log(itCompanies.length);

/*
  Ex 09. Print the first company, middle and last company
*/

console.log(itCompanies[0],
    itCompanies[(itCompanies.length - 1) / 2 ],
    itCompanies[itCompanies.length - 1]
    );

/*
  Ex 10. Print out each company
*/

console.log(itCompanies.join(''));

/*
  Ex 11. Change each company name to uppercase one by one and print them out
*/

console.log(itCompanies[0].toUpperCase(),
            itCompanies[1].toUpperCase(),
            itCompanies[2].toUpperCase(),
            itCompanies[3].toUpperCase(),
            itCompanies[4].toUpperCase(),
            itCompanies[5].toUpperCase(),
            itCompanies[6].toUpperCase()
            );

/*
  Ex 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
  IBM,Oracle and Amazon are big IT companies.
*/

console.log(`${itCompanies.slice(0, itCompanies.length - 1).join(", ")} and \
${itCompanies[itCompanies.length - 1]} are big IT companies.`);

/*
  Ex 13. Check if a certain company exists in the itCompanies array. If it exist 
  return the company else return a company is not found
*/

itCompanies.indexOf("Amazon") >= 0
? console.log("the company is found")
: console.log("a company is not found");

/*
  Ex 14. Filter out companies which have more than one 'o' without the filter 
  method
*/

let filterArr = [];
for (let i = 0; i < itCompanies.length; i++){
  if (itCompanies[i].includes("oo")) {
    filterArr.push(itCompanies[i]);
  }
}

console.log(filterArr);

/*
  Ex 15. Sort the array using sort() method
*/

console.log(itCompanies.sort());

/*
  Ex 16. Reverse the array using reverse() method
*/

console.log(itCompanies.reverse());

/*
  Ex 17. Slice out the first 3 companies from the array
*/

console.log(itCompanies.slice(0, 3));

/*
  Ex 18. Slice out the last 3 companies from the array
*/

console.log(itCompanies.slice(itCompanies.length-3));

/*
  Ex 19. Slice out the middle IT company or companies from the array
*/

console.log(itCompanies.slice(3, 4));

/*
  Ex 20. Remove the first IT company from the array
*/

console.log(itCompanies.shift());

/*
  Ex 21. Remove the middle IT company or companies from the array
*/

console.log(itCompanies.splice(Math.floor((itCompanies.length - 1) / 2), 2));

/*
  Ex 22. Remove the last IT company from the array
*/

console.log(itCompanies.pop());

/*
  Ex 23. Remove all IT companies
*/

let iter = itCompanies.length;
for (let j = 0; j < iter; j++){
  itCompanies.pop();
}
console.log(itCompanies);
