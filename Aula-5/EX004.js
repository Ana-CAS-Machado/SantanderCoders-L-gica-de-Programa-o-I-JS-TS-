const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa;
while (true) {
  tentativa = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  if (tentativa === numeroAleatorio) {
    console.log("Parabéns! Você acertou o número!");
    break; 
  } else if (tentativa < numeroAleatorio) {
    console.log("Tente um número maior.");
  } else {
    console.log("Tente um número menor.");
  }
}