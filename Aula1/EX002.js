// Exercicio 2
const salario = parseFloat(prompt("Informe o salário:"));
const scoreDeCredito = parseInt(prompt("Informe o score de crédito:"));
const idade = parseInt(prompt("Informe a idade:"));

const aprovadoParaEmprestimo = salario >= 5000 && scoreDeCredito >= 700 && idade >= 18;

if (aprovadoParaEmprestimo) {
  console.log("A pessoa está aprovada para o empréstimo.");
} else {
  console.log("A pessoa não está aprovada para o empréstimo.");
}