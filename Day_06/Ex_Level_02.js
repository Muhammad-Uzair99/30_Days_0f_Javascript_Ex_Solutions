/*
    Develop a small script which generate any number of characters random id:
        fe3jo1gl124g
        xkqci4utda1lmbelpkm03rba
*/
let char = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomID = '';
for (let i = 0; i <= Math.floor(Math.random()*50); i++) {
    randomID += char[Math.floor(Math.random()*char.length)];
}
console.log(randomID);

/*
    Write a script which generates a random hexadecimal number.
        '#ee33df'
*/
let hexChar = '0123456789abcdef';
let hexNumber = '#'
for (let i = 0; i < 6; i++) {
    hexNumber += hexChar[Math.floor(Math.random()*hexChar.length)];
}
console.log(hexNumber);

/*
    Write a script which generates a random rgb color number.
        rgb(240,180,80)
*/
let colorValues = [];
for (let i = 0; i < 3; i++) {
    colorValues.push(Math.floor(Math.random()*256));
}
console.log(`rgb(${colorValues.join(', ')})`);

/*
    Using the above countries array, create the following new array.
        ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", 
        "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
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
const countriesNew = [];
for (country of countries) {
    countriesNew.push(country.toUpperCase());
}
console.log(countriesNew);

/*
    Using the above countries array, create an array for countries length'.
        [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const countriesLength = [];
for (country of countries) {
    countriesLength.push(country.length);
}
console.log(countriesLength);

/*
    Use the countries array to create the following array of arrays:
        [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
        ]
*/
const countriesAbr = [];
for (country of countries) {
    countriesAbr.push(
        [
            country, country.slice(0, 3).toUpperCase(), country.length
        ]
    );
}
console.log(countriesAbr);

/*
    In above countries array, check if there is a country or countries 
    containing the word 'land'. If there are countries containing 'land', 
    print it as array. If there is no country containing the word 'land', 
    print 'All these countries are without land'.
        ['Finland','Ireland', 'Iceland']
*/
const countryLand = [];
for (country of countries) {
    if (country.includes('land')) {
        countryLand.push(country);
    }
}
if (countryLand.length != 0) {
    console.log(countryLand);
} else {
    console.log(`'All these countries are without land`);
}

/*
    In above countries array, check if there is a country or countries end 
    with a substring 'ia'. If there are countries end with, print it as 
    array. If there is no country containing the word 'ai', print 
    'These are countries ends without ia'.
        ['Albania', 'Bolivia','Ethiopia']
*/
const countryEnd = [];
for (country of countries) {
    if (country.endsWith('ia')) {
        countryEnd.push(country);
    }
}
if (countryEnd.lenth != 0) {
    console.log(countryEnd);
} else {
    console.log('These are countries ends without ia');
}

/*
    Using the above countries array, find the country containing the biggest 
    number of characters.
        Ethiopia
*/
let countryLongest;
let length = 0;
for (country of countries) {
    if (country.length > length) {
        countryLongest = country;
        length = country.length;
    }
}
console.log(countryLongest);

/*
    Using the above countries array, find the country containing only 5 
    characters.
        ['Japan', 'Kenya']
*/
const countries5 = [];
for (country of countries) {
    if (country.length == 5) {
        countries5.push(country);
    }
}
console.log(countries5);

/*
    Find the longest word in the webTechs array
*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let longest;
length = 0;
for (tech of webTechs) {
    if (tech.length > length) {
        longest = tech;
        length = tech.length;
    }
}
console.log(longest);

/*
    Use the webTechs array to create the following array of arrays:
        [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],
        ["Node", 4],["MongoDB", 7]]
*/
const webTechArr = [];
for (tech of webTechs) {
    webTechArr.push(
        [tech, tech.length]
    )
}
console.log(webTechArr);

/*
    An application created using MongoDB, Express, React and Node is called a 
    MERN stack app. Create the acronym MERN by using the array mernStack
*/
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (tech of mernStack) {
    acronym += tech[0];
}
console.log(acronym);

/*
    Iterate through the array, 
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
    using a for loop or for of loop and print out the items.
*/
for (item of webTechs) {
    console.log(item);
}

/*
    This is a fruit array , reverse the order using loop without using a 
    reverse method.
*/
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruit;
for (let i = 0; i < fruits.length / 2; i++) {
    fruit = fruits[i];
    fruits[i] = fruits[fruits.length - i - 1];
    fruits[fruits.length - i - 1] = fruit;
}
console.log(fruits)

/*
    Print all the elements of array as shown below.
        HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
        MONGODB
*/
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (arr of fullStack) {
    for (item of arr) {
        console.log(item.toUpperCase());
    }
}