//                                          // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS 


//Activity 1: 

//Take this code and turn it into an arrow function

// function factorial (n) {
//   if ((n === 0) || (n===1)) {
//     return 1;
//   } else {
//     return (n * factorial(n-1));
//   }
// }
// console.log(factorial(33));

//-----------------------------------------------------------

const factorial = (n) => {
  if ((n === 0) || (n === 1)){
    return 1;
  } else {
    return (n* factorial(n-1))
  }
} 
console.log(factorial(33))