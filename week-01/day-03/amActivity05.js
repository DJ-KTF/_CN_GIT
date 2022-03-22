////                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS 

// AM Activity 5:

// Generate a random number between 1 and 30, six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.


let num = Math.floor(Math.random() * 30)
for (let i = 0; i < 6; i++){
  console.log(num)
  if (num % 7 == 0){
    console.log(`The number ${num} is divisble by 7!`)
  }
  num = Math.floor(Math.random() * 30)
}















// Activity 5
// let num = Math.floor(Math.random() * 30)
// for (let i = 0; i < 6; i++){
//   console.log(num)
//   if (num % 7 == 0){
//     console.log(` ----- ${num} is divisble by 7!`)
//   }
//   num = Math.floor(Math.random() * 30)
// }