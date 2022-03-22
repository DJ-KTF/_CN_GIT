// // Activity 9
// Create a variable called word that takes a string. 
// Create an if statement that checks if the last letter is the same as the first. 
// If it is return true, otherwise return false.


let word = "dud";
if (word.charAt(0) == word.charAt(word.length-1)){
  console.log("True, the last letter is the same as the first.")
} else {
  console.log("False, the last letter is NOT the same as the first.")
}  