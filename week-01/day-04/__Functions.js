// 

// Learning Objectives
// To explore functions and look at how they work
// To write programs with functions
// To write programs with all three types of functions


// Functions
// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.



// let's take this in:

// const pressGrindBeans = () => {       // --> Declare a new Function "pressGrindBeans"
//   console.log("Grinding for 20 Seconds");  //--> 
// pressGrindBeans();                         //--> Runs the Function pressGrindBeans


//------------------------------------------------------------------------------------------------


//Functions with IF statements included:

// let coffeeIsGrinding = true;           // changes the function
// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the Grind");
//     coffeeIsGrinding = false;
//   } else {
//     console.log("Grinding is about to begin");
//     coffeeIsGrinding = true;
//   }
// }

// pressGrindBeans();

//---------------------------------------------------------------------------------------------

//Adding Parameters
                

                         // these are parameters for this function (amount, accnum)             
// const cashWithdrawal = (amount, accnum) => {
//   console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal (300, 50449921);
// cashWithdrawal (30, 50449921);    // These values are called "arguments"
// cashWithdrawal (200, 50447921);

// -------------------------------------------------------------------------------------------------
// We can use global variables in functions
let accnumber = 50449921;

                                    
const cashWithdrawal = (amount, accnum) => {
  console.log(`Withdrawing ${amount} from account ${accnum}`);
}
                        
cashWithdrawal (300, accnumber);
cashWithdrawal (30, 50449921);    
cashWithdrawal (200, 50447921);
                       
// const addUp = (num1, num2) => {
//   return num1 - num2


// //SEE SLIDE 19 for this below example 

// const multiplyByNineFifths = (celsius) => {
//   return celsius * (9/5);
// };

// const getFarenheit = (celsius) => {
//   return multiplyByNineFifths (celsius) +32;
// };

// console.log("The temperature is " + getFarenheit(15) + "°F")






