const idades = [15, 22, 17, 20, 30, 12];
const maiorOuIgualA18 = idade => idade >= 18;
const indicePrimeiroMaiorOuIgualA18 = idades.findIndex(maiorOuIgualA18);

console.log("Idades:", idades);
console.log("Índice do primeiro elemento maior ou igual a 18:", indicePrimeiroMaiorOuIgualA18);