/*
  Ex 01. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = prompt("Enter student's score:", "Enter a number");
if (score >= 80 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score <= 89) {
    console.log("Grade B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

/*
  Ex 02. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let month = (prompt("Enter a Month name", "e.g March")).toLowerCase();
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log("Autumn");
        break;
    case 'december':
    case 'january':
    case 'feburary':
        console.log("Winter");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Spring");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Summer");
        break;
    default:
        console.log("Enter a valid Month name");
}

/*
  Ex 03. Check if a day is weekend day or a working day. Your script will take day as an input.

  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.
*/

let day = (prompt("What is the day today?", "Monday")).toLowerCase();
switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day[0].toUpperCase() + day.substring(1)} is a working day.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day[0].toUpperCase() + day.substring(1)} is a weekend.`);
        break;
    default:
        console.log("Enter a valid day name");
}