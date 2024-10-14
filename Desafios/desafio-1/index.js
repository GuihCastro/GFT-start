/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const name = 'Dark Lord 666'
let XP = 666000
let lvl = ''

switch (XP) {
    case (XP <= 1000):
        lvl = 'Ferro'
    case (XP > 1000 && XP <= 2000):
        lvl = 'Bronze'
    case (XP > 2000 && XP <= 5000):
        lvl = 'Prata'
    case (XP > 5000 && XP <= 7000):
        lvl = 'Ouro'
    case (XP > 7000 && XP <= 8000):
        lvl = 'Platina'
    case (XP > 8000 && XP <= 9000):
        lvl = 'Ascendente'
    case (XP > 9000 && XP <= 10000):
        lvl = 'Imortal'
    default:
        lvl = 'Radiante'
}

console.log(`O herói de nome ${name} está no nível ${lvl}`)
