// Activity 10:

// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even. 
// If it is return the number, 
// otherwise return the numbers multiplied together.

// Challenge 10
let num1 = 4;
let num2 = 4;
let sum = num1 + num2;

if (sum % 2 == 0){
  console.log(`The sum of ${num1} and ${num2} is ${sum}. The sum is even.`)
} else {
  console.log(`${num1 * num2}`)
}