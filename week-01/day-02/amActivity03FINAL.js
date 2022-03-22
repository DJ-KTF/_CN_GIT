// Activity 3: 
// Create a program that calculates the number of days from today to your birthday
// HINT: Look for ‘Javascript Date’ on MDN.
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

//CORRECT SOLUTION

// Activity 3
// To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,04,02")
const todaysDate = new Date("2022, 03, 16");
// This calculates the difference but IN milliseconds.
let diffInTimeMilliseconds = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTimeMilliseconds / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and my birthday, ${birthDay} is ${diffInDays} days.`);
console.log (`My birthday is in: ${diffInDays} days.`)

// This was difficult and I had to use the class solution, I couldnt figure it out on my own
