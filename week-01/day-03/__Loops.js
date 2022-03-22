                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS

// LOOPS:
// Learning Objectives:

// To use Loops (for & while)
// To write programs using Loops (for & while)

// Iteration --> Loops
// Iterations or Loops do repitive tasks instead of long redundant versions or sequences

                            // for statement:
                            // A for loop repeats until a specified condition evaluates to false. 
                            // The JavaScript for loop is similar to the Java and C for loop.

    // A "'for' statement" looks as follows:
 
//              for ([initialExpression]; [conditionExpression]; [incrementExpression])
//                   statement

// When a for loop executes, the following occurs:

//     The initializing expression initialExpression, if any, is executed. 
//     This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. 
//     This expression can also declare variables.
//     The conditionExpression expression is evaluated. 
//     If the value of conditionExpression is true, the loop statements execute. 
//     If the value of condition is false, the for loop terminates. 

//     (If the condition expression is omitted entirely, the condition is assumed to be true.)
//     
//     The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
//     If present, the update expression incrementExpression is executed.
//     Control returns to Step 2.


// Try this: 
// Make an array of your 3 favourite // drinks and log each one to the console.

let favDrinks = [
  "Coke",
  "Fanta",            // ---> ARRAY
  "Tonic",
  "Red Bull",
];

// // FOR LOOP SYNTAX

for (let i = 0; i < favDrinks.length; i++){
  console.log(favDrinks[i])                      /// ---> FOR LOOP       
}                                               /// --> *i stands for index, which is widely used in loops, and used widely across the industry. 

console.log("It doesn't matter what you name it!")  ///---> However, it could be anything you like.
// --> in this case I used the word "itemIndexPosition" instead of i, so I could understand it better
for (let itemIndexPosition = 0; itemIndexPosition < favDrinks.length; itemIndexPosition++){
  console.log(favDrinks[itemIndexPosition])                   
}

// FOR LOOPS
let multiplesTwo = [];
for (let i = 0; i <= 20; i++){
  if (i % 2 == 0){              //<---- Using for loops with an if statement
    multiplesTwo.push(i);
  }
};
console.log(`Here is a list of numbers between 0-20, that are evenly divisible (" % ") by 2 
${multiplesTwo}`);


// // WHILE LOOPS
// while statement

// A while statement executes its statements as long as a specified condition evaluates to true. 

//For Example:

// WHILE LOOP
let age = 14;
while (age < 18){
  console.log("You're a kid");  // The condition test occurs before statement in the loop is executed. 
  age++;
                         //If the condition returns true, statement is executed and the condition is tested again. 
}
console.log("You're an adult!") // If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

//If the condition returns true, statement is executed and the condition is tested again. 
//If the condition returns false, execution stops, and control is passed to the statement following while.

 
                 // To execute multiple statements, use a block statement ({ ... }) to group those statements.
let say = "Turn it down";
let temp = 69;
while (temp < 72){
  console.log ("it's too cold");            // The condition test occurs before statement in the loop is executed. 
  temp++;                                                 //If the condition returns true, statement is executed and the condition is tested again. 
console.log (`${say} it's too hot!`);       // If the condition returns false, execution stops, and control is passed to the statement following while.
};
// 72 °F
//       /// COME BACK TO THIS ^^       


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade") {
  console.log(currentCard);
  currentCard =cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);

//-------------------------------------------------------------------------------------------------
// End of Loops Lesson // 
//---------------------------------------------------------
//
// Further Reading… take a look at functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://www.youtube.com/watch?v=N8ap4k_1QEQ
// What is a function and why do we use them?
// How do you create a function?


