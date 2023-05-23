const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

/*
    Find the person who has many skills in the users object.
*/
let usersArr = Object.keys(users);
let user;
let skillNum = 0;
for (let i = 0; i < usersArr.length; i++) {
    if (users[usersArr[i]].skills.length > skillNum) {
        user = usersArr[i];
        skillNum = users[usersArr[i]].skills.length;
    }
}
console.log(user);

/*
    Count logged in users, count users having greater than equal to 50 points 
    from the following object.
*/
let logCount = 0,
    pplCount = 0;
for (let i = 0; i < usersArr.length; i++) {
    if (users[usersArr[i]].isLoggedIn) {
        logCount++;
    }
    if (users[usersArr[i]].points >= 50) {
        pplCount++;
    }
}
console.log(`No. of people logged in: ${logCount}
People with 50 or more points: ${pplCount}`);

/*
    Find people who are MERN stack developer from the users object
*/
let devMERN = [];
for (let i = 0; i < usersArr.length; i++) {
    let dev = users[usersArr[i]];
    let M = dev.skills.indexOf("MongoDB") != -1,
        E = dev.skills.indexOf("Express") != -1,
        R = dev.skills.indexOf("React") != -1,
        N = dev.skills.indexOf("Node") != -1;
    if (M && E && R && N) {
        devMERN.push(usersArr[i]);
    }
}
console.log(`MERN stack developers: ${devMERN.join(", ")}.`);

/*
    Set your name in the users object without modifying the original users object
*/
let usersCopy = {...users};
usersCopy.Uzair = {};
console.log(usersCopy);

/*
    Get all keys or properties of users object
*/
console.log(Object.keys(users));

/*
    Get all the values of users object
*/
console.log(Object.values(users));