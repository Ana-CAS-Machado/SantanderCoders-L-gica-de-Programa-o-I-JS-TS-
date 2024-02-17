const valores = { valor1: 10, valor2: 20, valor3: 30, valor4: 40 };
let soma = 0;
for (let chave in valores) {
    soma += valores[chave];
}
console.log("A soma dos valores é:", soma);
