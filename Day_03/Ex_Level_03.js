/*
  Ex 01. Create a human readable time format using the Date time object. 
  The hour and the minute should be all the time two digits
  (7 hours should be 07 and 5 minutes should be 05 )
*/

let now = new Date,
    year = now.getFullYear(),
    month = now.getMonth() + 1 > 9 ? `${now.getMonth() + 1}`: `0${now.getMonth() + 1}`,
    date = now.getDate() > 9 ? `${now.getDate()}`: `0${now.getDate()}`,
    hour = now.getHours() > 9 ? `${now.getHours()}`: `0${now.getHours()}`,
    minute = now.getMinutes() > 9 ? `${now.getMinutes()}`: `0${now.getMinutes()}`;

console.log(`${date}/${month}/${year} ${hour}:${minute}`);

/*
  Ex 02. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

let newYears = now.getYear();
console.log(`20${newYears}-${month}-${date} ${hour}:${minute}`);