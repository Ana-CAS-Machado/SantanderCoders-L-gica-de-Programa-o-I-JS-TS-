// Exercicio 3
const navegador = prompt("Informe o navegador:");
const sistemaOperacional = prompt("Informe o sistema operacional:");

let elegivel = false;

if (navegador === "Chrome" && sistemaOperacional === "Microsoft") {
  elegivel = true;
} else if (navegador === "Firefox" && sistemaOperacional === "Linux") {
  elegivel = true;
} else if (navegador === "Safari" && sistemaOperacional === "Mac") {
  elegivel = true;
}

if (elegivel) {
  console.log("Cliente elegível para suporte técnico.");
} else {
  console.log("Cliente não elegível para suporte técnico.");
}