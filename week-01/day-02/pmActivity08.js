// Activity 8
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
// Find the index of a last vowel in the string.


let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowelArr[i];
}
}

// This like logs the last Vowel to the console. 
console.log(lastVowel); 
// This line logs the index number of the last vowel. 
console.log(highestIndex)

// I found this particular challenge SUPER difficult and relied on the class solution to finish the activity. I must study this in a lot more detail. I had no clue how to pull this off on my own. 