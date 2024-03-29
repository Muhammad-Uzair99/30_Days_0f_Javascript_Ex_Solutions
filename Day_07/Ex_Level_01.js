/*
    Ex 01. Declare a function fullName and it print out your full name.
*/
function fullName1() {
    console.log("Muhammad Uzair");
}
fullName1();

/*
    Ex 02. Declare a function fullName and now it takes firstName, lastName as a 
    parameter and it returns your full - name.
*/
function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName2("Muhammad", "Uzair"));

/*
    Ex 03. Declare a function addNumbers and it takes two two parameters and it 
    returns sum.
*/
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(2, 3));

/*
    Ex 04. An area of a rectangle is calculated as follows: 
    area = length x width. 
    Write a function which calculates areaOfRectangle.
*/
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(4, 8));

/*
    Ex 05. A perimeter of a rectangle is calculated as follows: 
    perimeter= 2x(length + width). 
    Write a function which calculates perimeterOfRectangle.
*/
let perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle(5, 9));

/*
    Ex 06. A volume of a rectangular prism is calculated as follows: 
    volume = length x width x height. 
    Write a function which calculates volumeOfRectPrism.
*/
let volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(5, 3, 7));

/*
    Ex 07. Area of a circle is calculated as follows: 
    area = π x r x r
    Write a function which calculates areaOfCircle
*/
let areaOfCircle = r => Math.PI * r * r;
console.log(areaOfCircle(8));

/*
    Ex 08. Circumference of a circle is calculated as follows: 
    circumference = 2πr
    Write a function which calculates circumOfCircle
*/
let circumOfCircle = r => 2 * Math.PI * r;
console.log(circumOfCircle(9));

/*
    Ex 09. Density of a substance is calculated as follows:
    density = mass / volume
    Write a function which calculates density.
*/
let density = (mass, vol) => mass / vol;
console.log(density(7, 10));

/*
    Ex 10. Speed is calculated by dividing the total distance covered by a moving 
    object divided by the total amount of time taken. Write a function which 
    calculates a speed of a moving object, speed.
*/
let speed = (dist, time) => dist / time;
console.log(speed(5, 9));

/*
    Ex 11. Weight of a substance is calculated as follows:
    weight = mass x gravity
    Write a function which calculates weight.
*/
let weight = (mass, gravity) => (mass * (gravity * 10)) / 10;
console.log(weight(7, 9.8));

/*
    Ex 12. Temperature in oC can be converted to oF using this formula:
    oF = (oC x 9/5) + 32
    Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/
let convertCelsiusToFahrenheit = oC => (oC * 9 / 5) + 32;
console.log(convertCelsiusToFahrenheit(33));

/*
    Ex 13. Body mass index(BMI) is calculated as follows:

    bmi = weight in Kg / (height x height) in m2

    Write a function which calculates bmi. BMI is used to broadly define different 
    weight groups in adults 20 years old or older.Check if a person is underweight, 
    normal, overweight or obese based the information given below.

    => The same groups apply to both men and women.
    => Underweight: BMI is less than 18.5
    => Normal weight: BMI is 18.5 to 24.9
    => Overweight: BMI is 25 to 29.9
    => Obese: BMI is 30 or more
*/
function bmi(weight, height) {
    let num = weight / (height * height);
    if (num < 18.5) {
        return "Underweight";
    } else if (18.5 <= num <= 24.9) {
        return "Normal weight";
    } else if (25 <= num <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(bmi(69, 1.5));

/*
    Ex 14. Write a function called checkSeason, it takes a month parameter and 
    returns the season:Autumn, Winter, Spring or Summer.
*/
let checkSeason = (month) => {
    if (month >= 1 && month <= 2 || month == 12) {
        return 'Winter';
    } else if (month >= 3 && month <= 5) {
        return 'Spring';
    } else if (month >= 6 && month <= 8) {
        return 'Summer';
    } else if (month >= 9 && month <= 11) {
        return 'Autumn';
    } else {
        return 'Invalid month';
    }
}
console.log(checkSeason(7));

/*
    Ex 15. Math.max returns its largest argument. Write a function findMax that 
    takes three arguments and returns their maximum with out using Math.max method.

        console.log(findMax(0, 10, 5))
        10
        console.log(findMax(0, -10, -2))
        0
*/
function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));