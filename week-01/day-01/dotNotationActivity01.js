// Activity  - Have a go at logging a Grid

console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");

// Stretch - If you figure it out, try researching arrays and loops and see if you can do it that way.

console.log("V A R I A T I O N") 

const vert =  ("   |   |  ");
const horz =  ("-----------");
console.log (vert);
console.log (vert);
console.log (vert);
console.log(horz);
console.log (vert);
console.log (vert);
console.log (vert);
console.log(horz);
console.log (vert);
console.log (vert);
console.log (vert);

// Is there a better / ANOTHER way than above? 
// Research Looping an Array ?


console.log("L O O P -- V A R I A T I O N")

 
const gridPattern = [
    "   |   |    ",
    "   |   |    " ,
    "   |   |    " ,
    "------------" ,
    "   |   |    ",
    "   |   |    " ,
    "   |   |    " ,
    "------------" ,
    "   |   |    ",
    "   |   |    " ,
    "   |   |    " 
  ]
                       
  for (let i = 0; i < gridPattern.length; i++){
    console.log(gridPattern[i])
  }

  //--------------------------------------------------------------------------------------
  console.log("ANOTHER...L O O P -- V A R I A T I O N");

  // // #2 Using nested for loops

                                // This will log the first three lines of the grid.. 
for (let horzi = 0; horzi<3; horzi++){
    for(let verti = 0; verti<3; verti++){                            // This will loop code between here and ** 3, three times
    
        console.log("   |   |    ")                            // This will print out twice because of the loop ^
      
    }
    // if horzi is NOT equal to 2 then print the below 
    if (horzi !== 2){
      console.log("------------")
    }
  }
// This is very complex, but im getting it.. I need to study this loop a lot more, 
// its very powerful, and useful code..just complex to think about at first 