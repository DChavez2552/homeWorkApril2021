// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.

function Animal(name, type, weight, personality) {
    this.name = name,
    this.type = type,
    this.weight = weight,
    this.personality = personality,
    this.bio = `${name} is a ${this.type}. It has a ${this.personality} personality.`
} 

// create a new instance on an Animal

const anastasia = new Animal('Anastasia','hamster','paperweight','punkish')
console.log(anastasia.bio);

// add methods to the Animal prototype

Animal.prototype.newBio = () => {
    console.log(`She has the weight of ${anastasia.weight}`)
};

anastasia.newBio();

// attach a method directly to the Animal instance that "overwrites" a prototype method
console.log(Animal());