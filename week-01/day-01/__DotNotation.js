//------->  CodeNation Master Coding Course
// ------>  Student: Duncan James
// WEEK - 01
// DAY - 01 - AM LECTURE

// JAVASCRIPT FUNDAMENTALS
// Dot Notation

// Learning Objectives:
// To recognise what Dot Notation is and how use it
// To identify different Data Types
// To be able to create a simple Random Number Generator Program

// Dot Notation
// SYNTAX:
//         console.log(i);    ie--> car.startEngine();
//  ---->       
//         object.property();  ie--> dev.makeCoffee();
//  

//       Data Types:

//  String: for representing text
//   Number: for representing numbers (decimals & integers) 
//     Boolean: for true and false
//       Null: for nothing / no data
//         Undefined: for when a data type isn’t determined 
//           Symbol: this data type is used as the key for an object property, when the property is intended to be private.

// Properties
// All data has properties , additional data or information that is available.
// For Example: `length' will tell us how long the string is
//
// Methods
//  We can do methods on data strings with built-in methods, such as making a text of string UPPER or lowercase, joining and splitting strings, substituting one character in a string for another, and more.


//<--Dot Notation
      console.log("hello world".toUpperCase());    // <---- Here is a method applied to a string
              //Parameters^^      ^^Method




// Libraries
// Libraries give us access to a bunch of features that we dont have to code ourselves
// For Example:   Math Library

//<--Returns random number between 0 - 1  
        console.log(Math.random());

//How can we make the random number lager than 1?                 
                console.log(Math.random()*10);   //<--Returns random number between 0 - 10
                
//How can we roundUP the number to whole number?
// The MATH Library!


//  Math.ceil() will always round a number UP to the next largest integer
console.log(Math.ceil(Math.random()*10));

//  Math.round() returns the value of a number rounded to the nearest integer
console.log(Math.round(Math.random()*10));

//  Math.floor() returns an integer less than or equal to the specified number
console.log(Math.floor(Math.random()*10));


// Activity 
// Create a new Folder called “CodeNation”.
// Inside that folder, create another Folder called ‘Week1’.
// Inside that folder, create a file called ‘dotNotation.js’
// You can ONLY use the Terminal

//  mkdir   - Create New Directory
//  touch   - Create New file  ie-->   touch dotNotationActivity02.js

//  ls      - List Directory Contents
//  cd      - Change Directory
//  rm      - The rm stands for remove, 
//  rm      - To delete a specific file, you can use the command rm followed by the name of the file you want to delete (e.g. rm filename )  
//  -r      - while the -r is necessary to tell Bash that it needs to recurse (or repeat) 
//            the command through a list of all files and sub-directory within the parent directory.




