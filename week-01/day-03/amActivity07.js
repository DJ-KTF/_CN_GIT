////                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS 

// Activity 7 

// Research on do...while loop, find out about the difference between
// for loop, while loop and do...while loop. 
// Give an example of each.
// What are the pros and cons? 

// Though loops are similar in nature, meaning they do repeated tasks within our code, each type has a particuler behaviour unique to itself. 'For Loops', 'While Loops', 'Do...While Loops' and other various loop mechanisms, all have slight unique differences from one another.  The pros of using loops in our code, are their abilty to do many repeated tasks with very little code in comparison to a long format.  The cons are the fact that, in some cases, loops can be overkill.  For example, if something can be just printed to the console without a loop, or with variables instead, it becomes an unescessary function for computer resources. Choosing the correct loop for a particular task is key, as different loops have many different functions.  Essentially, the difference between a while loop, and a do while loop is how it evaluates the conditions that are set.  A 'for loop' repeats until a specified condition evaluates to false.

// let favFilms = [
//   "Casino",
//   "Goodfella's",
//   "Rocky",
//   "Star Wars",
//   "Clash of the Titans (1981)",
// ];

// for (let i=0; i < favFilms.length; i++){             // for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   console.log(favFilms[i]);                           //  statement
// }

// WHILE LOOP
// As opposed to a 'for loop'  while statement executes its statements as long as a specified condition evaluates to true. 
//  If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
// The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while
// while (condition)
//   statement

// let age = 14;
// while (age < 18){
//   console.log("You're a kid");  // The condition test occurs before statement in the loop is executed. 
//   age++;
//                          //If the condition returns true, statement is executed and the condition is tested again. 
// }
// console.log("You're an adult!") // If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
//If the condition returns true, statement is executed and the condition is tested again. 
//If the condition returns false, execution stops, and control is passed to the statement following while.
// 
//Finally,  The do...while statement repeats until a specified condition evaluates to false.  A statement is always executed once before the condition is checked. If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while. 

// do
//   statement
// while (condition);

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// see __Loops.js for 'for loops' and 'while' for more loops examples and explanations, notes I have made for myself.






























//---------------------------------------------------------------------------------
// // Activity 7
// // this was a research based activity. Some people may not have anything YET. 


// let result = '';
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
// console.log(result);

// let age=24;
// if(age>18){
// console.log(`${age} - £8`)

// } else if (age>18){
// console.log(`${age} - £10.95`)
// }
// else {
// console.log(`${age} -£7.50`)
// }

// let favSongs = [
//     "Grace",
//     "Something",
//     "Stairway To Heaven"
// ];

// console.log(favSongs[0]);
// console.log(favSongs[1]);
// console.log(favSongs[2]);

