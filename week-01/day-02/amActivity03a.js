// node amActivity03a.js
// Activity 3: Create a program that calculates the number of days from today to your birthday
// HINT: Look for ‘Javascript Date’ on MDN.

// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

// const now = new Date();
// const birthday = new Date(2022, 4, 2);
// const countdown = birthday.
day = 1000 * 60 * 60 * 24
let today = new Date();
let birthday = new Date(2022,)
let countdown = birthday.getDate() - today.getDate();

const age = 45
let newage = (age + 1)

let Result = Math.round(birthday.getTime() - today.getTime()) / (day);
let Final_Result = Result.toFixed(0);


console.log (
               today  
               + birthday
               + Final_Result);
