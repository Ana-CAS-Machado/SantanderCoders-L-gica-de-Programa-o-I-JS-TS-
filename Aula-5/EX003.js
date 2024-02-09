let numero;
let soma = 0;
while (true) {
  numero = parseInt(prompt("Digite um número inteiro (digite 0 para sair):"));
  if (numero === 0) {
    break;
  }
  if (numero % 2 === 0) {
    soma += numero;
  }
}
console.log(`A soma dos números pares inseridos é: ${soma}`)