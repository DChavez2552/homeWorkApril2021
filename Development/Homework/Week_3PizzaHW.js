// 1. Create an array of `pizzaToppings` with at least four different toppings

let pizzaToppings = [' Pepperoni', ' Olives', ' Mushrooms', ' Chicken'];


// 2. Create a `greetCustomer` function that prints a message that welcomes a guest, 
// then informs them of the available toppings by looping over `pizzaToppings` 
// (don't worry about perfect grammar here yet, i.e. "a, b, _and_ c", see Bonus Challenge #9)



let greetCustomer = () => {
    let greet = `Welcome to Luigi's pizza. We offer`
    for (let topping of pizzaToppings){
        greet += `${topping},`;
    }
console.log(greet);
}

//greetCustomer();

// 3. Create a `getPizzaOrder` function that
// - has the parameters size, crust, and an indefinite amount of toppings as inputs
// - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// - outputs a list with the size, crust, and toppings

let getPizzaOrder = (size, crust, ...toppings) => {
    let order =`One ${size} ${crust} crust pizza with`;
    for (let topping of pizzaToppings) {
        order += `${topping}`;
    }
    console.log(`${order}. Coming up!`);
    return [size, crust, toppings];
    //console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
}

getPizzaOrder('large', 'thick', 'pepperoni', 'olive');

// 4. Create a `preparePizza` function that
//   - has an array as its parameter with three items: a size, a crust, and a list of toppings
//   - prints something like "...Cooking pizza..."
//   - outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

let aSize = ['small', 'medium', 'large'];

let aCrust = ['regular', 'stuffed', 'butter-garlic'];

let preparePizza = (aSize, aCrust, pizzaToppings) => {
    console.log(`Cooking Pizza... One ${aSize} ${aCrust} pizza with ${pizzaToppings} on top.`);
}

preparePizza(aSize[1], aCrust[2], pizzaToppings[2, 3, 1]);

// 5. Create a `servePizza` function that
//   - has a parameter of a pizza Object
//   - logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//   - outputs the same pizza Object that was passed in

let pizzaObj = {
    size : 'large',
    crust: 'garlic',
    topping: 'pepperoni and olive'
};

let servePizza = (pizzaObj1, pizzaObj2, pizzaObj3) => {
    console.log(`Order up! Here's your ${pizzaObj1} ${pizzaObj2} crust pizza with ${pizzaObj3}. Enjoy!`)
}

servePizza(pizzaObj.size, pizzaObj.crust, pizzaObj.topping);

// 6. Call each function and (starting with `preparePizza`) use the returned value from the previous function as its input
// 7. Add, commit, and push your JS file to your GitHub repo.
// 8. Send your TA a link to your GitHub Homework repo when finished.






//## Bonus Challenge

// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a `listToppings` function that stores the functionality, and call the function each time we list toppings in a function.
//   - i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// 10. In `getPizzaOrder`, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter `servePizza` in a similar way to fix its grammar when serving a "plain" cheese pizza.

// 11. In `getPizzaOrder`, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
