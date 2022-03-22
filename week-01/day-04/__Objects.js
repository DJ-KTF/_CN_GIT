// CodeNation - The Master Course
// JAVASCRIPT FUNDAMENTALS 

//      OBJECTS

// Learning Objectives:
// To explore the concept of an object
// To access data from within an object
// To use functions with objects
// To discover and use the ‘this’ keyword.

// Objects: 
// Objects are containers, 
// They can store data and functions. 
// We use Key-Value pairs to store the data

//----------------------------------------------------
//Example 1

//                              // <----------- Create a variable called Cafe.
// const cafe = {                // <----------- The {} determines that this is an Object not a variable, or array.. 
//   name: "Cafe del Java",      //  KEYS  <----------- "Cafe del Java", 100, and true are VALUES
//   seatingCapacity: 100,         // <-----------name, seatingCapacity, hasSpecialOffers and drinks are all KEYS
//   hasSpecialOffers: true,     //  for error --> see EXAMPLE 4 
//   drinks: [
//     "Cappuccinno",
//     "Latte",                   // Values can be any data type. They can even be arrays or functions!
//     "Mocha",                  // <---  keys and values are separated by a colon.         
//     "Espresso",               // <---  key : value  
//     "Tea",
//     "Americano",                          
//   ]
// };                                    // <-----------  
                              // 
// ---------------------------------------------------------------
// Example 2 
// Let’s create an object called person, with a key called name, and set the value to your name.
// Add another key called age.

const person = {     // <--- Object - "person"  {} determines that this is an Object not a variable, or array..
  name:"Duncan",     // <--- Key "Duncan"
  age: 45            // < -- Another KEY "age"
}
console.log(person)  // can change the property to .anything and it will print the result to the console

// -------------------------------------------------------------

// How do we access data in an object? 
// Dot Notation and Bracket Notation
//

//        OBJECT.PROPERTY
// .dotNotation 
person.name
console.log(person.name)     // dotNotation  -> object.property == person.name

// Bracket Notation
console.log(person["name"])

// ---> person.name VS person["name"] <-------
//     both common and worth knowing  -- do the same thing
// --------------------------------------------------------------------------
//    

// However...
//    With bracket notation, we can use variables to select the keys of an object!
//
//
// Example 4
//           
// Let’s say Cafe del Java may have different specials, based on the time of day.
// Free croissants at Breakfast
// Free drink with a sandwich at Lunch

//We could put each special in an object and select one at a specific time.

let offer = "none";
let time = 1200;       // -->  

const cafe = {                // <----------- The {} determines that this is an Object not a variable, or array.. 
  name: "Cafe del Java",      //  KEYS  <----------- "Cafe del Java", 100, and true are VALUES
  seatingCapacity: 100,         // <-----------name, seatingCapacity, hasSpecialOffers and drinks are all KEYS
  hasSpecialOffers: true,     // 
  drinks: [
    "Cappuccinno",
    "Latte",                   // Values can be any data type. They can even be arrays or functions!
    "Mocha",                  // <---  keys and values are separated by a colon.         
    "Espresso",               // <---  key : value  
    "Tea",
    "Americano",                          
  ], 
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisly priced sandwich",
noOffer: "Sorry no offer"
};

if (time < 1100) {
  offer = cafe.breakfastOffer;
  console.log(cafe.breakfastOffer);
} else if (time < 1500) {
  offer = cafe.lunchOffer;
  console.log(cafe.lunchOffer)
}





