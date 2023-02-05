/*
  Ex 01. Write a program which tells the number of days in a month.

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

let month = (prompt("Enter a month", "e.g March")).toLowerCase();
switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month[0].toUpperCase() + month.substring(1)} has ${31} days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month[0].toUpperCase() + month.substring(1)} has ${30} days.`);
        break;
    case 'feburary':
        console.log(`${month[0].toUpperCase() + month.substring(1)} has ${28} days.`);
        break;
    default:
        console.log("Enter a valid Month name");
}

/*
  Ex 02. Write a program which tells the number of days in a month, now consider leap year.
*/

let month2 = (prompt("Enter a month", "e.g March")).toLowerCase();
switch (month2) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month2[0].toUpperCase() + month2.substring(1)} has ${31} days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month2[0].toUpperCase() + month2.substring(1)} has ${30} days.`);
        break;
    case 'feburary':
        let date = new Date;
        date.getFullYear() % 4 == 0
        ? console.log(`${month2[0].toUpperCase() + month2.substring(1)} has ${29} days.`)
        : console.log(`${month2[0].toUpperCase() + month2.substring(1)} has ${28} days.`);
        break;
    default:
        console.log("Enter a valid Month name");
}