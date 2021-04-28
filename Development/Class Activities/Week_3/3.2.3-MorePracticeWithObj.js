// bracket and dot notation
const key = "1";
const obj = {
    key: console.log("the key is 'key'"),
    1: console.log("the key is 1")
};
// what will the following lines print?
obj[key];
obj.key;
obj["key"];

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object

const weather = {
    time: 'Night',
    temp: 68,
    thunder: true,
    collection: ['Cloudy', 'Rain', 'Wind']
}; 

// access a value in in "collection" property

console.log(weather.collection[0]);

// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
    return "the key is 'method' and it calls refers to a function";
};
// fill in your favorite movie and color below
obj["favorites"] = {
    movie: "Berserk",
    number: 0,
    color: "blue"
};
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?

console.log(obj.list.length);

// what do you expect to see on each line?
for (let key in keys) {
    console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color

let fav = (`My favorite movie is ${obj.favorites.movie} and I like the color ${obj.favorites.color}.`);

console.log(fav);
// access the values "b", 4, and 6 from obj.list

console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);