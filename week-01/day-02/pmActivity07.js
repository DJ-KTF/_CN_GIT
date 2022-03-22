// Activity 7: JS
// Create a variable called time, 
// a variable called placeOfWork
// and a variable called townOfHome. 
// Create an if statement that logs to the console where someone is at times of the day. 
// E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.


let time = 11;
let placeOfWork = "Manchester, UK"
let townOfHome = "Blackley"

if (time == 8){
  console.log(`I am commuting to work in ${placeOfWork}`);
} else if (time == 7){
  console.log(`I am at home in ${townOfHome}`);
} else if (time == 9){
  console.log(`I am at work in ${placeOfWork}`)
} else {
  console.log(`If the time of day is between 9am and 5pm, I am at work in ${placeOfWork}. Otherwise, I'm either commuting, or at home in the town of ${townOfHome}.`);
}
