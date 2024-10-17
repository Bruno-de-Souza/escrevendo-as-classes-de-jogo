class Game {

    constructor(age) {

        this.age = age;

    }

    attack() {

        let type = ['Guerreiro', 'Mago', 'Monge', 'Ninja'];

        let name = ['Espada', 'Magia', 'Artes Marciais', 'Shuriken']

        if (this.age == 1) {
            console.log(`O ${type[0]} atacou usando ${name[0]}`);
        } 
        if (this.age == 2){
            console.log(`O ${type[1]} atacou usando ${name[1]}`);
        }
        if (this.age == 3) {
            console.log(`O ${type[2]} atacou usando ${name[2]}`);
        }
        if (this.age == 4) {
            console.log(`O ${type[3]} atacou usando ${name[3]}`);
        }

    }

}

let g = new Game(4);
g.attack();