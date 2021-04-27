// create a variable "timeOfDay" and assign it a string

let timeOfDay = "night";

// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

let greeting = `It is a nice ${timeOfDay}.`;

// print "greeting"

console.log(greeting);

// create a new variable, but do not assign it a value

let moon;

// print the variable and its type
// ? what type should we expect?

console.log(moon);
console.log(typeof moon);

// assign the variable a value that indicates the variable is purposely blank
// ? what value should we assign?

moon = null;

// print the variable and its type again
// ? what type should we expect?

console.log(moon);
console.log(typeof moon);

// try to print a variable that does not exist
// ? what should we expect to print in the CLI?

// console.log(star); //

// print "greeting" again
// ? will this line run?

console.log(greeting);