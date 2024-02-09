const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo Isósceles");
} else {
    console.log("Triângulo Escaleno");
}
