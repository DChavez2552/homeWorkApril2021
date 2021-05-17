class entertainment{

        constructor(name, type, category){
            this.type = type;
            this.category = category;
            this.name = name;
    }
    print(){
        console.log(`You are playing ${this.name}. It is a ${this.category} ${this.type}.`)
    }
}

const game = new entertainment('Mario','platform','video game')
const movie = new entertainment('Lord of the Rings','movie','fantasy')
const song = new entertainment('Dancing in the Moonlight','song','great')

console.log(movie.print());
console.log(game.print());
console.log(song.print());