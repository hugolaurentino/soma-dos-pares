const numero = [8, 2, 4, 2]
const numero1 = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0

for (let index = 0; index < numero.length; index++) {
    if (numero[index] % 2 == 0) {
        soma += numero[index];
    }
}
console.log(soma);

let quantidade = 0
let soma0 = 0
const cadaNumero = []

while (quantidade < numero1.length) {
    if (numero1[quantidade] % 2 === 0) {
        soma0 = soma0 + numero1[quantidade]
        cadaNumero.push(numero1[quantidade])
    }
    quantidade++
}
console.log(cadaNumero);
console.log(soma0);