// Logical Operators
// ? what do you expect each line to print?
console.log(true && false);// F
console.log(true || false);// T
console.log(!true);// F
console.log(!(true && false));// T
console.log(false || !false);// T

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("" && 0);// F
console.log(undefined || null);// F
console.log(!``);// T
console.log(!(1 && "false"));// F
console.log(NaN || !"true");// F

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10
let age = 21;

age > 10
  ? console.log("Full Menu")
  : console.log("Kids Menu");

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0.
let num = 0;
// * your if statement here *
num === 0
  ? console.log("The number is zero")
  : console.log("The number is NOT zero");
