const name = 'Dark Lord 666'
let XP = 666000
let lvl = ''

if (XP <= 1000) {
    lvl = 'Ferro';
} else if (XP > 1000 && XP <= 2000) {
    lvl = 'Bronze';
} else if (XP > 2000 && XP <= 5000) {
    lvl = 'Prata';
} else if (XP > 5000 && XP <= 7000) {
    lvl = 'Ouro';
} else if (XP > 7000 && XP <= 8000) {
    lvl = 'Platina';
} else if (XP > 8000 && XP <= 9000) {
    lvl = 'Ascendente';
} else if (XP > 9000 && XP <= 10000) {
    lvl = 'Imortal';
} else {
    lvl = 'Radiante';
}

console.log(`O herói de nome ${name} está no nível ${lvl}`)
