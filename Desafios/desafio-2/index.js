function calcularSaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas
    return saldo
}

function definirRank(saldo) {
    if (saldo <= 10) {
        return 'Ferro';
    } else if (saldo > 10 && saldo <= 20) {
        return 'Bronze';
    } else if (saldo > 20 && saldo <= 50) {
        return 'Prata';
    } else if (saldo > 50 && saldo <= 80) {
        return 'Ouro';
    } else if (saldo > 80 && saldo <= 90) {
        return 'Diamante';
    } else if (saldo > 90 && saldo <= 100) {
        return 'Lendário';
    } else if (saldo > 100) {
        return 'Imortal';
    } else {
        return '**SALDO INVÁLIDO**'
    }
}

const saldoVitorias = calcularSaldo(666, 0)
const nivel = definirRank(saldoVitorias)

console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias, portanto está no nível: ${nivel}`)
