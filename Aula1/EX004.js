//Exercicio 4
const idade = parseInt(prompt("Informe a idade:"));
const compraMinima = parseFloat(prompt("Informe o valor da compra mínima:"));
const isNewClient = prompt("É um novo cliente?").toLowerCase() === "true";

if (idade >= 60 && compraMinima >= 100 && !isNewClient) {
  console.log("Elegível para desconto!");
} else {
  console.log("Não elegível para desconto.");
}