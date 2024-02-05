const numeros = [3, 8, 15, 21, 30, 37, 42];
const ehPar = numero => numero % 2 === 0;
const numerosPares = numeros.filter(ehPar);

console.log("Números originais:", numeros);
console.log("Números pares:", numerosPares);