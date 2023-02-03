/*
  Ex 01. Using console.log() print out the following statement:

           The quote 'There is no exercise better for 
           the heart than reaching down and lifting 
           people up.' by John Holmes teaches us to 
           help one another.
*/

console.log(`The quote 'There is no exercise better for\ 
the heart than reaching down and lifting \
people up.' by John Holmes teaches us to \
help one another.`);

/*
  Ex 02. Using console.log() print out the following quote by Mother Teresa:

           "Love is not patronizing and charity isn't 
           about pity, it is about love. Charity and 
           love are the same -- with charity you give 
           love, so don't just give money but reach 
           out your hand instead."
*/

console.log(`"Love is not patronizing and charity isn't \
about pity, it is about love. Charity and \
love are the same -- with charity you give \
love, so don't just give money but reach \
out your hand instead."`)

/*
  Ex 03. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/

console.log(typeof('10') === typeof(10));
console.log(typeof(parseInt('10')) === typeof(10));

/*
  Ex 04. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
*/

console.log(parseFloat('9.8') === 10);
console.log(Math.ceil('9.8') ===  10);

/*
  Ex 05. Check if 'on' is found in both python and jargon
*/

console.log('python'.includes('on'), 'jargon'.includes('on'));

/*
  Ex 06. I hope this course is not full of jargon. Check if jargon is in the sentence.
*/

console.log('I hope this course is not full of jargon'.includes("jargon"));

/*
  Ex 07. Generate a random number between 0 and 100 inclusively.
*/

console.log(Math.floor(Math.random() * 101));

/*
  Ex 08. Generate a random number between 50 and 100 inclusively.
*/

console.log(Math.floor(Math.random() * 51) + 50);

/*
  Ex 09. Generate a random number between 0 and 255 inclusively.
*/

console.log(Math.floor(Math.random() * 256));

/*
  Ex 10. Access the 'JavaScript' string characters using a random number.
*/

let char = 'JavaScript';
console.log(char[Math.floor(Math.random() * 10)]);

/*
  Ex 11. Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
*/

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
      //OR
console.log('1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125')
      //OR
console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`)

/*
Use substr to slice out the phrase because because because from the following 
sentence:'You cannot end a sentence with because because because is a conjunction'
*/

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let subStrStart = sentence.indexOf('because');
let subStrIteration = sentence.lastIndexOf('because') - sentence.indexOf('because') + 'because'.length;
console.log(sentence.substr(subStrStart, subStrIteration));