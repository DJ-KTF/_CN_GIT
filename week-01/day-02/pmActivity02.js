// Activity 2: 
// Create a variable for any pizza topping.
// Create a switch statement, 
// if the topping is one of yourfavourite ingredients, log to the console 
// “These are important ingredients for my pizza.” 
// If you don’t mind having Pepperoni; for example, log to the console 
// “I don’t mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log 
// “${topping} should not be on a pizza.”

//hmmmmm
// Right -- SO I ONLY LIKE FETA, But I dont mind Onion, 
// if Feta--> and If Onion --> else

toppings = "Chocolate"

let favToppings = "Feta Cheese"
let noWay = "Salt"
let alright = "Peppers"


switch(toppings){
  case "Peppers":
    console.log(`I don't mind having ${alright} on my pizza`);
      break;  
      
      case "Salt":
        console.log(`${toppings} should not be on a pizza.`);
          break;

              case "Feta Cheese":
                console.log(`I must have ${favToppings} on my Pizza`);
                break;
  default:
    console.log(`${toppings} should not be on a pizza`);
}


// YAY !!!  I WROTE THIS ON MY OWN !! FINALLY ! 
      