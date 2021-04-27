// Named Parameters
// write a function that takes two named parameters:

function fun(x, y){
    console.log(x, y);
    return x + y;
}

// print each named parameter,

fun(1,2);

// then return the parameters added together

fun(1,2);

// invoke the function and pass in two numbers

fun(1,2);

// invoke the function and pass in more than two numbers

fun(1,2,3);

// invoke the function and pass in only one number

fun(1);

// change the function to set default values for the parameters

function fun(x, y = 0){
    console.log(x, y);
    return x + y;
}

// again, invoke the function and pass in only one number

fun(1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function fun(x, ...y){
    console.log(x, y);
    return x + y;
}

// again, invoke the function and pass in more than two numbers

fun(1,2,3,4,5,6);