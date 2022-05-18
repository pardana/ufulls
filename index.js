let fname = 'Aditria';
let lname = 'Putra';
let age = prompt("Guest Aditria's age...");

//old way
// let result = fname + ' ' + lname + ' is ' + age + ' years old';
// alert(result)

// using template string
let result = `${fname} ${lname} is ${age} years old`;
alert(result)