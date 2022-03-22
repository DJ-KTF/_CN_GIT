                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS

// ARRAYS:
// Learning Objectives:
// 
// To explore the uses of Arrays
// To recognise the syntax of creating an Array
// To use a variety of methods to work with Arrays


// Array Syntax

let coffeeOrder = [
  "Alex - Chai Tea",
  "Ricardo - Juice",
  "Duncan - Espresso",
  'Charlie - Any Coffee on "Special Offer "', // here I "reversed the quotes" so that 'Special Offer' logs to the console in quotes.
  "Victoria - Latte"
];

console.log(coffeeOrder);  //--> simply logs order to the terminal
                          
// We can access data inside the Array, and log the result to the terminal. 
// For instance: What is the Third item in the list?

console.log(coffeeOrder[2]) //Javascript starts counting at 0. 
                            //ZERO INDEX - 0 = 1 -- The Index begins at 0. For Example: 
                            // The Console will log (index[2]) as 'Charlie - Anything on "Special Offer"', 
                            //Eventhough it appears to be the THIRD item in the list --  
                            //The Index will read as 0,1,2, etc, As opposed to 1,2,3,
 
// Arrays can be updated, just like variables!
//We don't need another "let" keyword to update an array, or a variable. 
// Only Require: Name of the Array or Variable and what we are assigning it, or what we are making it equal to. 
//Let's update our Array(coffeOrder) 
//For Example: Ricardo swapped shifts with Ann-Marie today and she would like a Hot Chocolate          

coffeeOrder[1] = ("Ann-Marie - Hot Chocolate");
console.log(coffeeOrder);      //--> logs the new order, replacing Ricardo with Ann Marie    

// Properties are the values associated with an Object or an Array
// How many items are in the Array?  
                                    // We can use the ".length" property to determine the amount of items in our coffeeOrder   
console.log(coffeeOrder.length);    //--> .length() on an array will output the number of items in the array, not characters

                        //METHOD -->  .push method used here --> ADDS to the END the Array
                        //How do we add to the END of the Coffee Order ?
                        //Let's add Chris' drink and snack to the END of our coffeeOrder: 
console.log(coffeeOrder);
coffeeOrder.push("Chris - Super-Mocha ", "Chris - Cinnamon Bun"); // .push appends the string "Chris - Oat Mocha" to our existing coffeeOrder data array
console.log(coffeeOrder);

                      //METHOD --> .pop method used here --> 
                      // REMOVES the last item from the END of your array
coffeeOrder.pop() 
console.log(coffeeOrder)

// End of ARRAYS Lesson // 
//---------------------------------------------------------
//
// Further Reading… take a look at functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://www.youtube.com/watch?v=N8ap4k_1QEQ
// What is a function and why do we use them?
// How do you create a function?
