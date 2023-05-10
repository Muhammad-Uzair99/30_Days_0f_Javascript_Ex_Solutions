/* 
    Ex 01. Create a separate countries.js file and store the countries 
    array in to this file, create a separate file web_techs.js and 
    store the webTechs array in to this file. Access both file in main.js file 
*/
import {countries} from './countries.js';
import * as techs from './web_techs.js';

console.log(countries);
console.log(techs.webTechs);

/* 
    Ex 08. In countries array check if 'Ethiopia' exists in the array 
    if it exists print 'ETHIOPIA'. If it does not exist add to the 
    countries list.
*/
countries.includes("Ethiopia") ? console.log(countries[countries.indexOf("Ethiopia")].toUpperCase()) : countries.push("Ethiopia");

/* 
    Ex 09. In the webTechs array check if Sass exists in the array and 
    if it exists print 'Sass is a CSS preprocess'. If it does not exist 
    add Sass to the array and print the array. 
*/
techs.webTechs.includes("Sass") ? console.log(`${techs.webTechs[techs.webTechs.indexOf("Sass")]} is a CSS preprocess`) : techs.webTechs.push("Sass");
console.log(techs.webTechs);