/*
  Ex 01. (a) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100

         (b) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

         (c) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/

         //(a) Enter the following code in Browser console
let base = prompt("Enter base:", "Enter a number (e.g 0,1,23 etc)");
let height = prompt("Enter height:", "Enter a number (e.g 0,1,23 etc)");
console.log(`The area of the triangle is ${0.5 * base * height}`);

         //(b) Enter the following code in Browser console
let sideA = prompt("Enter side a:", "Enter a number (e.g 0,1,23 etc)");
let sideB = prompt("Enter side b:", "Enter a number (e.g 0,1,23 etc)");
let sideC = prompt("Enter side c:", "Enter a number (e.g 0,1,23 etc)");
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`);

         //(c) Enter the following code in Browser console
let recLength = prompt("Enter rectangle length:", "Enter a number (e.g 0,1,23 etc)");
let recWidth = prompt("Enter rectangle width:", "Enter a number (e.g 0,1,23 etc)");
console.log(`Area of the rectangle is ${recLength * recWidth}
Perimeter of the rectangle is ${2 * recLength * recWidth}`);

/*
  Ex 02. Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
  and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/

         // Enter the following code in Browser console
let pi = Math.round(Math.PI * 100) / 100; // Round pi to two decimal placed i.e 3.14
let radius = prompt("Enter radius of circle:", "Enter a number (e.g 0,1,23 etc)");
console.log(`Area of the circle is ${pi * radius * radius}
Circumference of the circle is ${2 * pi * radius}`);

/*
  Ex 03. Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/

let yIntercept = 2 * 0 - 2; // x = 0 at y-intercept & y = 2x - 2
let xIntercept = (0 + 2)/2; // y = 0 at x-intercept & x = (y + 2)/2
let slopeFirst = (0 - yIntercept) / (xIntercept - 0); // slope m = dy / dx
console.log(`First Slope is ${slopeFirst}
x-intercept is ${xIntercept}
y-intercept is ${yIntercept}`);

/*
  Ex 04. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/

let point1 = [2, 2], // point (2, 2)
    point2 = [6, 10], // point (6, 10)
    slopeSecond;
slopeSecond = (point2[1] - point1[1]) / (point2[0] - point1[0]); // Slope m = (y2 - y1)/(x2 - x1)
console.log(`Second Slope is ${slopeSecond}`);

/*
  Ex 05. Compare the slope of above two questions.
*/

console.log(`Comparing both Slopes (SecondSlope/FirstSlope) = ${slopeSecond / slopeFirst}`); // second : first

/*
  Ex 06. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at 
what x value y is 0.
*/

          // y = 0 then, x^2 + 6x + 9 = 0
          // => (x)^2 + 2(3)(x) + (3)^2 = 0    as, (a + b)^2 = a^2 + 2ab + b^2
          // => (x + 3)^2 = 0                  as, a^2 = a * a
          // => (x + 3)*(x + 3) = 0
          // => (x + 3) = 0
          // => x = -3
let x = -3,
    y = (x) ** 2 + 6 * (x) + 9;
console.log(`y is ${y} when x = ${x}`);

/*
  Ex 07. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/

         // Enter the following code in Browser console
let hours = prompt("Enter hours:", "Enter a number"),
    rate = prompt("Enter rate per hour:", "Enter a number"),
    earning = hours * rate;
console.log(`Your weekly earning is ${earning}`);

/*
  Ex 08. If the length of your name is greater than 7 say, your name is long else say your name is short.
*/

         // Enter the following code in Browser console
let yourName = prompt("Enter your name", "Enter text here...");
yourName.length > 7
? console.log("Your name is long")
: console.log("Your name is Short");

/*
  Ex 09. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetaye
*/

let firstName = "Muhammad",
    lastName = "Rajpoot";
firstName.length > lastName.length
? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);

/*
  Ex 10. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

I am 225 years older than you.
*/

let myAge = 23,
    yourAge = 22,
    ageDifference = Math.abs(myAge - yourAge);
myAge < yourAge
? console.log(`I am ${ageDifference} years younger than you.`)
: console.log(`I am ${ageDifference} years older than you.`);

/*
  Ex 11. Using prompt get the year the user was born and if the user is 18 or above allow the user 
  to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

         // Enter the following code in Browser console
let birth = prompt("Enter birth year", "Enter a number");
let now = new Date;
let age = now.getFullYear() - birth;
age >= 18
? console.log(`You are ${age}. You are old enough to drive`)
: console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);

/*
  Ex 12. Write a script that prompt the user to enter number of years. Calculate the number 
  of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/

         // Enter the following code in Browser console
let years = prompt("Enter number of years you live:", "Enter a number"),
    sec = years * 31536000;
console.log(`You lived ${sec} seconds.`);

/*
  Ex 13. Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

         // Enter the following code in Browser console
let info = new Date,
    year = info.getFullYear(),
    month = info.getMonth(),
    date = info.getDate(),
    hour = info.getHours(),
    minute = info.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minute}`); // YYYY-MM-DD HH:mm

console.log(`${date}-${month}-${year} ${hour}:${minute}`); // DD-MM-YYYY HH:mm

console.log(`${date}/${month}/${year} ${hour}:${minute}`); // DD/MM/YYYY HH:mm