/*
    Ex 01. Create an empty object called dog
*/
const dog = {};

/*
    Ex 02. Print the the dog object on the console
*/
console.log(dog);

/*
    Ex 03. Add name, legs, color, age and bark properties for the dog object. 
    The bark property is a method which return woof woof
*/
dog.name = "Jack";
dog.legs = 4;
dog.color = "Brown";
dog.age = 10;
dog.bark = () => "Woof Woof";

/*
    Ex 04. Get name, legs, color, age and bark value from the dog object
*/
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

/*
    Ex 05. Set new properties the dog object: breed, getDogInfo
*/
dog.breed = "Siberian Husky";
dog.getDogInfo = () => `${dog.name} is a ${dog.age} years old ${dog.color, dog.breed} with ${dog.legs} legs who says ${dog.bark()}`;
console.log(dog.getDogInfo());