//                                        // CodeNAtion Master Coding Course
// Student: Duncan James

// WEEK-01 
// DAY-03 - AM LECTURE

// ARRAYS and LOOPS
 
//
// Activity 6: 
//
// Imagine you’re a programmer for a social media platform! 
//
// You have been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// 
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// 
//> Using a nested loop iterate over both arrays and console.log out the 
// matching follower.


let duncanFollowers = ['Derrick', 'Kevin', 'Tony', 'Zeb'];
let victoriaFollowers = ['Chris', 'Zeb', 'Phil', 'Kevin'];
for (let i = 0; i<duncanFollowers.length; i++){
  for (let j = 0; j<victoriaFollowers.length; j++){
    }
    if (duncanFollowers[i] === victoriaFollowers[i]){
        console.log(`${duncanFollowers[i]} is in both arrays!`)
  }
}

// Why wont mine work?  I've missed something very simple, I know I have.. I cant seem to figure it out...


// Activity 6 CLASS Solution
let chrisFollowers = ['Ben', 'Jordan', 'Dan', 'John'];
let johnFollowers = ['Chris', 'Jordan', 'Dan', 'Ben'];
for (let i = 0; i<chrisFollowers.length; i++){
  for (let j = 0; j<johnFollowers.length; j++){
    }
    if (chrisFollowers[i] === johnFollowers[i]){
        console.log(`${chrisFollowers[i]} is in both arrays!`)
  }
}



