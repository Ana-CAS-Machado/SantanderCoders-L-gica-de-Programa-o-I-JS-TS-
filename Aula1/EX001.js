// Exercicio 1
const idade = parseInt(prompt("Informe a idade:"));
const nacionalidade = prompt("Informe a nacionalidade (brasileira ou outra):").toLowerCase();

const elegivelParaVotar = idade >= 16 && nacionalidade === "brasileira";

if (elegivelParaVotar) {
  console.log("A pessoa é elegível para votar.");
} else {
  console.log("A pessoa não é elegível para votar.");
}
