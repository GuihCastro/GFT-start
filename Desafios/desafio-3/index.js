class Hero {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.weapon = '';
        switch (this.job) {
            case 'Guerreiro':
                this.weapon = 'Espada';
                break
            case 'Mago':
                this.weapon = 'Magia';
                break
            case 'Monge':
                this.weapon = 'Artes Marciais';
                break
            case 'Ninja':
                this.weapon = 'Shuriken';
        }
    }

    attack() {
        console.log(`O ${this.job} ${this.name} atacou usando ${this.weapon}`);
    }
}

let mage = new Hero('São Cipriano', 666, 'Mago');
let warrior = new Hero('Zé Cruzadinha', 60, 'Guerreiro');
let monk = new Hero('Padre Pio', 80, 'Monge');
let ninja = new Hero('Naruto', 15, 'Ninja');

mage.attack();
warrior.attack();
monk.attack();
ninja.attack();
