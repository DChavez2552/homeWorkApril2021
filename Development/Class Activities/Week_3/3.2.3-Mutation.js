let x = 5;
let y = [1, 2, 30];
let z = {
    id: 100,
    name: "myName",
    loggedIn: false
};

console.log('Before mutation', x, y, z);

// reassign x, y, and z to FALSY values

x = 0;
y = null;
z = '';

// print x, y, and z

console.log(x, y, z);

const a = "name";
const b = [];
const c = {};

// try to reassign a, b, and c to FALSY values

//* a = 0;    
//* b = null; 
//* c = '';   

//* console.log(a, b, c);

// using BRACKET NOTATION, assign a value to b

b[0] = 'value';

console.log(b);

// using DOT NOTATION, assign a PROPERTY to c

c.num = 1;

console.log(c);

// using DOT NOTATION, assign a METHOD to c

c.num = () => console.log("Howdy!");

// using BRACKET NOTATION, call the method in c

c['num']();

// print a, b, and c