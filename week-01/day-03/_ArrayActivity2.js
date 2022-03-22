// ARRAY Activity 2: 
// 
// Using MDN choose one of the following methods:
// map(), shift(), unshift(), splice(), unsplice().
// Create a program to demonstrate the use of the method.


// (Note: Not all methods would permanently
// update/make changes to the arrays themselves.)

// I will call my program: 
// THE DEATH STAR
//  

const planets = [
  "Alderaan",
  "Hoth",
  "Kamino",
  "Bespin",
  "Dagobah",
  "Naboo",
  "Mustafar",
  "Coruscant",
  "Tatooine",
];

console.log(planets)
// .pop() variation that returns removed item to a variable
console.log("OH NO! The Death Star destroyed another planet!")
const destroyedPlanets = planets.pop();
planets.pop()   
console.log("What planet was destroyed?")
console.log(destroyedPlanets)
console.log(planets)
console.log("OH NO! The Death Star destroyed another planet!")
// // .shift() removes the first item in the array
planets.shift(2)
console.log(planets)
console.log("OH NO! The Death Star destroyed another planet!")
console.log(planets)

// Use .splice() to remove an item from the array via INDEX
// If you know the index of an item, you can remove it from the array

const index = planets.indexOf("Naboo"); 
if (index !== -5) {                
  planets.splice(index, 3);
}
console.log(planets)
         


                                      // In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:                          
if (index !== -5) {                
  planets.splice(index, 4);
}
console.log(planets)                                         
