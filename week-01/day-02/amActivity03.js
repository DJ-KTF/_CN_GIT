// Activity 3: JS Create a program that calculates the number of days from today to your birth date.
// HINT: Look for ‘Javascript Date’ on MDN.

// I need to work milliseconds or some kind of unit of time to subtract one from the other
// for example, work out how many milliseconds are in a Day , and then subtract ?

day = 1000 * 60 * 60 * 24
let today = new Date();
let birthday = new Date(today.getFullYear(), 03, 02)
let countdown = birthday.getDate() - today.getDate();

const age = 45
let newage = (age + 1)

let Result = Math.round(birthday.getTime() - today.getTime()) / (day);
let Final_Result = Result.toFixed(0);

// console.log (`I am ${age} years old. Today's date is  ${today}.  In ${countdown} days I will be ${newage}.`);



// Things I need
// fetch todays date
// fetch my bday
// The total number of days 
//  

// How to calculate the number of days between two dates in javascript?

//     Difficulty Level : Medium
//     Last Updated : 20 Jul, 2021

// Calculating the number of days between two dates in JavaScript required to use date object for any kind of calculation. For that, first, get the internal millisecond value of the date using the in-built JavaScript getTime() function. As soon as both the dates get converted, proceed further by subtracting the later one from the earlier one which in turn returns the difference in milliseconds. Later, the final result can be calculated by dividing the difference (which is in milliseconds) of both the dates by the number of milliseconds in one day.




