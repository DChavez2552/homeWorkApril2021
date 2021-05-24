// create an object literal

let animal = {
    name: 'Bruce',
    hobbies: ['Go to park','run']
};

// include a method that uses "this"

let fun = {
    chomp: 'stick',
    action() {
        return `${animal.name} likes to ${animal.hobbies[0]} and break ${this.chomp}s.`
    }
}

// create a function in the global scope that prints "this"

let text = () => {
    console.log(fun.action())
};
text();