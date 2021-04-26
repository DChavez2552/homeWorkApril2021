// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

let season = "Spring";

let temp = 68;

let rain = true;

let sun;

let clouds = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(season, temp, rain, sun, clouds);

// create a variable that references a template literal
// inside the template literal, use two variables

let weather = `Its a nice day in ${season}. The temperature is currently ${temp}F degrees.`;
console.log(weather);

// reassign the value of the variable that references "null"

clouds = false;

// print the value and its type

console.log(clouds, typeof clouds);

// print a variable that causes a ReferenceError

console.log(sun);

// alter the previous line to no longer cause a ReferenceError
