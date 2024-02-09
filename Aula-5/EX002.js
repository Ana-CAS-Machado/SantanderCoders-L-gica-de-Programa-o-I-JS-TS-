const numero = parseInt(prompt("Digite um número:"));
let divisor = 2;
let primo = true;
while (divisor < numero) {
  if (numero % divisor === 0) {
    primo = false;
    break;
  }
  divisor++;
}
if (primo && numero > 1) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}
