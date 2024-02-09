const numero = parseInt(prompt("Digite um número:"));
switch (numero % 2) {
  case 0:
    console.log("É par");
    break;
  case 1:
    console.log("É ímpar");
    break;
  default:
    console.log("Número inválido");
}
