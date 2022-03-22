// ACTIVITY 6
// Create a variable called num.
// Check if the number is a palindrome 
// (a palindrome looks the same forward as it does backwards 
//   e.g. 1001 or 20202).

let num = 2002;
let numString = num.toString(); 
let reverseNumString = numString.split("").reverse().join("");

if (num == reverseNumString){
    console.log(`Yes, ${num} is a palindrome`)
} else {
    console.log(`No, ${num} is not a palindrome`)
}

// I found this challenge to be very difficult and used the class solution to figure out the correct way to do it
// I need to study this a lot more to understand what is happening