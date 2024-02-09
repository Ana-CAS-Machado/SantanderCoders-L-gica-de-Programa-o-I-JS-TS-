const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

let maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}

console.log("O maior número é:", maiorNumero);
