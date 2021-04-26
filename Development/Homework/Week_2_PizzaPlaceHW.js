// Dominick Chavez Week 2 Homework

//Pizza Place

let pizzaPlace = "Luigi's Pizza";
let numberOfTopping = 2;

console.log(pizzaPlace, numberOfTopping);
console.log(typeof pizzaPlace, typeof numberOfTopping)
// Template Literal

console.log(`Hello and welcome to ${pizzaPlace}. We offer ${numberOfTopping}
  toppings on our pizza's.`);

// If Statement

if (numberOfTopping > 10){
  console.log("A whole lot of pizza.")
}
  else {
   console.log("Quality, not quantity.")
}


// BONUS Challenge
while (numberOfTopping <= 10){
  
  if (numberOfTopping % 2 == 0){
    console.log(numberOfTopping)
    numberOfTopping++
  }
  else{
    numberOfTopping++
  }
}
