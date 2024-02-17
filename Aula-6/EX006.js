const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroBuscado = 7;
let encontrado = false;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    console.log("Achei o número", numeroBuscado);
} else {
    console.log("Número não encontrado");
}