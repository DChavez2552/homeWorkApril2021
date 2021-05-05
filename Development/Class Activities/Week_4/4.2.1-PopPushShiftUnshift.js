const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving 
//each item to a variable

let pop1 = nums.pop();

let pop2 = nums.pop();

console.log(pop1);


// remove each of the first two items with shift(), saving 
//each item to a variable

let shifty1 = nums.shift(); 
let shifty2 = nums.shift(); 

console.log(shifty1, shifty2);

// use push and unshift to add the variables back to 
//the array in numerical order, 0-6

nums.push(shifty1, shifty2);
nums.unshift(pop1, pop2);
console.log(nums);