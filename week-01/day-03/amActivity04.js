//                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS 

// AM Activity 4:

// Displays 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Goodfellas.
// If it is, return “Yay it’s Goodfellas!”. 
//If it isn’t return “Boo! We want Goodfellas"!
//"Goodfellas"
  


let films = [
  "Rocky",
  "Star Wars",
  "Indiana Jones",
  "Goodfellas",
  "Stand By Me",
  "Shawshank Redemption"  
]

for (let filmIndex = 0; filmIndex<films.length; i++) {   // remember, to trigger the loop i can simply use "i" in place of filmIndex position or whatever
  if (films [9] === "Goodfellas") {
    console.log ("Eh look, it's Goodfellas!");
    break
  } else {
    console.log("I'll make you an offer you can't refuse. Play Goodfellas!")
        break
      }
    }

